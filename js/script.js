const weatherCard = document.querySelector('.weather-card');
const cityInput = document.querySelector('.city-input');
const findButton = document.querySelector('.find-weather');

findButton.addEventListener('click', () => {
    let city = cityInput.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b417113fbb3f4e1a4a005dcce4bd1929`)
    .then((request) => {
        if(request.ok){
            return request.json()
        }else{
            let errorMessage = document.querySelector('.error');
            errorMessage.classList.add('error-active');
            setTimeout( () => {
                errorMessage.classList.remove('error-active');
            }, 1500);
        }
    })
    .then((data) => {
        weatherCard.innerHTML = `<h2 class="weather-card__city">${data.name}</h2>
                            <span class="weather-card__temperature">${Math.round(data.main.temp - 273)} &deg;</span>
                            <span class="weather-card__weather">${data.weather[0].main}</span>
                            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" class="weather-card__weather-image" alt="Weather image" />
                            <div class="wind">
                                <h2 class="wind__title">Shamol</h2>
                                <div class="wind__details">
                                    <span class="wind__deg">${data.wind.deg}</span>
                                    <span class="wind__speed">${data.wind.speed} m/s</span>
                                </div>
                            </div>`;
    });

});