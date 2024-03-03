// Initialize current day of week and date
var currentDate = new Date();
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentDay = daysOfWeek[currentDate.getDay()];
var currentDateStr = currentDate.toLocaleDateString();
document.getElementById("current-day").textContent = "Current Day: " + currentDay;
document.getElementById("current-date").textContent = "Current Date: " + currentDateStr;

// Function to calculate total worked hours for a time period
function calculateWorkedHours(startHour, endHour) {
    var start = startHour.split(":");
    var end = endHour.split(":");
    var startTime = new Date(0, 0, 0, start[0], start[1], 0);
    var endTime = new Date(0, 0, 0, end[0], end[1], 0);
    var hours = (endTime - startTime) / 1000 / 60 / 60;

    // Handle invalid input and negative hours
    if (isNaN(hours) || hours < 0) {
        return 0;
    }

    // If total worked hours exceed 9 hours, add 45-minute break, otherwise add 30-minute break
    if (hours > 9) {
        hours -= 0.75; // Subtract 45 minutes (45 minutes = 0.75 hours)
    } else {
        hours -= 0.5; // Subtract 30 minutes (30 minutes = 0.5 hours)
    }

    return hours;
}

// Function to validate input values
function validateInputs(startHour, endHour, startKm, endKm) {
    if (!startHour || !endHour || startKm < 0 || endKm < 0) {
        return false;
    }
    return true;
}

// Function to update total hours and km sum
function updateTotalHours() {
    var total = 0;
    var rows = document.querySelectorAll("#time-entries tr");
    rows.forEach(function (row) {
        var startInput = row.querySelector(".start-time");
        var endInput = row.querySelector(".end-time");
        var startKmInput = row.querySelector(".start-km");
        var endKmInput = row.querySelector(".end-km");
        if (startInput && endInput && startKmInput && endKmInput) {
            var workedHours = calculateWorkedHours(startInput.value, endInput.value);
            var startKm = parseFloat(startKmInput.value) || 0;
            var endKm = parseFloat(endKmInput.value) || 0;
            var kmSum = endKm - startKm;
            row.querySelector(".total-worked-hours").textContent = workedHours.toFixed(2);
            row.querySelector(".km-sum").textContent = kmSum.toFixed(2);
            total += workedHours;
        }
    });

    // Handle NaN and negative total hours
    if (isNaN(total) || total < 0) {
        total = 0;
    }

    document.getElementById("total-hours").textContent = total.toFixed(2);
}

// Function to add a new row to the table
function addRow() {
    // Disable input fields in previously added rows
    var rows = document.querySelectorAll("#time-entries tr");
    rows.forEach(function (row) {
        var inputs = row.querySelectorAll("input, select");
        inputs.forEach(function (input) {
            input.disabled = true;
        });
    });

    var newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>
        <select class="car-plate">
          <option value="AZ ZP 33">AZ ZP 33</option>
          <option value="F ZP 10">F ZP 10</option>
          <!-- Add more options as needed -->
        </select>
      </td>
      <td>
        <select class="route">
          <option value="CA_A3">CA_A3</option>
          <option value="CA_A22">CA_A22</option>
          <!-- Add more options as needed -->
        </select>
      </td>
      <td><input type="time" class="start-time"></td>
      <td><input type="time" class="end-time"></td>
      <td><input type="number" class="start-km" min="0"></td>
      <td><input type="number" class="end-km" min="0"></td>
      <td class="km-sum">0.00</td>
      <td class="total-worked-hours">0.00</td>
      <td class="day-of-week">${currentDay}</td>
      <td class="date">${currentDateStr}</td>
    `;
    document.getElementById("time-entries").appendChild(newRow);
    updateTotalHours();
}

// Event listener for input changes
document.getElementById("time-entries").addEventListener("input", function () {
    updateTotalHours();
});

// Event listener for add row button
document.getElementById("add-row-btn").addEventListener("click", function () {
    addRow();
});

// Add an initial row
addRow();
