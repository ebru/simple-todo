import express from 'express';

const router = express.Router();

// Test endpoint
router.get('/test', (err, res) => {
    res.status(200).json({
        working: true
    });
});

export default router;