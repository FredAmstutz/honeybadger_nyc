$(function() {
    const result = $.ajax({
        url: 'http://ws.audioscrobbler.com/2.0/',
        data: {
            method: 'artist.gettoptracks',
            artist: 'cher',
            api_key: '7351d3b1f90b83db3c2a0a4494bbac5d',
            format: 'json'
        }
    })

    result.then(function(songData) {
        console.log(songData);
    })
});

