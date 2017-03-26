var sensorLib = require('node-dht-sensor');





var dht_sensor = {
    initialize: function () {
        return sensorLib.initialize(11, 4);
    },

        

read: function () {
	
	var readout = sensorLib.read();
	var temperature =  readout.temperature.toFixed(2); 

        console.log('Temperature: ' + readout.temperature.toFixed(2) + 'C, ' +
            'humidity: ' + readout.humidity.toFixed(2) + '%');
        setTimeout(function () {
            dht_sensor.read();
        }, 5000);
    }

};

if (dht_sensor.initialize()) {
    dht_sensor.read();
} else {
    console.warn('Failed to initialize sensor');
}
