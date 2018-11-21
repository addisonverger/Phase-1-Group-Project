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
// document.addEventListener("DOMContentLoaded", init)

// function init () {
//     activateScrollMagic()
// }

// function activateScrollMagic () {
    //Init ScrollMagic Controller
// Init ScrollMagic Controller
    var controller = new ScrollMagic.Controller();
// Define ScrollMagic Scene
    var containerScene = new ScrollMagic.Scene({
        triggerElement: '.container #loader',
        triggerHook: "onEnter"
    })
    // .addIndicators()
    .addTo(controller)
    .on("enter", function (event) {
        if (!$("#loader").hasClass("active")) {
            $("#loader").addClass("active");
            if (console){
                console.log("loading new items");
            }
            setTimeout(addResults, 1000, 9);
        }
    })

// Function to add in new search results
function addResults (amount) {
// TO DO: Need to update this for loop so that it adds a result from the search, not hard coded div
    for (i=1; i<=amount; i++) {
        $("<div>This is where a new result will go</div>")
            .addClass("tile is-dark notification is-child box")
            .css({
                "width": "100%",
                "background-color": "#4a4a4a",
                "font-size": "1rem",
                "font-weight": "400",
                "line-height": "1.5",
                "font-family": "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
            })
            .appendTo(".container #results-container");
    }
    // "loading" done -> revert to normal state
    containerScene.update(); // make sure the scene gets the new start position
    $("#loader").removeClass("active");
    }


// <div class="tile is-dark notification is-child box">
//         <h2 class="title is-4">Ariana Grande</h2>
//         <div class="columns">
//           <div class="column">
//               <h3 class="title is-5 has-text-info">Artist Bio</h3>
//               <p>Ariana Grande-Butera (; born June 26, 1993) is an American singer, songwriter and actress. She began
//                 her career in 2008 in the Broadway musical 13, before playing the role of Cat Valentine in the Nickelodeon
//                 television series Victorious (2010–2013) and in the spinoff Sam & Cat (2013–2014). She has also appeared in
//                 other theatre and television roles and has lent her voice to animated television and films. <a href="">(read more)</a></p>
//           </div>
//           <div class="column">
//               <iframe width="560" height="315" src="https://www.youtube.com/embed/ffxKSjUwKdU" frameborder="0"
//               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//           </div>
//         </div>
//         <h3 class="title is-5 has-text-info">Upcoming Shows</h3>
//         <div class="tile is-ancestor">
//           <div class="tile is-parent">
//             <div class="tile is-child box button is-info is-inverted is-outlined">
//               <p>May 19<br />Toyota Center<br />Houston, TX</p>
//             </div>
//           </div>
//           <div class="tile is-parent">
//             <div class="tile is-child box button is-info is-inverted is-outlined">
//               <p>May 17<br />AT&T Center<br />San Antonio, TX</p>
//             </div>
//           </div>
//           <div class="tile is-parent">
//             <div class="tile is-child box button is-info is-inverted is-outlined">
//               <p>May 21<br />American Airlines Center<br />Dallas, TX</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// Set the initial number of results to appear on the page
addResults(5)
