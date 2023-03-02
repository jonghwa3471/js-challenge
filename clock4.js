const clock = document.querySelector("h2");

function calculateXmas() {
  const christmas = new Date("2023-12-25");
  const today = new Date();

  const dDay = christmas - today;

  const dDayDay = Math.floor(dDay / (24 * 60 * 60 * 1000));
  const dDayHour = String(Math.floor(dDay / (60 * 60 * 1000)) % 24).padStart(
    2,
    "0"
  );
  const dDayMinute = String(Math.floor(dDay / (60 * 1000)) % 60).padStart(
    2,
    "0"
  );
  const dDaySecond = String(Math.floor(dDay / 1000) % 60).padStart(2, "0");

  clock.innerText = `${dDayDay}d ${dDayHour}h ${dDayMinute}m ${dDaySecond}s`;
}

calculateXmas();
setInterval(calculateXmas, 1000);
