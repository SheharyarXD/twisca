const express = require('express');
const cors = require('cors');
const pool = require('./db');
const path = require('path');
const bodyParser = require('body-parser');

// Import the sector and geography route files
const user = require('./api/User'); 
const categories = require('./api/Categories'); 
const products = require('./api/Products'); 
const reviews = require('./api/Review'); 



const app = express();
const port = process.env.PORT || 3000;


const corsOptions = {
  origin: 'http://localhost:3001', // Allow your client to make requests
  methods: 'GET,POST,PUT,DELETE', // Allow specific methods
  credentials: true, // Allow credentials (cookies, etc.)
};

app.use(cors(corsOptions));

app.use(bodyParser.json());


app.use('/api/auth', user);
app.use('/api/categories', categories);
app.use('/api/products', products);
app.use('/api/reviews', reviews);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.get('/', (req, res) => {
  pool.connect((err, client, release) => {
      if (err) {

          console.error('Error connecting to the database:', err);
          return res.status(500).send('Error connecting to the database');
      }

      console.log('Connected to the database successfully!');
      res.send('API is running and connected to the database!');
      
      release(); 
  });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
