document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners for country dropdowns
    document.getElementById("location-country").addEventListener("change", function() {
      // Populate location city dropdown based on selected location country
      populateCities("location-city", this.value);
    });
  
    document.getElementById("destination-country").addEventListener("change", function() {
      // Populate destination city dropdown based on selected destination country
      populateCities("destination-city", this.value);
    });
  
    // Add event listener for form submission
    document.getElementById("shipping-calculator").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
      // Perform real-time price calculation and display the result
      calculatePrice();
    });
  });
  
  // Function to populate city dropdowns manually
  function populateCities(cityDropdownId, country) {
    var cityDropdown = document.getElementById(cityDropdownId);
    // Clear existing options
    cityDropdown.innerHTML = "<option value=''>Select City</option>";
    // Manually add city options based on the selected country
    if (country === "Germany") {
      addCityOption(cityDropdown, "Berlin");
      addCityOption(cityDropdown, "Hamburg");
      addCityOption(cityDropdown, "Munich");
    } else if (country === "France") {
      addCityOption(cityDropdown, "Paris");
      addCityOption(cityDropdown, "Marseille");
      addCityOption(cityDropdown, "Lyon");
    } else if (country === "Italy") {
      addCityOption(cityDropdown, "Rome");
      addCityOption(cityDropdown, "Milan");
      addCityOption(cityDropdown, "Naples");
    } else if (country === "Spain") {
      addCityOption(cityDropdown, "Madrid");
      addCityOption(cityDropdown, "Barcelona");
      addCityOption(cityDropdown, "Valencia");
    } else if (country === "United Kingdom") {
      addCityOption(cityDropdown, "London");
      addCityOption(cityDropdown, "Manchester");
      addCityOption(cityDropdown, "Birmingham");
    }
  }
  
  // Function to add city option to dropdown
  function addCityOption(cityDropdown, cityName) {
    var option = document.createElement("option");
    option.value = cityName;
    option.textContent = cityName;
    cityDropdown.appendChild(option);
  }
  
  // Function to calculate shipping price in real-time
  function calculatePrice() {
    // Retrieve form data
    var locationCountry = document.getElementById("location-country").value;
    var locationCity = document.getElementById("location-city").value;
    var destinationCountry = document.getElementById("destination-country").value;
    var destinationCity = document.getElementById("destination-city").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var dimensions = document.getElementById("dimensions").value;
  
    // Perform validation checks
    if (!locationCountry || !locationCity || !destinationCountry || !destinationCity || isNaN(weight) || weight <= 0 || !isValidDimensions(dimensions)) {
      displayError("Please fill out all fields correctly.");
      return;
    }
  
    // Calculation logic for shipping price
    var price = calculateShippingPrice(weight, dimensions);
  
    // Display the result
    document.getElementById("result").innerHTML = "Estimated Shipping Price: $" + price.toFixed(2);
  }
  
  // Function to validate dimensions input
  function isValidDimensions(dimensions) {
    var regex = /^\d+(\.\d+)?\s*x\s*\d+(\.\d+)?\s*x\s*\d+(\.\d+)?$/;
    return regex.test(dimensions);
  }
  
  // Function to display error message
  function displayError(message) {
    document.getElementById("result").innerHTML = "<span style='color: red;'>" + message + "</span>";
  }
  
  // Function to calculate shipping price based on weight, dimensions, and distance
function calculateShippingPrice(weight, dimensions, locationCountry, destinationCountry) {
    // Base price per kilogram
    var basePricePerKg = 2.5;
  
    // Distance-based pricing (example values)
    var distancePrice = calculateDistancePrice(locationCountry, destinationCountry);
  
    // Size-based pricing tiers (example values)
    var sizePrice = calculateSizePrice(dimensions);
  
    // Final price calculation
    var price = (basePricePerKg * weight) + distancePrice + sizePrice;
  
    return price;
  }
  
  // Function to calculate distance-based pricing
  function calculateDistancePrice(locationCountry, destinationCountry) {
    // Example distance-based pricing logic
    // You can replace this with a more accurate method such as using an API to calculate distance
    var distance = getDistance(locationCountry, destinationCountry);
    if (distance < 500) {
      return 10; // Example price for short distances
    } else if (distance >= 500 && distance < 1000) {
      return 15; // Example price for medium distances
    } else {
      return 20; // Example price for long distances
    }
  }
  
  // Function to calculate size-based pricing tiers
  function calculateSizePrice(dimensions) {
    // Example size-based pricing logic
    // You can define your own pricing tiers based on the dimensions of the package
    var [length, width, height] = dimensions.split('x').map(parseFloat);
    var volume = length * width * height;
    if (volume < 1000) {
      return 5; // Example price for small packages
    } else if (volume >= 1000 && volume < 5000) {
      return 10; // Example price for medium packages
    } else {
      return 15; // Example price for large packages
    }
  }
  
  // Function to simulate getting distance between countries (replace with actual method)
  function getDistance(locationCountry, destinationCountry) {
    // Example distance calculation (replace with actual method, e.g., using an API)
    // This is a simplified example for demonstration purposes
    var distances = {
      "Germany": {
        "France": 500,
        "Italy": 1000,
        // Add more distances as needed
      },
      "France": {
        "Germany": 500,
        "Italy": 800,
        // Add more distances as needed
      },
      // Add distances for other countries as needed
    };
  
    return distances[locationCountry][destinationCountry] || 1000; // Default distance for unknown countries
  }
  