const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=265c899c29f816d166b1b3c13f3bb07c&query=37.8267,-122.4233&units=f";

request({ url: url, json: true }, (error, response) => {
  // console.log(response.body.current);

  console.log(
    response.body.current.weather_descriptions[0] +
      ". It is currently " +
      response.body.current.temperature +
      " degrees out. There is a " +
      response.body.current.precip +
      "% chance of rain."
  );
});

Geocoding
Address -> Lat/Long -> Weather

const geoUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3RlZXJwaWtlMTAxIiwiYSI6ImNrZ2dxYXBicjAweGIyeG4wdmNzc2l1ZHcifQ.TYono1CbwKIVN5V-JlgK2w&limit=1";

request({ url: geoUrl, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];

  console.log(
    "The lat and long for Los Angeles is " + latitude + " and " + longitude
  );
});
