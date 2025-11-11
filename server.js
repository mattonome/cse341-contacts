const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./db/connect');

const port = process.env.PORT || 3000;

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to my Express server with MongoDB!');
});

// Contacts routes nn 
app.use('/contacts', require('./routes/contacts'));

db.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  }
});
