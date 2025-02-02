const express = require('express');
const pool = require('../db'); 

const router = express.Router();
const bcrypt = require('bcrypt');

router.post("/", async (req, res) => {
    const { user_id, email, first_name, last_name, address, city, state, zip_code, phone } = req.body;
  
    try {
      const result = await pool.query(
        "INSERT INTO billing_info (user_id, email, first_name, last_name, address, city, state, zip_code, phone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
        [user_id, email, first_name, last_name, address, city, state, zip_code, phone]
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // GET: Retrieve Billing Info by User ID
  router.get("/:user_id", async (req, res) => {
    const { user_id } = req.params;
    try {
      const result = await pool.query("SELECT * FROM billing_info WHERE user_id = $1 ORDER BY id DESC", [user_id]);
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

module.exports = router;