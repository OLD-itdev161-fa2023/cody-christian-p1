import mongoose from 'mongoose';

const GuitarSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    finish: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
});

const Guitar = mongoose.model('guitar', GuitarSchema);

export default Guitar;