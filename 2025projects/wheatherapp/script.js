window.onload = change_background;
window.onload = getTemperature;

function change_background() {
  let d = new Date();
  let n = d.getHours();
  console.log(n);
  if (n == 6 || n == 7 || n == 8 || n == 9 || n == 10 || n == 11) {
    document.body.className = "morning";
  } else if (n == 12 || n == 13 || n == 14 || n == 15 || n == 16 || n == 17) {
    document.body.className = "day";
  } else if (n == 18 || n == 19 || n == 20 || n == 21) {
    document.body.className = "sunset";
  } else {
    document.body.className = "night";
}
}
function getTemperature(){
  const apiKey = '72b00df91bdffe107676225663ce2db6';
  const cityName = 'Riga';
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp;
    document.getElementById('temperaturedisplay').textContent = `${temperature}°C`;
  })
  .catch(error => {
    console.error(error);
  })
}
