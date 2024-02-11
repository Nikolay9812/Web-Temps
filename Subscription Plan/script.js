// Get references to all buttons with class "changeButton"
const changeButtons = document.querySelectorAll('.btn');

// Get references to all divs with class "content"
const contentDivs = document.querySelectorAll('.content');

// Add event listener to each button
changeButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Get the target div ID from the data-target attribute
        const targetDivId = this.getAttribute('data-target');

        // Hide all divs
        contentDivs.forEach(div => {
            div.classList.add('hidden');
        });

        // Show the target div
        document.getElementById(targetDivId).classList.remove('hidden');

        // Remove 'selected' class from all buttons
        changeButtons.forEach(btn => {
            btn.classList.remove('selected');
        });

        // Add 'selected' class to the clicked button
        this.classList.add('selected');
    });
});

// Add event listener to each div
contentDivs.forEach(div => {
    div.addEventListener('mouseover', function () {
        // Get the corresponding button for the div
        const targetButton = document.querySelector(`[data-target="${this.id}"]`);

        // Add 'hover' class to the button
        targetButton.classList.add('hover');
    });

    div.addEventListener('mouseout', function () {
        // Get the corresponding button for the div
        const targetButton = document.querySelector(`[data-target="${this.id}"]`);

        // Remove 'hover' class from the button
        targetButton.classList.remove('hover');
    });
});

// Get references to the modal and overlay
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

// Get reference to the subscribe button
const subscribeButton = document.getElementById('subscribeButton');

// Function to show the modal and overlay
function showModal() {
    modal.style.display = 'block';
    overlay.style.display = 'block';

    // Force reflow to enable transition
    modal.offsetWidth;
    overlay.offsetWidth;

    modal.style.opacity = '1';
    overlay.style.opacity = '1';
}

// Function to hide the modal and overlay
function hideModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

// Event listener for the subscribe button
subscribeButton.addEventListener('click', showModal);

// Event listener to close the modal when clicking outside of it
overlay.addEventListener('click', hideModal);

// Event listener to close the modal when clicking the close button
modal.querySelector('.close').addEventListener('click', hideModal);