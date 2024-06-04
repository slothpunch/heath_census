// Prevent the default behaviour of an event, such as form submission
function showWeatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    // console.log(city)

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch((error) => {
            console.error('Error:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try agian.</p>`;
        })

    }

document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);