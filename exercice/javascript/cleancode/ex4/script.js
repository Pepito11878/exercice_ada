const cities = [
  { name: "paris", lat: 48.8534, lon: 2.3488 },
  { name: "lyon", lat: 45.75, lon: 4.85 },
  { name: "nantes", lat: 47.2173, lon: -1.5534 },
  { name: "marseille", lat: 43.3, lon: 5.4 },
  { name: "lille", lat: 50.633333, lon: 3.066667 },
];

async function fetchWeather(cityName) {
  try {
    const city = cities.find((c) => c.name === cityName);
    if (!city) return console.error("Ville inconnue :", cityName);

    const resp = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,rain`
    );

    const json = await resp.json();

    document.getElementById(`pluie_${cityName}`).innerHTML =
      `<strong>${json.current.rain}</strong>`;

    document.getElementById(`degres_${cityName}`).innerHTML =
      `<strong>${json.current.temperature_2m}</strong>`;

  } catch (error) {
    console.log(error);
  }
}

fetchWeather("paris");
fetchWeather("lyon");
fetchWeather("nantes");
fetchWeather("marseille");
fetchWeather("lille");