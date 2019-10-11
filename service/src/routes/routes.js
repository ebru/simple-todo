import express from 'express';

import Item from './../models/item';

const router = express.Router();

// Test endpoint
router.get('/test', (req, res) => {
    res.status(200).json({
        working: true
    });
});

// Items
router.get('/items', (req, res) => {
    Item.find({}, (err, items) => {
        res.json(items)
    })
});

router.post('/items', (req, res) => {
    const item = new Item(req.body);

    item.save()
        .then(item => {
            res.json({
                'success': true,
                'data': item
            });
        })
        .catch(err => {
            res.status(500).send('Could not save to database');
        });
});

router.delete('/items/:id', (req, res) => {
    Item.findOneAndRemove({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(400).send('Error', err);
        }

        res.json({
            'success': true
        });
    });
});

export default router;