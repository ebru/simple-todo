import Item from './../models/item.model';

class ItemRepository {
    // Get all items
    static getItems = () => Item.find({});

    // Add new item
    static addItem = item => new Item(item).save();

    // Update existing item
    static updateItem = (id, itemToUpdate) => {
        const updatedItem = Item.findOneAndUpdate(
            { _id: id },
            { $set: itemToUpdate },
            { new: true }
        );

        return updatedItem;
    };

    // Delete item
    static deleteItem = id => {
        return Item.findOneAndRemove(
            { _id: id }
        );
    };
}

export default ItemRepository;