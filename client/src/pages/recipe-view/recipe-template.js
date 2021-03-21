import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
    Container,
    Grid,
    Box,
    Typography,
    ButtonGroup,
    Button,
    List,
    ListItem,
    ListItemText,
    makeStyles
} from '@material-ui/core'
import { deleteRecipe } from '@/store/actions/recipe'
import { Dialog } from '@/components/'

const useStyles = makeStyles(theme => ({
    text: {
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
    },
    buttonGroup: {
        marginTop: '3rem',
    }
}))

const RecipeTemplate = props => {
    const [openDialog, setOpenDialog] = useState(false)

    const classes = useStyles()
    const history = useHistory()
    const { recipe } = props

    const handleDialogClick = result => {
        setOpenDialog(false)

        if (result) {
            props.deleteRecipe(recipe._id)
            history.push('/')
        }
    }

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                {recipe.title}
            </Typography>

            <Grid container spacing={10} wrap="wrap-reverse">
                <Grid item xs={12} sm={8}>
                    <Box>
                        <Typography variant="h6" gutterBottom>Инструкции:</Typography>
                        <Typography variant="body1" gutterBottom className={classes.text}>
                            {recipe.instructions}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box>
                        <Typography variant="h6" gutterBottom>Время приготовления:</Typography>
                        <Typography variant="body1" gutterBottom>{recipe.time}</Typography>
                    </Box>

                    <Box>
                        <Typography variant="h6" gutterBottom>Количество порций:</Typography>
                        <Typography variant="body1" gutterBottom>{recipe.portion}</Typography>
                    </Box>

                    <Box>
                        <Typography variant="h6" gutterBottom>Ингредиенты:</Typography>
                        <List component="nav" aria-label="main mailbox folders" disablePadding>
                            {recipe.ingredients.split(', ').map(ingredient => (
                                <ListItem disableGutters dense key={ingredient}>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                variant="body1"
                                            >
                                                {ingredient}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Grid>
            </Grid>

            <ButtonGroup className={classes.buttonGroup} size="large">
                <Button color="primary">
                    <Link to={`/recipe/${recipe._id}/edit`}>Редактировать</Link>
                </Button>
                <Button color="secondary" onClick={() => setOpenDialog(true)}>
                    Удалить
                </Button>
            </ButtonGroup>

            <Dialog
                open={openDialog}
                handleClick={handleDialogClick}
                title="Вы уверены, что хотите удалить рецепт?"
                text="Это действие окончательное и вы не сможете восстановить данные."
            />
        </Container>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        deleteRecipe: id => {
            dispatch(deleteRecipe(id))
        }
    }
}

RecipeTemplate.propTypes = {
    recipe: PropTypes.shape({
        _id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string,
        category: PropTypes.number.isRequired,
        time: PropTypes.string.isRequired,
        portion: PropTypes.string.isRequired,
        ingredients: PropTypes.string.isRequired,
        instructions: PropTypes.string.isRequired,
    }).isRequired,
    deleteRecipe: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(RecipeTemplate)
