/**
 * Created by DG on 3/25/17.
 */






navigator.geolocation.getCurrentPosition(function(pos){
    var lat = pos.coords.latitude;
    var lon = pos.coords.longitude;
    var apikey = "api/events/" + lat + "" + lon;
    $.get(apikey, function (data) {

        
    })

});