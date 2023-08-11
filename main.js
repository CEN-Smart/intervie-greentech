const inputTimeValue = document.querySelector(".clock-input")

const setTimeButton = document.querySelector(".clock-button")

const hourHand = document.querySelector(".hour")

const minuteHand = document.querySelector(".minute")

function HandleClockInput() {
  const inputValue = inputTimeValue.value.trim().split(":");
  const hour = parseInt(inputValue[0]);
  const minute = parseInt(inputValue[1]);
  const hourDegree = (hour * 30) + (minute * 0.5);
  const minuteDegree = minute * 6;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  inputValue.value = "";

} 

setTimeButton.addEventListener('click', HandleClockInput)