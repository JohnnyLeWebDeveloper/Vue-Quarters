
/* ------------ SHARE JAVASCRIPT ---------- */
// DECLARED VARIABLES
var menu = 0; // 0 = MENU IS CLOSED
var winWidth = $(window).width();  // WINDOW WIDTH
var winHeight = $(window).height(); // WINDOW HEIGHT
var winScroll; // TELLS POSITION OF SCROLL
var temp;
var next = 0;

$(document).ready(function() { // will be executed immediately

	$(".fancyBox").fancybox();

	animations();

});


$(window).load(function () { //Run a function when the page is fully loaded including graphics.
  // run code

	initMap();

	$( "#date" ).datepicker();
});


$( window ).resize(function() {


});

$( window ).resize(function() {
	winHeight = $(window).height();
	winWidth = $(window).width();

});

$( window ).scroll( function(){ // FOR WINDOW IF SCROLLING
	winScroll =  $(window).scrollTop();


});


function animations(){

	// Vue TR Icons
	var tweenH1 = new TimelineMax ()
	.add([TweenMax.fromTo("#vue__icons", 1, {top: '200px', opacity: 0}, {top: '0', opacity: '1',  ease: Linear.easeNone})]);
	var sceneH1 = new ScrollMagic.Scene({triggerElement: "#container__2",  offset: -200})
	.setTween(tweenH1)
	//.addIndicators()
	.addTo(controller);

	// H2 Container
  var tweenH2 = new TimelineMax ()
  .add([TweenMax.fromTo("#h2Container", 1, {top: '-200px', opacity: 0}, {top: '0', opacity: '1',  ease: Linear.easeNone})]);
  var sceneH2 = new ScrollMagic.Scene({triggerElement: "#sceneH3",  offset: -300})
  .setTween(tweenH2)
  //.addIndicators()
  .addTo(controller);

	// Vue At The Quarter Icon
  var tweenH3 = new TimelineMax ()
  .add([TweenMax.fromTo("#vueQuarterIcon", 1, {top: '200px', opacity: 0}, {top: '0', opacity: '1',  ease: Linear.easeNone})]);
  var sceneH3 = new ScrollMagic.Scene({triggerElement: "#sceneH3",  offset: -300})
  .setTween(tweenH3)
  //.addIndicators()
  .addTo(controller);


  var tweenH4 = new TimelineMax ()
  .add([TweenMax.fromTo("#background4", 1, {top: '-20%'}, {top: '0%', ease: Linear.easeNone})]);
  var sceneH4 = new ScrollMagic.Scene({triggerElement: "#container__4",  offset: 0, duration: $("#tweenContainer4").height()})
  .setTween(tweenH4)
  //.addIndicators()
  .addTo(controller);

  var tweenH5 = new TimelineMax ()
  .add([TweenMax.fromTo("#galObject", 1, {top: '200px', opacity: 0}, {top: '0px', opacity: 1, ease: Linear.easeNone})]);
  var sceneH5 = new ScrollMagic.Scene({triggerElement: "#galContent1",  offset: -300})
  .setTween(tweenH5)
  //.addIndicators()
  .addTo(controller);

	// Whittier Mill Park Text - Scroll Bottom to Top
  var tweenH6 = new TimelineMax ()
  .add([TweenMax.fromTo("#galContent2Object", 1, {top: '100px', opacity: 0}, {top: '0px', opacity: 1, ease: Linear.easeNone})]);
  var sceneH6 = new ScrollMagic.Scene({triggerElement: "#galContent2",  offset: -250})
  .setTween(tweenH6)
  //.addIndicators()
  .addTo(controller);

	// Wine Tasting Text - Scroll Bottom to Top
  var tweenH7 = new TimelineMax ()
  .add([TweenMax.fromTo("#galContent3Object", 1, {top: '100px', opacity: 0}, {top: '0px', opacity: 1, ease: Linear.easeNone})]);
  var sceneH7 = new ScrollMagic.Scene({triggerElement: "#galContent3",  offset: -300})
  .setTween(tweenH7)
  //.addIndicators()
  .addTo(controller);

	// Man Image
		var tweenH8 = new TimelineMax ()
	  .add([TweenMax.fromTo("#theMan", 1, {right: '-100px', opacity: '0'}, {right: '20px', opacity: '1', ease: Linear.easeNone})]);
	  var sceneH8 = new ScrollMagic.Scene({triggerElement: "#manImage",  offset: -150})
	  .setTween(tweenH8)
	  //.addIndicators()
	  .addTo(controller);

	// Dog Image - Scroll Left to Right
	var tweenH9 = new TimelineMax ()
  .add([TweenMax.fromTo("#dogImage", 1, {left: '-100%', opacity: '0'}, {left: '0', opacity: '1', ease: Linear.easeNone})]);
  var sceneH9 = new ScrollMagic.Scene({triggerElement: "#dogTrigger",  offset: -200})
  .setTween(tweenH9)
  //.addIndicators()
  .addTo(controller);

	// Wine Tasting Group Image - Scroll from Bottom to Top of Screen
 var tweenH10 = new TimelineMax ()
	.add([TweenMax.fromTo("#theGroup1", 1, {top: '100px', opacity: 0}, {top: '0', opacity: 1, ease: Linear.easeNone})]);
	var sceneH10 = new ScrollMagic.Scene({triggerElement: "#theGroup",  offset: -200})
	.setTween(tweenH10)
	//.addIndicators()
	.addTo(controller);

	// Upper West Side Text - Scroll Left to Right
	var tweenH11 = new TimelineMax ()
	.add([TweenMax.fromTo("#upperWestside", 1, {left: '-100%', opacity: '0'}, {left: '0', opacity: '1', ease: Linear.easeNone})]);
	var sceneH11 = new ScrollMagic.Scene({triggerElement: "#uwsTrigger",  offset: -100})
	.setTween(tweenH11)
	//.addIndicators()
	.addTo(controller);

	// Atlanta Text - Scroll Bottom to Top
	var tweenH12 = new TimelineMax ()
	.add([TweenMax.fromTo("#atlObject", 1, {left: '200px', opacity: '0'}, {left: '0px', opacity: '1', ease: Linear.easeNone})]);
	var sceneH12 = new ScrollMagic.Scene({triggerElement: "#atlText",  offset: -150})
	.setTween(tweenH12)
	//.addIndicators()
	.addTo(controller);




}

function coming() {
	alert("This feature will be coming soon.");
}

function scrollToContact(){
    var contactPosition = $("#contactForm").offset().top;
    $("html, body").animate({ scrollTop: contactPosition}, 1000);
}


var styleMap = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
];

function initMap() {
		var map;
    var myLatLng = { lat: 33.8154398, lng: -84.437773 };
    map = new google.maps.Map(document.getElementById('googleMaps'), {
        center: myLatLng,
        zoom: 15,
        styles: styleMap
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        icon: 'images/vue-marker.png',
        map: map
    });
    var infowindow = new google.maps.InfoWindow({
	    content: 'Vue At The TR'
	  });
    marker.addListener('click', function() {
	    infowindow.open(map, marker);
	 });
}


$(window).load(function() {
    winWidth = $(window).width();
});
$(window).resize(function() {
    winWidth = $(window).width();
});

function onSubmit() {
    var valueString;
    var errStr = "";
    valueString = document.forms["form"]["name"].value;
    if (valueString == null || valueString == "" || valueString == 'NAME*') {
        errStr += "Please enter your name\n";
    }
    valueString = document.forms["form"]["phone"].value;
    if (valueString == null || valueString == "" || valueString == 'PHONE*') {
        errStr += "Please enter your phone\n";
    }
    valueString = document.forms["form"]["email"].value;
    if (valueString == null || valueString == "" || valueString == 'EMAIL*') {
        errStr += "Please enter your email address\n";
    } else if (!validateEmail(valueString)) {
        errStr += "Please enter a valid email address\n";
    }
    //console.log(valueString);
    if (errStr != "") {
        alert(errStr);
        return false;
    } else {
        if (grecaptcha.getResponse()) {
            return true;
        } else {
            alert("Please click on the check box to make sure you are not a robot!");
            return false;
        }
    }
}
