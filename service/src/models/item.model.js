import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title: String,
    completed: Boolean
});

export default mongoose.model('Item', ItemSchema);