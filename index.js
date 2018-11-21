function getRelatedArtistEvents () {
    var URL = "http://rest.bandsintown.com/artists/rittz/events?app_id=c283929e0751cf243b17ca899c564814"
    $.ajax({
        url: URL,
        method: 'GET',
        dataType: 'jsonp',
        error : function (reason, xhr) {
            console.log("error in processing your request", reason)
           }
        })
        .then(function (response){
            response.forEach(element => {
                $("#test-container").append(`
                    <div>${element.venue.name}</div>
                    <div>${element.venue.city}</div>
                    <div>${element.venue.region}</div>`)
        })
    })
}

function init () {
    document.getElementsByClassName('button')[0].addEventListener('click', getRelatedArtistEvents)
}

document.addEventListener('DOMContentLoaded', init)