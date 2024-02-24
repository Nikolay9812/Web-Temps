function countdown(endTime) {
    var intervalId = setInterval(function () {
        var currentTime = new Date().getTime();
        var timeDifference = endTime - currentTime;

        if (timeDifference <= 0) {
            clearInterval(intervalId);
            document.getElementById("countdown").innerHTML = "Time's out!";
        } else {
            var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML =
                `<div class="title"><h1>just a little more...</h1></div>
            <div class="counter">
                <div class="days element">
                    <h2>days</h2>
                    <h2>${days}</h2>
                </div>
                <div class="hours element">
                    <h2>hours</h2>
                    <h2>${hours}</h2>
                </div>
                <div class="minutes element">
                    <h2>minutes</h2>
                    <h2>${minutes}</h2>
                </div>
            </div>`
                ;
        }
    }, 1000);
}

// Example usage: Set the end time
var endTime = new Date("2024-02-28T00:00:00").getTime(); // Set your desired end time here
countdown(endTime);