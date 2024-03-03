// Function to fetch data from JSON file and integrate with existing code
function fetchFoodDataAndIntegrate() {
    fetch('foods.json')
        .then(response => response.json())
        .then(foods => {
            const foodGrid = document.getElementById('foodGrid');
            foods.forEach(food => {
                const foodItem = document.createElement('div');
                foodItem.classList.add('food-item');
                foodItem.dataset.name = food.name;
                foodItem.dataset.calories = food.calories;
                foodItem.dataset.protein = food.protein;
                foodItem.dataset.carbohydrates = food.carbohydrates;
                foodItem.dataset.fat = food.fat;
                foodItem.innerHTML = `
                    <img src="${food.image}" alt="${food.name}">
                    <input type="number" class="weight-input" placeholder="Weight (g)">
                    <svg class="edit-item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>
                    <svg class="delete-item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>
                `;
                foodGrid.appendChild(foodItem);
            });

            // Call other functions that depend on food data, e.g., event listeners
            addEventListeners();
        })
        .catch(error => console.error('Error loading foods.json:', error));
}

// Function to add event listeners
function addEventListeners() {
    // Event listener for the calculate button
    document.getElementById("calculateButton").addEventListener("click", function () {
        var selectedItems = document.querySelectorAll('.food-item.selected');
        var resultDiv = document.getElementById("result");

        var totalWeight = 0;
        var totalCalories = 0;
        var totalProtein = 0;
        var totalCarbohydrates = 0;
        var totalFat = 0;

        selectedItems.forEach(function (item) {
            var weightInput = item.querySelector('.weight-input');
            var weight = parseFloat(weightInput.value);
            var caloriesPer100g = parseInt(item.getAttribute("data-calories"));
            var proteinPer100g = parseFloat(item.getAttribute("data-protein"));
            var carbohydratesPer100g = parseFloat(item.getAttribute("data-carbohydrates"));
            var fatPer100g = parseFloat(item.getAttribute("data-fat"));

            if (!isNaN(weight) && weight > 0) {
                var weightRatio = weight / 100;
                totalWeight += weight;
                totalCalories += caloriesPer100g * weightRatio;
                totalProtein += proteinPer100g * weightRatio;
                totalCarbohydrates += carbohydratesPer100g * weightRatio;
                totalFat += fatPer100g * weightRatio;
            }
        });

        if (totalWeight === 0) {
            resultDiv.textContent = "Please select at least one food item and enter its weight.";
            return;
        }

        resultDiv.innerHTML = `
                <p>Total Weight: ${totalWeight.toFixed(2)} g</p>
                <p>Total Calories: ${totalCalories.toFixed(2)} kcal</p>
                <p>Total Protein: ${totalProtein.toFixed(2)} g</p>
                <p>Total Carbohydrates: ${totalCarbohydrates.toFixed(2)} g</p>
                <p>Total Fat: ${totalFat.toFixed(2)} g</p>
            `;
    });

    // Event delegation for selecting food items
    document.addEventListener('click', function (event) {
        if (event.target.closest('.food-item')) {
            event.target.closest('.food-item').classList.toggle('selected');
        }
    });

    // Event listener for the form submission in the modal
    document.getElementById('addItemForm').addEventListener('submit', function (event) {
        // Your existing form submission logic goes here
        // ...
    });

    // Rest of your existing event listeners
    // ...
}

// Call the function to fetch data and integrate with existing code
fetchFoodDataAndIntegrate();

function openModal() {
    document.getElementById('addItemModal').style.display = 'block';
}

// Function to open the add/edit item modal
function openModal() {
    document.getElementById('addItemModal').style.display = 'block';
}

// Function to close the add/edit item modal
function closeModal() {
    document.getElementById('addItemModal').style.display = 'none';
    document.getElementById('itemId').removeAttribute('data-editing-id'); // Clear editing ID
}

// Event listener for the add item button
document.getElementById('addItemButton').addEventListener('click', function () {
    openModal();
    document.getElementById('itemId').removeAttribute('data-editing-id'); // Clear editing ID
});

// Event listener for the close button in the modal
document.getElementsByClassName('close')[0].addEventListener('click', function () {
    closeModal();
});

// Function to create food item element
function createFoodItemElement(item) {
    var foodItem = document.createElement('div');
    foodItem.className = 'food-item';
    foodItem.setAttribute('data-name', item.name);
    foodItem.setAttribute('data-calories', item.calories);
    foodItem.setAttribute('data-protein', item.protein);
    foodItem.setAttribute('data-carbohydrates', item.carbohydrates);
    foodItem.setAttribute('data-fat', item.fat);
    foodItem.innerHTML = `
            <img src="placeholder.png" alt="${item.name}">
            <input type="number" class="weight-input" placeholder="Weight (g)">
            <button class="edit-item">Edit</button>
            <button class="delete-item">Delete</button>
        `;
    return foodItem;
}

// Function to handle edit button click
function handleEditButtonClick(event) {
    var foodItem = event.target.closest('.food-item');
    var name = foodItem.getAttribute('data-name');
    var calories = foodItem.getAttribute('data-calories');
    var protein = foodItem.getAttribute('data-protein');
    var carbohydrates = foodItem.getAttribute('data-carbohydrates');
    var fat = foodItem.getAttribute('data-fat');

    // Populate the modal with item data for editing
    document.getElementById('itemName').value = name;
    document.getElementById('itemCalories').value = calories;
    document.getElementById('itemProtein').value = protein;
    document.getElementById('itemCarbohydrates').value = carbohydrates;
    document.getElementById('itemFat').value = fat;

    // Set a data attribute to identify the item being edited
    document.getElementById('itemId').setAttribute('data-editing-id', foodItem.getAttribute('data-name'));

    // Open the modal
    openModal();
}

// Function to handle delete button click
function handleDeleteButtonClick(event) {
    var foodItem = event.target.closest('.food-item');
    foodItem.remove();
}

// Event listener for the form submission in the modal
document.getElementById('addItemForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    var formData = new FormData(this);
    var newItem = {};
    formData.forEach(function (value, key) {
        newItem[key] = value;
    });

    var foodGrid = document.getElementById('foodGrid');
    var editingId = document.getElementById('itemId').getAttribute('data-editing-id');

    if (editingId) {
        // If editing an existing item
        var foodItem = foodGrid.querySelector(`.food-item[data-name="${editingId}"]`);
        foodItem.setAttribute('data-name', newItem.name);
        foodItem.setAttribute('data-calories', newItem.calories);
        foodItem.setAttribute('data-protein', newItem.protein);
        foodItem.setAttribute('data-carbohydrates', newItem.carbohydrates);
        foodItem.setAttribute('data-fat', newItem.fat);
        foodItem.querySelector('img').alt = newItem.name;
        document.querySelector(`input[data-name="${editingId}"]`).value = newItem.name; // Update weight input value if needed
    } else {
        // If adding a new item
        var foodItem = createFoodItemElement(newItem);
        foodGrid.appendChild(foodItem);
    }

    // Close modal after submission
    closeModal();

    // Reset form inputs
    this.reset();
});


// Event delegation for edit and delete buttons
document.getElementById('foodGrid').addEventListener('click', function (event) {
    if (event.target.classList.contains('edit-item')) {
        handleEditButtonClick(event);
    } else if (event.target.classList.contains('delete-item')) {
        handleDeleteButtonClick(event);
    }
});

// Get the modal
var modal = document.getElementById('addItemModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}