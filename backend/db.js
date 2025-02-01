const { Pool } = require('pg');
require('dotenv').config(); // If using dotenv to load your .env file

const pool = new Pool({
  user: 'postgres',           // Hardcoded database user
  host: '127.0.0.1',  // Hardcoded Neon DB host
  database: 'twisca',             // Hardcoded database name
  password: 'postgres',                 // Hardcoded database password
  port: 5432,                               // Port for PostgreSQL
  // ssl: { rejectUnauthorized: true } 
  
});

pool.connect()
    .then(() => console.log('Connected to the database successfully!'))
    .catch((err) => console.error('Error connecting to the database:', err.stack));

module.exports = pool;
