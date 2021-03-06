//1) In your week5 repo and on your practice branch, add a countdown.html, a countdown.js, and optionally a countdown.css.

//2) You will be creating a countdown timer to a certain time and date (Halloween, your birthday, release of a new movie, or let your user pick a date and time if you want to be real fancy).

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Output the result in an element with id="Timer"
  document.getElementById("Timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
//3) The increments should show on screen. It should stop when it reaches the date and n{o}t go into the negatives.
if (distance < 0) {
    clearInterval(x);
    document.getElementById("Timer").innerHTML = "EXPIRED";
  }
}, 1000);
//4) test test test test.

//5) optional: style it.

//6) git add, commit, push, merge