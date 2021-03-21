import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import RecipeItem from "./recipe-item";
import { ErrorText, Loader } from '@/components'
import { getRecipes } from '@/store/actions/recipe'

const RecipeList = props => {
    const { recipes } = props

    useEffect(() => {
        props.getRecipes()
    }, [])

    const recipesContent = recipes && recipes.map((recipe, index) => (
        <RecipeItem recipe={recipe} key={index} />
    ))

    const loading = props.loading ? <Loader /> : null
    const content = !(props.loading || props.error) ? recipesContent : null
    const error = props.error ? <ErrorText /> : null

    return (
        <div>
            <Grid container justify="space-between" spacing={3}>
                {loading}
                {content}
                {error}
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({ ...state.recipes })

const mapDispatchToProps = dispatch => {
    return {
        getRecipes: () => {
            dispatch(getRecipes())
        }
    }
}

RecipeList.propTypes = {
    loading: PropTypes.bool.isRequired,
    recipes: PropTypes.array.isRequired,
    error: PropTypes.string,
    getRecipes: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)