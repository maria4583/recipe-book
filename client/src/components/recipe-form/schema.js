export default {
    title: {
        min: 2,
        max: 255,
        required: true
    },
    time: {
        min: 4,
        max: 25,
        required: true
    },
    portion: {
        min: 4,
        max: 25,
        required: true
    },
    ingredients: {
        min: 16,
        max: 500,
        required: true
    },
    instructions: {
        min: 50,
        max: 5000,
        required: true
    }
}