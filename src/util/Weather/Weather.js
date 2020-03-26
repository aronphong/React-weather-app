const apiKey = "4977766ec9fddf6a4a774c619886639d"

const Weather = {

    async getWeatherData(searchTerm, units="imperial") {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}&units=${units}`)
            const data = await response.json();
            return await data;
        } catch (error) {
            console.log(error)
        }
    },

    // Save only relevant data to state
    saveWeatherData(data) {
        let forecastData = {
            main: data.weather[0].main,
            description: data.weather[0].description,
            temp: data.main.temp,
            feelsLike: data.main.feels_like,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            pressure: data.main.pressure,
            wind: {
                speed: data.wind.speed,
                degrees: data.wind.deg
            },
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset
        };

        return forecastData;
    }
};

export default Weather;