var http = require('http');
var https = require('https');


var api_key = "AIzaSyCEPHkBSiLOrKJZ3_K6Ndwi6Ofx_2haTm4";

var prepare_api_url = function(latitude, longitude){
    var api_url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
    return api_url + latitude + ',' + longitude + "&key=" + api_key;
}

