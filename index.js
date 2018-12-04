// Search-bar click to pass value to API calls and render results and init ScrollMagic and Accordian
document.getElementById("search").addEventListener('click', function(){
  callTastedive ()
    // Init ScrollMagic Controller

    var controller = new ScrollMagic.Controller()
    // Define ScrollMagic Scene
    var containerScene = new ScrollMagic.Scene({
      triggerElement: '.container #loader',
      triggerHook: 'onEnter'
    })
    // .addIndicators()
      .addTo(controller)
      .on('enter', function (event) {
        if (!$('#loader').hasClass('active')) {
          $('#loader').addClass('active')
          if (console) {
            console.log('loading new items')
          }
          setTimeout(addResults, 1000, 9)
        }
      })
    // Function to add in new search results
    function addResults (amount) {
    // TO DO: Need to update this for loop so that it adds a result from the search, not hard coded div
      for (var i = 1; i <= amount; i++) {
        // $('<div>This is where a new result will go</div>')
        //   .addClass('tile is-dark notification is-child box')
        //   .css({
        //     'width': '100%',
        //     'background-color': '#4a4a4a',
        //     'font-size': '1rem',
        //     'font-weight': '400',
        //     'line-height': '1.5',
        //     'font-family': 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif'
        //   })
        //   .appendTo('.container #info-container')
       // createResultCard(input)
      }
      // "loading" done -> revert to normal state
      containerScene.update() // make sure the scene gets the new start position
      $('#loader').removeClass('active')
    }
    // Set the initial number of results to appear on the page
    addResults(5)

    // end ScrollMagic Controller
})

/// TasteDive API call
function callTastedive () {
var tastedive = 'https://tastedive.com/api/similar?q='
var artistQuery = document.getElementById("search-bar").value
var infoType = '&type=music&info=1'
var apiKey = '&k=323666-showGo-XUMS94RP'
var makeCall = tastedive + artistQuery + infoType + apiKey
$.ajax({
  url: makeCall,
  method: 'GET',
  dataType: 'jsonp'
})
  .then(function (response) {
    console.log(response)
    tastediveName = response.Similar.Info[0]
    // $(".info-container").append(createResultCard(tastediveName))
    const infoContainerEl = document.getElementById('info-container')
    console.assert(infoContainerEl, '#info-container element not found! might want to look into that')
    infoContainerEl.innerHTML = createResultCard(tastediveName)
    initAccordian()
  })
  // TODO 
  
  // make BandsinTown API Call
  getRelatedArtistEvents()
}
// end TasteDive

// BandsinTown API Call

function getRelatedArtistEvents () {
  var bandsintown = 'http://rest.bandsintown.com/artists/'
  var artistQuery = document.getElementById("search-bar").value
  var infoType = '/events?'
  var apiKey = 'app_id=c283929e0751cf243b17ca899c564814'
  var makeCall = bandsintown + artistQuery + infoType + apiKey

  $.ajax({
    url: makeCall,
    method: 'GET',
    dataType: 'jsonp',
    error: function (reason, xhr) {
      console.log('error in processing your request', reason)
    }
  })
    .then(function (response) {
      // response.forEach(element => {
      //   bandsintownResults = response[]
      //   document.getElementById('upcoming').innerHTML = createUpcomingShowInfo(bandsintownResults)
      // })
      for (i=0; i<=3; i++) {
        bandsintownResults = response[i]
        document.getElementById('upcoming').innerHTML = createUpcomingShowInfo(bandsintownResults)
      }
    })
}

// end BandsinTown

// Render results

function createResultCard(input) {
  return `
    <div class="tile is-dark notification is-child box band-listing">
    <h2 class="title is-4 tile-header">${input.Name}</h2>
    <div class="tile-body" style="max-height: 0px">
      <div class="columns">
        <div class="column">
            <h3 class="title is-5 has-text-info">Artist Bio</h3>
            <p>${input.wTeaser}</p>
        </div>
        <div class="column">
            <iframe width="560" height="315" src="${input.yUrl}" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <h3 class="title is-5 has-text-info">Upcoming Shows</h3>
      <div id="upcoming" class="tile is-ancestor"></div>
  `
}

function createUpcomingShowInfo(input) {
  console.log(input)
  return `
      <a href="${input.url}"><div class="tile is-parent">
        <div class="tile is-child box button is-info is-inverted is-outlined">
          <p>${input.datetime}<br/>${input.venue.name}<br/>${input.venue.city}</p>
        </div>
      </div></a>
  `
}

//end Render results

    /// Accordion Toggle
function initAccordian() {
  var header = document.getElementsByClassName('tile-header')
  for (var i = 0; i < header.length; i++) {
    header[i].addEventListener('click', function () {
      var content = this.nextElementSibling

      if (content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0px'
        this.style.marginBottom = '0'
        this.parentNode.removeAttribute('style')
      } else {
        hideAll()
        content.style.maxHeight = content.scrollHeight + 'px'
        this.style.marginBottom = '1.5rem'
        this.parentNode.style.backgroundColor = 'hsl(0, 0%, 29%)'
      }
    })
  }

  function hideAll () {
    for (i = 0; i < header.length; i++) {
      var content = header[i].nextElementSibling

      content.style.maxHeight = '0'
      header[i].style.marginBottom = '0'
      header[i].parentNode.removeAttribute('style')
    }
  }
}