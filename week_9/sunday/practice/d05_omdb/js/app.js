$(function() {
    //EXTRACT THE DATA
    
    const result = $.ajax({
        url: 'http://www.omdbapi.com/',
        data: {
            apikey: '1d747e12',
            t: 'batman'
        },
        method: 'GET',
        dataType: 'json'
    });

    //TRANSFORM THE DATA

    result.then(function(data) {
        console.log(data);
    })

    //LOAD THE DATA
});