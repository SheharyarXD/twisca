const express = require('express');
const pool = require('../db');
const router = express.Router();

// Create a Review
router.post('/', async (req, res) => {
    const { userId, productId, rating, reviewText } = req.body;

    if (!userId || !productId || !rating || !reviewText) {
        return res.status(400).json({ error: 'User ID, Product ID, Rating, and Review Text are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO reviews (userid, productid, rating, reviewtext) VALUES ($1, $2, $3, $4) RETURNING *',
            [userId, productId, rating, reviewText]
        );

        res.status(201).json({
            message: 'Review added successfully!',
            review: result.rows[0],
        });
    } catch (error) {
        console.error('Error adding review:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Fetch all Reviews 
router.get('/', async (req, res) => {
    const { productId } = req.params;

    try {
        const result = await pool.query(
            'SELECT * FROM reviews',

        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'No reviews found for this product' });
        }

        res.status(200).json({ reviews: result.rows });
    } catch (error) {
        console.error('Error fetching reviews for product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Fetch all Reviews for a Product
router.get('/product/:productId', async (req, res) => {
    const { productId } = req.params;

    try {
        const result = await pool.query(
            'SELECT * FROM reviews WHERE productid = $1',
            [productId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'No reviews found for this product' });
        }

        res.status(200).json({ reviews: result.rows });
    } catch (error) {
        console.error('Error fetching reviews for product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Fetch a specific Review by ID
router.get('/:reviewId', async (req, res) => {
    const { reviewId } = req.params;

    try {
        const result = await pool.query(
            'SELECT * FROM reviews WHERE reviewid = $1',
            [reviewId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Review not found' });
        }

        res.status(200).json({ review: result.rows[0] });
    } catch (error) {
        console.error('Error fetching review by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update a Review
router.put('/:reviewId', async (req, res) => {
    const { reviewId } = req.params;
    const { rating, reviewText } = req.body;

    if (!rating || !reviewText) {
        return res.status(400).json({ error: 'Rating and Review Text are required' });
    }

    try {
        const result = await pool.query(
            'UPDATE reviews SET rating = $1, reviewtext = $2 WHERE reviewid = $3 RETURNING *',
            [rating, reviewText, reviewId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Review not found' });
        }

        res.status(200).json({
            message: 'Review updated successfully!',
            review: result.rows[0],
        });
    } catch (error) {
        console.error('Error updating review:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete a Review
router.delete('/:reviewId', async (req, res) => {
    const { reviewId } = req.params;

    try {
        const result = await pool.query(
            'DELETE FROM reviews WHERE reviewid = $1 RETURNING *',
            [reviewId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Review not found' });
        }

        res.status(200).json({
            message: 'Review deleted successfully!',
            review: result.rows[0],
        });
    } catch (error) {
        console.error('Error deleting review:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
