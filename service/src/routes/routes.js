import express from 'express';

import ItemController from './../controllers/item.controller';

const router = express.Router();

router.get('/items', ItemController.getItems);
router.post('/items', ItemController.addItem);
router.put('/items/:id', ItemController.updateItem);
router.delete('/items/:id', ItemController.deleteItem);

export default router;