import Recipe from '../models/Recipe.js'

class RecipeController {
    static async index(req, res) {
        try {
            const recipes = await Recipe.find({})

            res.status(200).json(recipes)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async show(req, res) {
        try {
            const recipe = await Recipe.findById(req.params.id)

            res.status(200).json(recipe)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async store(req, res) {
        try {
            const recipe = await Recipe.create({ ...req.body.recipe })

            res.status(201).json(recipe)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async update(req, res) {
        try {
            const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body.recipe)

            res.status(200).json(recipe)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async destroy(req, res) {
        try {
            const recipe = await Recipe.findByIdAndDelete(req.params.id)

            res.status(200).json(recipe)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

export default RecipeController
