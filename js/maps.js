/* Google Map Code taken from Google Map JavaScript API */
// Initialize and add the map
function initMap() {
    // The location of KiddiesSpot
     var kidSpotLoc = { lat: 34.4955633, lng: -77.473468 };
    // The map, centered at KiddiesSpot
     var map = new google.maps.Map(document.getElementById("googlemap"), {
      zoom: 6,
      center: kidSpotLoc,
     });
     // The marker, positioned at KiddiesSpot's coordinates
      var marker = new google.maps.Marker({ position: kidSpotLoc, map: map });
    }