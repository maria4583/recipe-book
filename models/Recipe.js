import mongoose from 'mongoose'

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 2,
        max: 100,
        trim: true
    },
    img: {
        type: String,
        required: false
    },
    category: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true,
        min: 4,
        max: 25,
        trim: true
    },
    portion: {
        type: String,
        required: true,
        min: 4,
        max: 25,
        trim: true
    },
    ingredients: {
        type: String,
        required: true,
        min: 16,
        max: 500,
        trim: true
    },
    instructions: {
        type: String,
        required: true,
        min: 50,
        max: 5000,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


export default mongoose.model('Recipe', RecipeSchema, 'recipes')