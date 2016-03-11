var RNGeocoder = require('react-native').NativeModules.RNGeocoder;

var Geocoder = {

  reverseGeocodeLocation: function(location, callback) {

    return new Promise(function (resolve, reject) {

      RNGeocoder.reverseGeocodeLocation(location, function (err) {
        callback && callback(err, null);
        reject(err);
      }, function (data) {
        callback && callback(null, data);
        resolve(data);
      });
    });
  },

  geocodeAddress: function(address, callback) {

    return new Promise(function (resolve, reject) {

      RNGeocoder.geocodeAddress(address, function (err) {
        callback && callback(err, null);
        reject(err);
      }, function (data) {
        callback && callback(null, data);
        resolve(data);
      });
    });
  }
};


module.exports = Geocoder;
