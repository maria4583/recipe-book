import { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { RecipeForm, ErrorText, Loader } from '@/components/'
import { updateRecipe, getRecipe } from '@/store/actions/recipe'

const RecipeEdit = props => {
    const history = useHistory()
    const { id } = useParams()

    const onSubmit = values => {
        props.updateRecipe(values)
        history.push(`/recipe/${id}`)
    }

    useEffect(() => {
        props.getRecipe(id)
    }, [])

    const recipe =
        !(Object.keys(props.recipeById).length === 0)
            ? <RecipeForm initialValues={props.recipeById} onSubmit={onSubmit} />
            : null

    const loading = props.loading ? <Loader /> : null
    const content = !(props.loading || props.error) ? recipe : null
    const error = props.error ? <ErrorText /> : null

    return (
        <>
            {loading}
            {content}
            {error}
        </>
    )
}

const mapStateToProps = state => ({ ...state.recipes })

const mapDispatchToProps = dispatch => {
    return {
        updateRecipe: body => {
            dispatch(updateRecipe(body))
        },
        getRecipe: id => {
            dispatch(getRecipe(id))
        }
    }
}

RecipeEdit.propTypes = {
    loading: PropTypes.bool.isRequired,
    recipeById: PropTypes.object.isRequired,
    error: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeEdit)