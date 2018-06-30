
var myDirectives = angular.module('myDirectives', []);

// sticky footer
myDirectives.directive('stickyFooter', [
  '$timeout',
  function ($timeout) {
    return {
      restrict: 'A',
      link: function (scope, iElement, iAttrs) {
        var stickyFooterWrapper = $(iAttrs.stickyFooter);

        // Quite often you will occur a few wrapping `<div>`s in the
        // top level of your DOM, so we need to set the height
        // to be 100% on each of those. This will also set it on
        // the `<html>` and `<body>`.
        stickyFooterWrapper.parents().css('height', '100%');
        stickyFooterWrapper.css({
          'min-height': '100%',
          'height': 'auto'
        });

        // Append a pushing div to the stickyFooterWrapper.
        var stickyFooterPush = $('<div class="push"></div>');
        stickyFooterWrapper.append(stickyFooterPush);

        var setHeights = function () {
          var height = iElement.outerHeight();
          stickyFooterPush.height(height);
          stickyFooterWrapper.css('margin-bottom', -(height));
        };

        $timeout(setHeights, 0);
        $(window).on('resize', setHeights);
      }
    };
  }
]);
myDirectives.directive('myMap', function() {
  // directive link function
  var link = function(scope, element, attrs) {
    var map, infoWindow;
    var markers = [];

    // map config
    var mapOptions = {
      center: new google.maps.LatLng(51.109747, 17.050049),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles:[
        {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#ffffff"
            },
            {
              "weight": "0.20"
            },
            {
              "lightness": "28"
            },
            {
              "saturation": "23"
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#494949"
            },
            {
              "lightness": 13
            },
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#144b53"
            },
            {
              "lightness": 14
            },
            {
              "weight": 1.4
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
            {
              "color": "#08304b"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#0c4152"
            },
            {
              "lightness": 5
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#0b434f"
            },
            {
              "lightness": 25
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#0b3d51"
            },
            {
              "lightness": 16
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
            {
              "color": "#146474"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
            {
              "color": "#021019"
            }
          ]
        }
      ],
      scrollwheel: false
     // draggable: false
    };

    // init the map
    function initMap() {
      if (map === void 0) {
        map = new google.maps.Map(element[0], mapOptions);
      }
    }
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var labelIndex = 0;


    // place a marker
    function setMarker(map, position, title, content) {
      var marker;
      var markerOptions = {
        position: position,
        map: map,
        title: title,
        label: labels[labelIndex++ % labels.length]
      };


      marker = new google.maps.Marker(markerOptions);
      markers.push(marker); // add marker to array

      google.maps.event.addListener(marker, 'click', function () {
        // close window if not undefined
        if (infoWindow !== void 0) {
          infoWindow.close();
        }
        // create new window
        var infoWindowOptions = {
          content: content
        };
        infoWindow = new google.maps.InfoWindow(infoWindowOptions);
        infoWindow.open(map, marker);
      });

      // calculate map center on device mode

      var center;
      function calculateCenter() {
        center = map.getCenter();
      }
      google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
      });
      google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
      });



    }

    // show the map and place some markers
    initMap();

    setMarker(map, new google.maps.LatLng(51.108043,17.020101), '', 'Scena na Świebodzkim');
    setMarker(map, new google.maps.LatLng(51.096517, 16.991148), '', 'Centrum Historii Zajezdnia');
    setMarker(map, new google.maps.LatLng(51.106378, 17.028141), '', 'Parking podziemny pod NFM');
    setMarker(map, new google.maps.LatLng(51.076425, 17.011865), '', 'Park Południowy');
    setMarker(map, new google.maps.LatLng(51.095117, 17.019555), '', 'Sky Tower');
    //setMarker(map, new google.maps.LatLng(51.111279, 17.074525), '', 'CeTA');
    setMarker(map, new google.maps.LatLng(51.106428, 17.031832), '', 'Teatr Polski-Scena Kameralna: podwórze');
    setMarker(map, new google.maps.LatLng(51.111454, 17.022349), '', 'Przejście podziemne na pl. Jana Pawła II');
    setMarker(map, new google.maps.LatLng(51.115890, 17.022734), '', 'Stara Piekarnia');
    setMarker(map, new google.maps.LatLng(51.113340, 17.034441), '', 'Uniwersytet Wrocławski,Aula im. Witolda Świdy Wydział Prawa, Administracji i Ekonomii bud. "D"');
  };

  return {
    restrict: 'A',
    template: '<div id="gmaps"></div>',
    replace: true,
    link: link
  };
});




