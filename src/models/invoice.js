import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
});

const Invoice = mongoose.model('Invoice', schema);

export default Invoice;