import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { RecipeForm } from '@/components'
import { saveRecipe } from '@/store/actions/recipe'

const Create = props => {
    const initialValues = {
        title: '',
        img: '',
        category: 0,
        time: '',
        portion: '',
        ingredients: '',
        instructions: ''
    }

    const onSubmit = values => {
        props.saveRecipe(values)
    }

    return (
        <RecipeForm initialValues={initialValues} onSubmit={onSubmit} />
    )
}

const mapDispatchToProps = dispatch => {
    return {
        saveRecipe: body => {
            dispatch(saveRecipe(body))
        }
    }
}

Create.propTypes = {
    saveRecipe: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(Create)