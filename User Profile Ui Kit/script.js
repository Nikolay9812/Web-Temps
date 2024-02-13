var draggedItem = null;
var offsetX, offsetY;

// Function to get the position of an element
function getPosition(element) {
    var rect = element.getBoundingClientRect();
    return { x: rect.left, y: rect.top };
}

document.addEventListener("mousedown", function (event) {
    if (event.target.classList.contains('draggable')) {
        draggedItem = event.target;
        var position = getPosition(draggedItem);
        offsetX = event.clientX - position.x;
        offsetY = event.clientY - position.y;
    }
});

document.addEventListener("mousemove", function (event) {
    if (draggedItem !== null) {
        event.preventDefault();
        var newX = event.clientX - offsetX;
        var newY = event.clientY - offsetY;
        draggedItem.style.left = newX + 'px';
        draggedItem.style.top = newY + 'px';
    }
});

document.addEventListener("mouseup", function (event) {
    draggedItem = null;
});