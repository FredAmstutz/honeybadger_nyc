$(function() {
    const errorTemplate = '<h2>Please enter a valid city, state, providence, country, continent, or other formally recognized region.</h2>';

    const $searchInput = $('#search-input');
    const $searchButton = $('#search-button');

    
    $searchButton.click(function() {
        getWeatherData($searchInput.val())
        .then(transformWeatherData)
        .then(renderWeatherData);
        $searchInput.val('');
    });
    
    $searchInput.keyup(function(e) {
        e.preventDefault();
        if(e.keyCode === 13) {
            $searchButton.click();
        }
    });

    function getWeatherData(city) {
        const apiCall = $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            data: {
                q: city,
                APPID: '2770a416c4b1dcbd5a0a93e03e364fc9',
                units: 'imperial'
            },
            dataType: 'json',
            method: 'GET',
            error: function() {
                $('#results').html(errorTemplate);
            }
        });

        return apiCall;
    }

    function transformWeatherData(weatherData) {
        const name = weatherData.name;
        const temperature = weatherData.main.temp;
        const description = weatherData.weather[0].description;
        const lat = weatherData.coord.lat;
        const lon = weatherData.coord.lon;

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
            <h2>Current Temperature: ${temperature}</h2>
            <p>Description: ${description}</p>
            <p>Latitude: ${lat}</p>
            <p>Longitude: ${lon}</p>
        `
        $('#results').html(template);
    }
});