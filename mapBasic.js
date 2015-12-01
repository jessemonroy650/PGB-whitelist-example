//
function initializeMap() {
    var mapOptions = {
        zoom: gZoomSize,
        center: new google.maps.LatLng(gLat,gLon),
        mapTypeId: google.maps.MapTypeId.ROADMAP // could be ROADMAP,SATELLITE,HYBRID,TERRAIN
    }
    // ''map'' is global
    gMap = new google.maps.Map(document.getElementById(gElementID), mapOptions);
    
	var theMarker = {
    	position: {lat: gLat, lng: gLon},
        map: gMap,
        animation: google.maps.Animation.DROP,
	    title: 'Fab Lab, El Paso, Tx'
    };
    gMarker = new google.maps.Marker(theMarker);
}

// This function loads ''initializeMap()'' 
function loadMapScripts() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://maps.googleapis.com/maps/api/js?' +
                    'v3.5&' + 
                    'key=AIzaSyCW7ei8wIGYzeZm5NgvSJ0Thxboi2267HI&' +
                    'callback=initializeMap';
    document.body.appendChild(script);
}
