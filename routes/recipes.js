import express from 'express'

import RecipeController from '../controllers/RecipeController.js'

const router = express.Router()

router.all('/')
    .get('/', RecipeController.index)
    .post('/', RecipeController.store)
    .get('/:id', RecipeController.show)
    .put('/:id', RecipeController.update)
    .delete('/:id', RecipeController.destroy)

export default router
