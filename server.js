const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;

// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

app.use(express.json()); // Parse JSON request bodies

app.post('/data', (req, res) => {
  const sensorData = req.body; // Access the data sent by ESP32
  // Process the data and perform any necessary actions
  console.log('Received data:', sensorData);
  res.sendStatus(200); // Send a response back to ESP32
});

// Start the server
// const port = 3000; // Use any available port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
