import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

import RecipeTemplate from './recipe-template'
import { ErrorText, Loader } from '@/components'
import { getRecipe } from '@/store/actions/recipe'

const RecipeView = props => {
    const { id } = useParams()

    useEffect(() => {
        props.getRecipe(id)
    }, [])

    const recipe =
        !(Object.keys(props.recipeById).length === 0)
            ? <RecipeTemplate recipe={props.recipeById} />
            : null

    const loading = props.loading ? <Loader /> : null
    const content = !(props.loading || props.error) ? recipe : null
    const error = props.error ? <ErrorText /> : null

    return (
        <div>
            {loading}
            {content}
            {error}
        </div>
    )
}

const mapStateToProps = state => ({ ...state.recipes })

const mapDispatchToProps = dispatch => {
    return {
        getRecipe: id => {
            dispatch(getRecipe(id))
        }
    }
}

RecipeView.propTypes = {
    loading: PropTypes.bool.isRequired,
    recipeById: PropTypes.object.isRequired,
    error: PropTypes.string,
    getRecipe: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeView)