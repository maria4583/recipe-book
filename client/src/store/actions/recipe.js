import {
    getAllRecipesStarted,
    getAllRecipesSuccess,
    getAllRecipesFailure,

    getOneRecipeStarted,
    getOneRecipeSuccess,
    getOneRecipeFailure,

    saveRecipeSuccess,
    saveRecipeFailure,

    updateRecipeSuccess,
    updateRecipeFailure,

    deleteRecipeSuccess,
    deleteRecipeFailure,
} from '../actionsCreators/recipe'

import RecipeService from '@/services/RecipeService'

export const getRecipes = () => {
    return async dispatch => {
        dispatch(getAllRecipesStarted())

        try {
            const { data } = await RecipeService.findAll()

            dispatch(getAllRecipesSuccess(data))
        } catch (error) {
            dispatch(getAllRecipesFailure(error.message))
        }
    }
}

export const getRecipe = id => {
    return async dispatch => {
        dispatch(getOneRecipeStarted())

        try {
            const { data } = await RecipeService.findOne(id)

            dispatch(getOneRecipeSuccess(data))
        } catch (error) {
            dispatch(getOneRecipeFailure(error.message))
        }
    }
}

export const saveRecipe = body => {
    return async dispatch => {
        try {
            const { data } = await RecipeService.save(body)

            dispatch(saveRecipeSuccess(data))
        } catch (error) {
            dispatch(saveRecipeFailure(error.message))
        }
    }
}

export const updateRecipe = body => {
    return async dispatch => {
        try {
            await RecipeService.update(body)

            dispatch(updateRecipeSuccess())
        } catch (error) {
            dispatch(updateRecipeFailure(error.message))
        }
    }
}

export const deleteRecipe = id => {
    return async dispatch => {
        try {
            await RecipeService.delete(id)

            dispatch(deleteRecipeSuccess())
        } catch (error) {
            dispatch(deleteRecipeFailure(error.message))
        }
    }
}