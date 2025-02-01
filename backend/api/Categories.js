const express = require('express');
const pool = require('../db'); 

const router = express.Router();

// Create Category API
router.post('/create', async (req, res) => {
    const { categoryName, description } = req.body;

    try {
        // Insert category into the database
        const result = await pool.query(
            'INSERT INTO Categories (categoryName, description) VALUES ($1, $2) RETURNING CategoryID, categoryName, description',
            [categoryName, description]
        );

        res.status(201).json({
            message: 'Category created successfully!',
            category: result.rows[0],
        });
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Fetch all categories
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Categories');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Fetch category by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query('SELECT * FROM Categories WHERE CategoryID = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Category not found' });
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching category by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Update category by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { categoryName, description } = req.body;

    try {
        // Check if the category exists
        const result = await pool.query('SELECT * FROM Categories WHERE CategoryID = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Category not found' });
        }

        // Update the category in the database
        await pool.query(
            'UPDATE Categories SET categoryName = $1, description = $2 WHERE CategoryID = $3',
            [categoryName, description, id]
        );

        res.status(200).json({ message: 'Category updated successfully!' });
    } catch (error) {
        console.error('Error updating category:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete category by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Check if the category exists
        const result = await pool.query('SELECT * FROM Categories WHERE CategoryID = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Category not found' });
        }

        // Delete the category
        await pool.query('DELETE FROM Categories WHERE CategoryID = $1', [id]);

        res.status(200).json({ message: 'Category deleted successfully!' });
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;
