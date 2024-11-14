document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'e4b0652da7c269b0821a7cfcb13672d5';
    const capitals = ['Rome', 'Paris', 'London', 'Tokyo', 'Washington'];

    capitals.forEach(capital => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                const weatherDiv = document.getElementById('weather');
                const capitalWeather = document.createElement('div');
                capitalWeather.innerHTML = `<h2>${capital}</h2><p>Temperature: ${data.main.temp}°C</p>`;
                weatherDiv.appendChild(capitalWeather);
            })
            .catch(error => console.error('Errore:', error));
    });
});
