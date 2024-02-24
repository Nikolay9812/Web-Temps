document.addEventListener('DOMContentLoaded', function () {
    var exercisesData = [
        "1 Why Sass?",
        "2 Compiling Sass",
        "3 Sass Overview",
        "4 Nesting Selectors",
        "5 Nesting Properties",
        "6 Variables in Sass",
        "7 Sass(y) Types",
        "8 Maps & Lists"
    ];

    var courseProgress = document.getElementById('course-progress');

    exercisesData.forEach(function (exerciseName, index) {
        var exercise = document.createElement('li');
        exercise.textContent = exerciseName;
        exercise.classList.add('exercise');
        if (index < 3) {
            exercise.classList.add('completed');
        }
        exercise.addEventListener('dblclick', function () {
            exercise.classList.toggle('completed');
        });
        courseProgress.appendChild(exercise);
    });
});