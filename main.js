//angular.module('myApp',[]);

// var mainController = function($scope){
// 	$scope.markers = [];

// 	$scope.addMarkers = function(event){
// 		$scope.box = {
// 			xposition : (event.pageX -10),
// 			yposition : (event.pageY -10),
// 		} //setting up an object for the box.
// 		$scope.markers.push($scope.box)
// 		// console.log($scope.markers)
// 	}

// 	$scope.removeMarkers = function(index){  //searching through the array index to see which marker to remove
// 		$scope.markers.splice(index,1) // index,1 (based on boolean values) is important to removed the exact one you're clicking instead of the marker before or after
// 	}
// }

//angular.module('myApp').controller('mainController', ['$scope', mainController]);


function initialize() {
  var mapLocation = {lat: 39.734990, lng: -104.991678};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: mapLocation
  });

  // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng, map);
  });


  addMarker(mapLocation, map);
}


function addMarker(location, map) {
 
  var marker = new google.maps.Marker({
    // var click
    position: location,
    map: map
  });
}

google.maps.event.addDomListener(window, 'load', initialize);