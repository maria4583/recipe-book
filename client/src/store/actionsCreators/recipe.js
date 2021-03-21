import {
    GET_ALL_RECIPES_STARTED,
    GET_ALL_RECIPES_SUCCESS,
    GET_ALL_RECIPES_FAILURE,

    GET_ONE_RECIPE_STARTED,
    GET_ONE_RECIPE_SUCCESS,
    GET_ONE_RECIPE_FAILURE,

    SAVE_RECIPE_SUCCESS,
    SAVE_RECIPE_FAILURE,

    UPDATE_RECIPE_SUCCESS,
    UPDATE_RECIPE_FAILURE,

    DELETE_RECIPE_SUCCESS,
    DELETE_RECIPE_FAILURE,
} from '../types/recipe'

export const getAllRecipesStarted = () => ({ type: GET_ALL_RECIPES_STARTED })
export const getAllRecipesSuccess = payload => ({ type: GET_ALL_RECIPES_SUCCESS, payload })
export const getAllRecipesFailure = payload => ({ type: GET_ALL_RECIPES_FAILURE, payload })

export const getOneRecipeStarted = () => ({ type: GET_ONE_RECIPE_STARTED })
export const getOneRecipeSuccess = payload => ({ type: GET_ONE_RECIPE_SUCCESS, payload })
export const getOneRecipeFailure = payload => ({ type: GET_ONE_RECIPE_FAILURE, payload })

export const saveRecipeSuccess = payload => ({ type: SAVE_RECIPE_SUCCESS, payload })
export const saveRecipeFailure = payload => ({ type: SAVE_RECIPE_FAILURE, payload })

export const updateRecipeSuccess = () => ({ type: UPDATE_RECIPE_SUCCESS })
export const updateRecipeFailure = payload => ({ type: UPDATE_RECIPE_FAILURE, payload })

export const deleteRecipeSuccess = () => ({ type: DELETE_RECIPE_SUCCESS })
export const deleteRecipeFailure = payload => ({ type: DELETE_RECIPE_FAILURE, payload })