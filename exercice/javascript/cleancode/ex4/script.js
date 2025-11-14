const cities = [
  { name: "paris", lat: 48.8534, lon: 2.3488 },
  { name: "lyon", lat: 45.75, lon: 4.85 },
  { name: "nantes", lat: 47.2173, lon: -1.5534 },
  { name: "marseille", lat: 43.3, lon: 5.4 },
  { name: "lille", lat: 50.633333, lon: 3.066667 },
];

async function fetchWeather(city) {
  for (let i = 0; i < cities.length; i++) {
    if (city !== cities[i].name) {
      console.error("invalid city");
    } else {
      let resp = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${cities[i].lat}&longitude=${cities[i].lon}&current=temperature_2m,rain`
      );

      let json = await resp.json();

      console.log(json.current.rain);

      document.getElementById(
        `pluie_${city}`
      ).innerHTML = `<strong>"${json.current.rain}</strong>`;
      document.getElementById(
        `degres_${city}`
      ).innerHTML = `<strong>${json.current.temperature_2m}</strong>`;
    }
  }
}

fetchWeather("paris");
fetchWeather("lyon");
fetchWeather("nantes");
fetchWeather("marseille");
fetchWeather("lille");
