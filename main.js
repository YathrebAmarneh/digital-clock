setInterval(showClock, 1000);
function showClock() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  let currentTime = `${hour}:${minute}:${second}`;
  document.getElementsByClassName("clock-container")[0].innerHTML = currentTime;
}
showClock();
