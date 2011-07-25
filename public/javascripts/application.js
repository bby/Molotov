// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
var locationSet_evt;

var watchId;
var longitude;
var latitude;
var accuracy;

var geo = {
	init:function() {
		locationSet_evt = document.createEvent("Event");
		locationSet_evt.initEvent("locationSetEvt",true,true);
        watchId = navigator.geolocation.watchPosition(geo.geoHandler, geo.errorHandler, {
            enableHighAccuracy: true,
            maximumAge: 0
        });
    },
	geoHandler:function(location) {
		longitude = location.coords.longitude;
		latitude = location.coords.latitude;
		accuracy = location.coords.accuracy;
		document.dispatchEvent(locationSet_evt);
	},
	errorHandler:function(error) {
		switch(error) {
			case 1:
				alert('geo location on this device has been denied');
			break;
			case 2:
				alert('position unavailable');
			break;
			case 3:
				alert('retrieving location has timed out');
			break;
		}
	}
};
geo.init();

var map = {
	init:function() {
		document.addEventListener("locationSetEvt",map.createMap,false);
	},
	createMap:function() {
		navigator.geolocation.clearWatch(watchId);
		gm_latlng = new google.maps.LatLng(latitude, longitude);
		var mapOptions = {
		    zoom: 18,
	      	center: gm_latlng,
	      	mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		var marker = new google.maps.Marker({
		    position: gm_latlng, 
	        map: map,
	        title:"You are here"
	    });
	}
};
map.init();

var form = {
	init:function() {
		document.addEventListener("locationSetEvt",form.populateForm,false);
	},
	populateForm:function() {
		document.getElementById("cocktail_longitude").value = longitude;
		document.getElementById("cocktail_latitude").value = latitude;
		document.getElementById("cocktail_accuracy").value = accuracy;
	}
}
form.init();



