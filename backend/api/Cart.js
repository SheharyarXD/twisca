const express = require('express');
const pool = require('../db'); // Database connection
const router = express.Router();

// Create a Cart Item
router.post('/', async (req, res) => {
    const { userId, productId, quantity } = req.body;
    console.log(req.body)
    if ( !productId || !quantity) {
        return res.status(400).json({ error: 'User ID, Product ID, and Quantity are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO cart (userid, productid, quantity) VALUES ($1, $2, $3) RETURNING *',
            [userId, productId, quantity]
        );

        res.status(201).json({
            message: 'Cart item added successfully!',
            cartItem: result.rows[0],
        });
    } catch (error) {
        console.error('Error adding cart item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get all Cart Items for a User
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const result = await pool.query(
            'SELECT * FROM cart WHERE userid = $1',
            [userId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'No cart items found for this user' });
        }

        res.status(200).json({ cartItems: result.rows });
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update Cart Item Quantity
router.put('/:cartId', async (req, res) => {
    const { cartId } = req.params;
    const { quantity } = req.body;

    if (!quantity) {
        return res.status(400).json({ error: 'Quantity is required' });
    }

    try {
        const result = await pool.query(
            'UPDATE cart SET quantity = $1 WHERE cartid = $2 RETURNING *',
            [quantity, cartId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Cart item not found' });
        }

        res.status(200).json({
            message: 'Cart item updated successfully!',
            cartItem: result.rows[0],
        });
    } catch (error) {
        console.error('Error updating cart item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete Cart Item
router.delete('/:cartId', async (req, res) => {
    const { cartId } = req.params;

    try {
        const result = await pool.query(
            'DELETE FROM cart WHERE cartid = $1 RETURNING *',
            [cartId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Cart item not found' });
        }

        res.status(200).json({
            message: 'Cart item deleted successfully!',
            cartItem: result.rows[0],
        });
    } catch (error) {
        console.error('Error deleting cart item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Clear Cart for a User
router.delete('/user/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const result = await pool.query(
            'DELETE FROM cart WHERE userid = $1 RETURNING *',
            [userId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'No cart items found for this user' });
        }

        res.status(200).json({
            message: 'All cart items deleted successfully for user!',
        });
    } catch (error) {
        console.error('Error clearing cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
