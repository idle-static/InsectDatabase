const express = require('express');
const router = express.Router();
const { getAllMoths } = require('../dal/p.insectsDAL');
const pDb = require('../dal/p.db');


// Render the add moth form
router.get('/add', (req, res) => {
    res.render('addMoth');
});

// Route to handle form submission
router.post('/addMoth', async (req, res) => {
    const {
        name, species, color, size, wing_span, habitat, nocturnal
    } = req.body;
    console.log(req.body);
    console.log(name);

    try {
        await pDb.query(
            `INSERT INTO moths (name, species, color, size, wing_span, habitat, nocturnal) 
            VALUES ($1, $2, $3, $4, $5, $6, $7);`,
            [name, species, color, size, wing_span, habitat, nocturnal]
        );
        res.redirect('/');
    } catch (error) {
        console.error('Error adding moth:', error);
        res.status(500).send('An error occurred while adding the moth.');
    }
});

// GET all moths
router.get('/', async (req, res) => {
    try {
        const moths = await getAllMoths();
        console.log(moths);
        res.render('moths', { moths });
    } catch (err) {
        res.status(500).json({ error: err.message });
    };
});

module.exports = {router};