const { Pool } = require('pg');
require('dotenv').config(); // If using dotenv to load your .env file

const pool = new Pool({
  user: 'neondb_owner',           // Hardcoded database user
  host: 'ep-summer-night-a8van25f-pooler.eastus2.azure.neon.tech',  // Hardcoded Neon DB host
  database: 'neondb',             // Hardcoded database name
  password: 'npg_WsbUDxfc72iw',                 // Hardcoded database password
  port: 5432,                               // Port for PostgreSQL
   ssl: { rejectUnauthorized: true } 
  
});

pool.connect()
    .then(() => console.log('Connected to the database successfully!'))
    .catch((err) => console.error('Error connecting to the database:', err.stack));

module.exports = pool;
