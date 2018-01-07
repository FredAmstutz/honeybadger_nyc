$(function() {
    function getWeatherData(city) {
        const apiCall = $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            data: {
                q: city,
                APPID: '2770a416c4b1dcbd5a0a93e03e364fc9',
                units: 'imperial'
            },
            dataType: 'json',
            method: 'GET'
        });

        return apiCall;
    }

    function transformWeatherData(weatherData) {
        const name = weatherData.name;
        const temperature = weatherData.main.temp;
        const description = weatherData.weather[0].description;
        const lat = weatherData.coord.lat;
        const lon = weatherData.coord.lon;

        // const { name, main: { temp: temperature }, weather: [ { description}], coord: { lat, long} } = weatherData;

        return {
            name,
            temperature,
            description,
            lat,
            lon
        }
    }

    function renderWeatherData(updateWeatherData) {
        const { name, temperature, description, lat, lon} = updateWeatherData;
        const template = `
            <h1>${name}</h1>
            <h2>${temperature}</h2>
            <p>${description}</p>
            <p>${lat}</p>
            <p>${lon}</p>
        `
        $('#results').append(template);
    }

    getWeatherData('New York')
        .then(transformWeatherData)
        .then(renderWeatherData)

        getWeatherData('London')
        .then(transformWeatherData)
        .then(renderWeatherData)
});