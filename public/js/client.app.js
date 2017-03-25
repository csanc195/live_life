/**
 * Created by DG on 3/25/17.
 */


navigator.geolocation.getCurrentPosition(function(pos){
    var lat = pos.coords.latitude;
    var lon = pos.coords.longitude;
    var url = prepare_api_url(lat,lon);
    $.get(url, function (data) {

       var results = data.results[0];
       var addrs = results.address_components;
       console.log(addrs.length);

       var i = 0;
       var found = false;
       while(i < addrs.length && !found){
           found = (addrs[i].types[0] === "postal_code")? true : false;
           i++;
       }
       i--;

        var zip = addrs[i].long_name;
        var api_load_key = "api/events/" + zip;
        $.get(api_load_key, function (api_res) {

            console.log(api_res);
            
        })


    })

});






//prepare URL to get Zip
var prepare_api_url = function(latitude, longitude){
    var api_key = "AIzaSyCEPHkBSiLOrKJZ3_K6Ndwi6Ofx_2haTm4";
    var api_url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
    return api_url + latitude + ',' + longitude + "&key=" + api_key;
}