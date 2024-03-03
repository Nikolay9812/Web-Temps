document.getElementById("shippingForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get values from form
    var origin = document.getElementById("origin").value;
    var destination = document.getElementById("destination").value;
    var weight = parseFloat(document.getElementById("weight").value);

    // Perform calculations (simplified for demonstration)
    var distance = calculateDistance(origin, destination);
    var shippingCost = calculateShippingCost(weight, distance);

    // Display result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Shipping cost from " + origin + " to " + destination + " is " + shippingCost.toFixed(2) + " EUR.";
});

// Function to calculate distance (simplified for demonstration)
function calculateDistance(origin, destination) {
    // Dummy data for demonstration
    var distances = {
        "Paris": {
            "Madrid": 1000,
            "Rome": 1200
        },
        "Berlin": {
            "Madrid": 1500,
            "Rome": 1300
        }
    };
    return distances[origin][destination];
}

// Function to calculate shipping cost (simplified for demonstration)
function calculateShippingCost(weight, distance) {
    // Dummy formula for demonstration
    var costPerKm = 0.1; // EUR per kilometer
    return weight * distance * costPerKm;
}
