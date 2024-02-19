document.addEventListener("DOMContentLoaded", function () {
    // Handle form submission for adding alarm
    var addAlarmForm = document.getElementById("addAlarmForm");
    addAlarmForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get the time entered by the user
        var alarmTime = addAlarmForm.elements["alarmTime"].value;

        // Create a new alarm element
        var newAlarm = document.createElement("li");
        newAlarm.classList.add("alarm");
        newAlarm.innerHTML = `
            <div class="create-hour">
                <span class="alarm-time">${alarmTime}</span>
                <div class="toggle">
                    <input type="checkbox" class="toggle-checkbox" id="toggle${Date.now()}">
                    <label class="toggle-label" for="toggle${Date.now()}"></label>
                </div>
                <label class="toggle">
                <input type="checkbox" class="toggle-checkbox" id="toggle${Date.now()}">
  <span class="toggle-label" round"></span>
</label>
            </div>
            <div class="days-weak">
                <span>su</span>
                <span>mo</span>
                <span>tu</span>
                <span>we</span>
                <span>th</span>
                <span>fr</span>
                <span>sa</span>
            </div>
            <svg class="delete-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>`;

        // Append the new alarm to the alarms list
        var alarmsList = document.querySelector(".alarms");
        alarmsList.appendChild(newAlarm);

        // Close the modal
        modal.style.display = "none";

        // Reset the form
        addAlarmForm.reset();

        // Attach event listener to the new delete button
        attachDeleteListener(newAlarm.querySelector('.delete-btn'));

        // Attach event listener to the toggle switch
        attachToggleListener(newAlarm.querySelector('.toggle-checkbox'));
    });

    // Function to attach event listener to delete button
    function attachDeleteListener(deleteButton) {
        deleteButton.addEventListener('click', function () {
            // Get the parent alarm element and remove it
            var alarm = this.closest('.alarm');
            alarm.remove();
        });
    }

    // Function to attach event listener to toggle switch
    function attachToggleListener(toggleSwitch) {
        toggleSwitch.addEventListener('change', function () {
            var alarmItem = this.closest('.alarm');
            var alarmTime = alarmItem.querySelector('.alarm-time');
            if (this.checked) {
                alarmTime.style.color = '#fff'; // Change text color to white when switch is on
            } else {
                alarmTime.style.color = 'rgba(0,0,0,0.15)'; // Change text color to red when switch is off
            }
        });
    }

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var addAlarmButton = document.querySelector('.add-alarm-btn .circle');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    addAlarmButton.addEventListener('click', function () {
        modal.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Function to display the modal
    function openModal() {
        modal.style.display = "block";
    }

    // Hardcoded alarms
    var hardcodedAlarms = [
        { time: "7:30 am" },
        { time: "5:45 pm" },
        { time: "1:25 pm" }
    ];

    // Add hardcoded alarms to the list
    var alarmsList = document.querySelector(".alarms");
    hardcodedAlarms.forEach(function (alarmData) {
        var newAlarm = document.createElement("li");
        newAlarm.classList.add("alarm");
        newAlarm.innerHTML = `
            <div class="create-hour">
                <span class="alarm-time">${alarmData.time}</span>
                <div class="toggle">
                    <input type="checkbox" class="toggle-checkbox" id="toggle${Date.now()}">
                    <label class="toggle-label" for="toggle${Date.now()}"></label>
                </div>
            </div>
            <div class="days-weak">
                <span>su</span>
                <span>mo</span>
                <span>tu</span>
                <span>we</span>
                <span>th</span>
                <span>fr</span>
                <span>sa</span>
            </div>
            <svg class="delete-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>`;

        // Append the new alarm to the alarms list
        alarmsList.appendChild(newAlarm);

        // Attach event listener to the delete button
        attachDeleteListener(newAlarm.querySelector('.delete-btn'));

        // Attach event listener to the toggle switch
        attachToggleListener(newAlarm.querySelector('.toggle-checkbox'));
    });

    // Function to update the current time
    function updateTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // Handle midnight (0 hours)
        minutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero for single digit minutes
        var timeString = hours + ':' + minutes + ' ' + ampm;

        // Update the time displayed in the HTML
        document.querySelector('.chosen-time .time').textContent = timeString;
    }

    // Function to update the current date
    function updateDate() {
        var currentDate = new Date();
        var day = currentDate.getDate();
        var month = currentDate.toLocaleString('en', { month: 'long' });
        var suffix = getOrdinalSuffix(day);
        var dateString = day + suffix + ' ' + month;

        // Update the date displayed in the HTML
        document.getElementById('currentDate').textContent = dateString;
    }

    // Function to get the ordinal suffix for a number
    function getOrdinalSuffix(number) {
        if (number >= 11 && number <= 13) {
            return 'th';
        }
        var lastDigit = number % 10;
        switch (lastDigit) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        }
    }

    // Call the updateTime and updateDate functions initially to display the current time and date
    updateTime();
    updateDate();

    // Update the time and date every second
    setInterval(function () {
        updateTime();
        updateDate();
    }, 1000);
});
