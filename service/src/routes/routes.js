import express from 'express';

import Item from './../models/item';

const router = express.Router();

// Get items
router.get('/items', (req, res) => {
    Item.find({}, (err, items) => {
        res.json(items)
    })
});

// Add new item
router.post('/items', (req, res) => {
    const item = new Item(req.body);

    item.save()
        .then(item => {
            res.json({
                'success': true,
                'item': item
            });
        })
        .catch(err => {
            res.status(500).send('Could not save to database');
        });
});

// Update existing item
router.put('/items/:id', (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;

    const itemToUpdate = {
        title: title,
        completed: completed
    };

    Item.findOneAndUpdate(
        { _id: id },
        { $set: itemToUpdate },
        { new: true },
        (err, updatedItem) => {
            if (err)
                console.log('Error occured while saving the user.');

            res.json({
                'success': true,
                'item': updatedItem
            });
        }
    );
});

// Delete item
router.delete('/items/:id', (req, res) => {
    const { id } = req.params;

    Item.findOneAndRemove(
        { _id: id },
        (err) => {
            if (err)
                res.status(400).send('Error', err);

            res.json({
                'success': true
            });
        });
});

export default router;