import express from 'express'
import Card from '../models/helpCard.js'

const router = express.Router();

// Create a new card
router.post('/', async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    try {
        const newCard = new Card({ title, description });
        await newCard.save();
        res.status(201).json(newCard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all cards
router.get('/', async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a specific card by title
router.get('/:title', async (req, res) => {
    const { title } = req.params;

    try {
        const regex = new RegExp(title, 'i');
        const cards = await Card.find({ title: { $regex: regex } });

        if (cards.length === 0) {
            return res.status(404).json({ message: 'Card not found' });
        }

        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
