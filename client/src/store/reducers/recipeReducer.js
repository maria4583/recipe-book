import {
    GET_ALL_RECIPES_STARTED,
    GET_ALL_RECIPES_SUCCESS,
    GET_ALL_RECIPES_FAILURE,

    GET_ONE_RECIPE_STARTED,
    GET_ONE_RECIPE_SUCCESS,
    GET_ONE_RECIPE_FAILURE,

    SAVE_RECIPE_SUCCESS,
    SAVE_RECIPE_FAILURE, UPDATE_RECIPE_SUCCESS, UPDATE_RECIPE_FAILURE, DELETE_RECIPE_SUCCESS, DELETE_RECIPE_FAILURE,
} from '../types/recipe'

const initialState = {
    loading: false,
    recipes: [],
    recipeById: {},
    error: null
}

export const recipeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_RECIPES_STARTED:
            return { ...state, loading: true, error: null }
        case GET_ALL_RECIPES_SUCCESS:
            return { ...state, loading: false, error: null, recipes: payload }
        case GET_ALL_RECIPES_FAILURE:
            return { ...state, loading: false, error: payload }

        case GET_ONE_RECIPE_STARTED:
            return { ...state, loading: true, error: null }
        case GET_ONE_RECIPE_SUCCESS:
            return { ...state, loading: false, error: null, recipeById: payload }
        case GET_ONE_RECIPE_FAILURE:
            return { ...state, loading: false, error: payload }

        case SAVE_RECIPE_SUCCESS:
            return { ...state, error: null, recipes: [...state.recipes, payload] }
        case SAVE_RECIPE_FAILURE:
            return { ...state, error: payload }

        case UPDATE_RECIPE_SUCCESS:
            return { ...state, error: null }
        case UPDATE_RECIPE_FAILURE:
            return { ...state, error: payload }

        case DELETE_RECIPE_SUCCESS:
            return { ...state, error: null }
        case DELETE_RECIPE_FAILURE:
            return { ...state, error: payload }

        default:
            return state
    }
}