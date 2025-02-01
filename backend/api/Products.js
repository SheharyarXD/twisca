const express = require('express');
const pool = require('../db'); 

const router = express.Router();

// Create Product API
router.post('/create', async (req, res) => {
    const { productName, description, price, stockQuantity, categoryId, imageUrl, oldPrice } = req.body;

    try {
        // Insert product into the database
        const result = await pool.query(
            'INSERT INTO Products (productName, description, price, stockQuantity, categoryId, imageUrl, oldPrice) ' +
            'VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING ProductID, productName, description, price, stockQuantity, categoryId, imageUrl, oldPrice',
            [productName, description, price, stockQuantity, categoryId, imageUrl, oldPrice]
        );

        res.status(201).json({
            message: 'Product created successfully!',
            product: result.rows[0],
        });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Fetch all products
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Products');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Fetch product by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query('SELECT * FROM Products WHERE ProductID = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update product by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { productName, description, price, stockQuantity, categoryId, imageUrl, oldPrice } = req.body;

    try {
        // Check if the product exists
        const result = await pool.query('SELECT * FROM Products WHERE ProductID = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Update the product in the database
        await pool.query(
            'UPDATE Products SET productName = $1, description = $2, price = $3, stockQuantity = $4, categoryId = $5, imageUrl = $6, oldPrice = $7 WHERE ProductID = $8',
            [productName, description, price, stockQuantity, categoryId, imageUrl, oldPrice, id]
        );

        res.status(200).json({ message: 'Product updated successfully!' });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete product by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Check if the product exists
        const result = await pool.query('SELECT * FROM Products WHERE ProductID = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Delete the product
        await pool.query('DELETE FROM Products WHERE ProductID = $1', [id]);

        res.status(200).json({ message: 'Product deleted successfully!' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;

