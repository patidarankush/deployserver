const express = require('express');
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const server = express();

server.use(express.json());

// Serve static files
server.use(express.static('public'));


server.post('/', (req, res) => {
  const sensorData = req.body;
  // Process the received sensorData here
  console.log(sensorData); // Example: Log the received data

  // Send a response back to the ESP32
  res.send('Data received successfully');
});

server.get('/', (req, res) => {
  const responseData = {
    message: 'Data sent successfully from laptop',
  };

  res.json(responseData);
});

// code changes to get data from ESP32
let sensorData = {}; // Variable to store the sensor data
server.post('/data', (req, res) => {
  sensorData = req.body; // Store the received sensor data
  console.log(sensorData); // Log the received data

  res.send('Data received successfully');
});

server.get('/data', (req, res) => {
  res.json(sensorData); // Serve the stored sensor data to the client
}); 


https.createServer(options, server).listen(3000, () => {
  console.log('Server is running on port', 3000, '(HTTPS)');
});
