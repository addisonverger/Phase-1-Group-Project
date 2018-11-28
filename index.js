
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





var apiCall = 'https://tastedive.com/api/similar?q=pearl%20jam&type=music&info=1&k=323666-showGo-XUMS94RP';



let h = new Headers();
h.append('Accept', 'application/json');
let req = new Request(apiCall,{
    method: 'GET',
    headers: h,
    mode: 'cors'
});



fetch(req)
    .then( (response)=>{
      if(response.ok){
          return response.json();
      }else{
          throw new Error('Fetch Error');
      }

    })
    .then( (jsonData)=>{
        console.log(jsonData);
    })
    .catch( (err)=>{
        console.log('ERROR:', err.message);
    });
function init () {
    document.getElementsByClassName('button')[0].addEventListener('click', getRelatedArtistEvents)
}

document.addEventListener('DOMContentLoaded', init)

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

// Set the initial number of results to appear on the page
addResults(5)

///Accordion Toggle///

var header = document.getElementsByClassName('tile-header')

for (i = 0; i < header.length; i++) {
  header[i].addEventListener('click', function () {
    var content = this.nextElementSibling;

    if (content.style.maxHeight !== '0px') {
      content.style.maxHeight = '0px';
      this.style.marginBottom = '0';
      this.parentNode.removeAttribute('style');
    } else {
      hideAll();
      content.style.maxHeight = content.scrollHeight + 'px';
      this.style.marginBottom = '1.5rem';
      this.parentNode.style.backgroundColor = 'hsl(0, 0%, 29%)';
    }
  });
}

function hideAll () {
  for (i = 0; i < header.length; i++) {
    var content = header[i].nextElementSibling;

    content.style.maxHeight = '0';
    header[i].style.marginBottom = '0';
    header[i].parentNode.removeAttribute('style');
  }
}
