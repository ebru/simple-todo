import ItemRepository from './../repositories/item.repository';

class ItemController {
    static getItems = async (request, response) => {
        try {
            const items = await ItemRepository.getItems();

            return response.json(
                items
            );
        } catch (error) {
            console.log(error);
        }
    };

    static addItem = async (request, response) => {
        try {
            const addedItem = await ItemRepository.addItem(
                request.body
            );

            response.json({
                'success': true,
                'item': addedItem
            });
        } catch (error) {
            console.log(error);
        }
    };

    static updateItem = async (request, response) => {
        try {
            const updatedItem = await ItemRepository.updateItem(
                request.params.id,
                request.body
            );

            response.json({
                'success': true,
                'item': updatedItem
            });
        } catch (error) {
            console.log(error);
        }
    };

    // Delete item
    static deleteItem = async (request, response) => {
        try {
            await ItemRepository.deleteItem(
                request.params.id
            );

            response.json({
                'success': true
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export default ItemController;