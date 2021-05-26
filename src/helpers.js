
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     el.innerHTML = "Twoja przeglądarka nie wspiera geolokalizacji :(";
//   }
// }

export function oblicz_odleglosc_w_metrach(position, lat, lon){
  return Math.round(calcCrow(position.coords.latitude, position.coords.longitude, lat, lon) * 1000);
}

// function pokaz_odznake(odleglosc_w_metrach) {
//   if (odleglosc_w_metrach<=100) {
//     document.getElementById("odznaka").style.display = "block";
//   }
// }

// function showPosition(position) {
//   el.innerHTML =
//     "Latitude (szerokość): " +   position.coords.latitude +
//     "<br>Longitude (długość): " + position.coords.longitude + 
//     "<br> Odleglość od celu: " + Math.round(oblicz_odleglosc_w_metrach(position)) + "metrów" ;
// }

// jak obliczyć odległość:
// https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates

//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
function calcCrow(lat1, lon1, lat2, lon2) {
    // Converts numeric degrees to radians
 const toRad = function(Value) {
    return (Value * Math.PI) / 180;
  }
  
  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

