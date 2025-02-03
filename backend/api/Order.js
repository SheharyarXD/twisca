const express = require('express');
const pool = require('../db'); 

const router = express.Router();
const bcrypt = require('bcrypt');

  router.post("/", async (req, res) => {
    const { user_id, billing_info_id, payment_info_id, cart } = req.body;
  
    try {
      // Insert into orders table
      const orderResult = await pool.query(
        'INSERT INTO orders (user_id, billing_info_id, payment_info_id, shippment_status) VALUES ($1, $2, $3, $4) RETURNING order_id',
        [user_id, billing_info_id, payment_info_id, 'Order Placed']
      );
  
      const orderId = orderResult.rows[0].order_id;
  
      // Insert into cart_products table
      for (const product of cart) {
        await pool.query(
          'INSERT INTO cart_products (order_id, product_id, quantity) VALUES ($1, $2, $3)',
          [orderId, product.productid, product.quantity]
        );
      }
  
      res.status(201).json({ message: 'Order created successfully!', order_id: orderId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create order' });
    }
  });
  

  router.get("/:user_id", async (req, res) => {
    const { userId } = req.params;
  
    try {
      const result = await pool.query(
        `SELECT o.order_id, o.created_at, o.shippment_status, 
                b.billing_address, p.payment_method 
         FROM orders o
         JOIN billing_info b ON o.billing_info_id = b.billing_info_id
         JOIN payment_info p ON o.payment_info_id = p.payment_info_id
         WHERE o.user_id = $1`,
        [userId]
      );
  
      res.status(200).json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve orders' });
    }
  });
  router.put("/Shippment", async (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body;
  
    try {
      const result = await pool.query(
        'UPDATE orders SET shippment_status = $1, updated_at = CURRENT_TIMESTAMP WHERE order_id = $2 RETURNING *',
        [status, orderId]
      );
  
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Order not found' });
      }
  
      res.status(200).json({ message: 'Shipment status updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update shipment status' });
    }
  });
  

module.exports = router;