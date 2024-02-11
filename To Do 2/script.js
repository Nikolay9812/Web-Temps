var completedCount = 0;

    var modal = document.getElementById("myModal");
    var btn = document.getElementById("openModalButton");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById("addItemButton").addEventListener("click", function() {
        var itemInput = document.getElementById("modalItemInput");
        var itemValue = itemInput.value.trim();
        if (itemValue !== "") {
            var newItem = document.createElement("li");
            newItem.innerHTML = '<div class="circle"></div><div><strong>' + itemValue + '</strong></div>';
            document.getElementById("itemList").appendChild(newItem);
            itemInput.value = "";
            modal.style.display = "none";
            newItem.addEventListener("click", function() {
                toggleCompleted(newItem);
            });
        }
    });

    document.getElementById("itemList").addEventListener("click", function(event) {
        var clickedItem = event.target.closest("li");
        if (clickedItem && !clickedItem.classList.contains("completed")) {
            toggleCompleted(clickedItem);
        }
    });

    document.getElementById("completedItems").addEventListener("click", function(event) {
        var clickedItem = event.target.closest("li");
        if (clickedItem && clickedItem.classList.contains("completed")) {
            toggleCompleted(clickedItem);
        }
    });

    function toggleCompleted(item) {
        item.classList.toggle("completed");
        if (item.classList.contains("completed")) {
            completedCount++;
            document.getElementById("completedCounter").textContent = completedCount;
            document.getElementById("completedItems").appendChild(item);
        } else {
            completedCount--;
            document.getElementById("completedCounter").textContent = completedCount;
            document.getElementById("itemList").appendChild(item);
        }
    }