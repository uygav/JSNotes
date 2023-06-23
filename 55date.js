let date = new Date();
// let year = date.getFullYear();
// let dayOfMonth = date.getDate();
// let dayOfWeek = date.getDay();
// let month = date.getMonth();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let second = date.getSeconds();
// let ms = date.getMilliseconds();
// date = date.toLocaleDateString();
document.getElementById("myLabel").innerHTML =
  formatDate(date) + " " + formatTime(date);

function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${month}/${day}/${year}`;
}

function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let amOrPm = hours >= 12 ? "pm" : "am";

  hours = hours % 12 || 12;
  return `${hours}:${minutes}:${seconds} ${amOrPm}`;
}
