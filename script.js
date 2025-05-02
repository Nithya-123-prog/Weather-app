const apiKey = '9b285b97ca88ede002fcc636140025d3';
async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    document.getElementById("weatherResult").innerHTML = `
      🌍 Location: ${data.name}, ${data.sys.country}<br>
      🌡️ Temperature: ${data.main.temp}°C<br>
      ☁️ Weather: ${data.weather[0].main}
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = "❌ " + error.message;
  }
}
