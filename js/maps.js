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
      var marker = new google.maps.Marker({ position: kidSpotLoc, map: map,
      title:'100 Playtime Drive Holly Ridge, NC 24485',
      label: {fontFamily: 'Salsa',
              fontSize: '16px',
              fontWeight: 'Bold',
              text:'KiddiesSpot',
              color: '#1A8849'},
        url :'https://www.google.com/maps/dir//100+Calcos+Ct,+Holly+Ridge,+NC+28445/@34.4954079,-77.4756349,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89a9a14c6476831f:0xa2e906aa35cac719!2m2!1d-77.4734462!2d34.4954079'
      });

    // Open Google Maps on a new tab upon clicking the marker
       google.maps.event.addListener(marker, 'click', function(event) {
        window.open(this.url, '_blank');
       });
    }