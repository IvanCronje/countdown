let countdownActive = false;

function startCountdown() {
  if (!countdownActive) {
    // Get the current date and time
    var startDate = new Date().getTime();

    // Set the end date to one year from the start date
    var endDate = new Date(startDate);
    endDate.setFullYear(endDate.getFullYear() + 1);

    // Update the countdown and encouragement message every 1 second
    var x = setInterval(function() {
      // Get the current date and time
      var now = new Date().getTime();

      // Calculate the remaining time
      var distance = endDate - now;

      // Calculate days, hours, minutes, and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown
      document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      // Update the encouragement message every 24 hours
      if (now % (1000 * 60 * 60 * 24) === 0) {
        updateEncouragementMessage();
      }

      // Change background picture every day
      var dayOfYear = Math.floor((now - startDate) / (1000 * 60 * 60 * 24)) + 1;
      changeBackgroundPicture(dayOfYear);

      // If the countdown is over, display a message
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }, 1000);

    countdownActive = true;
  }
}

function updateEncouragementMessage() {
  var encouragementMessages = [
    "You're doing great! Keep going!",
    "Stay strong and focused!",
    "Believe in yourself. You've got this!",
    "Every step is a step closer to your goals.",
    "Keep pushing forward with determination!"
  ];

  var randomIndex = Math.floor(Math.random() * encouragementMessages.length);
  var message = encouragementMessages[randomIndex];

  document.getElementById("encouragement").innerHTML = message;
}

function changeBackgroundPicture(dayOfYear) {
  // Assuming you have 20 pictures named pic_1.jpg to pic_20.jpg in the "pics" folder
  // Use modulo operator to cycle through the available pictures
  var pictureNumber = dayOfYear % 20 || 20; // This ensures the remainder is never 0
  var imageURL = `url('pics/pic_${pictureNumber}.jpg')`;
  document.body.style.backgroundImage = imageURL;
}

