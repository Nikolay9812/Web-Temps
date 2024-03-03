let timerInterval;
    let startTime;
    let endTime;
    let isTimerRunning = false;

    const timerDisplay = document.getElementById('timer');
    const startButton = document.getElementById('startBtn');
    const savedTimesTableBody = document.querySelector('#savedTimesTable tbody');

    function startTimer() {
      if (!isTimerRunning) {
        startTime = new Date();
        timerInterval = setInterval(updateTimer, 1000);
        isTimerRunning = true;
        startButton.textContent = 'Stop';
      } else {
        stopTimer();
      }
    }

    function stopTimer() {
      clearInterval(timerInterval);
      endTime = new Date();
      isTimerRunning = false;
      startButton.textContent = 'Start';
      saveTime();
      resetTimer();
    }

    function updateTimer() {
      const currentTime = new Date();
      const timeDiff = Math.floor((currentTime - startTime) / 1000);
      const hours = Math.floor(timeDiff / 3600);
      const minutes = Math.floor((timeDiff % 3600) / 60);
      const seconds = timeDiff % 60;

      timerDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    function pad(number) {
      return number < 10 ? '0' + number : number;
    }

    function saveTime() {
      const startDate = formatDate(startTime);
      const endDate = formatDate(endTime);
      const currentDate = getCurrentDate(); // Get current date in YYYY/MM/DD format
      const dayOfWeek = getDayOfWeek(startTime.getDay());
      const stoppedHours = timerDisplay.textContent;

      const newRow = savedTimesTableBody.insertRow();
      newRow.insertCell().textContent = formatDate(startTime); // Started hour
      newRow.insertCell().textContent = formatDate(endTime); // Stopped hour
      newRow.insertCell().textContent = currentDate; // Current date
      newRow.insertCell().textContent = dayOfWeek; // Day of week
      newRow.insertCell().textContent = stoppedHours; // Stopped hours
    }

    function formatDate(date) {
      const hours = pad(date.getHours());
      const minutes = pad(date.getMinutes());
      const seconds = pad(date.getSeconds());
      return `${hours}:${minutes}:${seconds}`;
    }

    function getCurrentDate() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = pad(currentDate.getMonth() + 1); // Month is zero-based, so we add 1
      const day = pad(currentDate.getDate());
      return `${year}/${month}/${day}`;
    }

    function getDayOfWeek(day) {
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return daysOfWeek[day];
    }

    function resetTimer() {
      timerDisplay.textContent = '00:00:00';
    }

    startButton.addEventListener('click', startTimer);