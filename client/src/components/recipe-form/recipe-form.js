import {
    Container,
    FormGroup,
    FormControl,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    Button,
    makeStyles
} from "@material-ui/core";
import PropTypes from 'prop-types'

import { useForm } from '@/hooks/useForm'
import { categories } from '@/constants/categories'
import RecipeSchema from './schema'

const useStyles = makeStyles(theme => ({
    formGroup: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    inputGroup: {
        width: '49%'
    },
    button: {
        marginTop: "2rem"
    }
}))

const RecipeForm = ({ initialValues, onSubmit }) => {
    const classes = useStyles()

    const {
        values,
        handleChange,
        handleSubmit,
        errors
    } = useForm(initialValues, onSubmit, RecipeSchema)

    return (
        <Container maxWidth="md">
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth>
                    <TextField
                        label="Название"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        helperText={
                            !errors.title
                                ? "Введите название рецепта, например: Тушеный кролик с картофелем и размарином"
                                : errors.title
                        }
                        error={!!errors.title}
                        required
                    />
                </FormControl>

                <FormControl fullWidth>
                    <TextField
                        label="URL Изображения"
                        name="img"
                        value={values.img}
                        onChange={handleChange}
                        variant="outlined"
                        helperText={
                            !errors.img
                                ? "Введите URL Изображения либо оставьте поле пустым"
                                : errors.img
                        }
                        error={!!errors.img}
                        margin="normal"
                    />
                </FormControl>

                <FormControl variant="outlined" fullWidth>
                    <TextField
                        select
                        label="Категория"
                        name="category"
                        value={values.category}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        required
                    >
                        {categories.map((label, index) =>
                            <MenuItem key={index} value={index}>{label}</MenuItem>
                        )}
                    </TextField>
                </FormControl>

                <FormGroup row className={classes.formGroup}>
                    <FormControl className={classes.inputGroup}>
                        <TextField
                            label="Время приготовления"
                            name="time"
                            value={values.time}
                            onChange={handleChange}
                            variant="outlined"
                            helperText={
                                !errors.time
                                    ? "Введите время приготовления, например: 1 час 25 минут"
                                    : errors.time
                            }
                            error={!!errors.time}
                            margin="normal"
                            required
                        />
                    </FormControl>
                    <FormControl className={classes.inputGroup}>
                        <TextField
                            label="Количество порций"
                            name="portion"
                            value={values.portion}
                            onChange={handleChange}
                            variant="outlined"
                            helperText={
                                !errors.portion
                                    ? "Введите количество порций, например: 3 порции"
                                    : errors.portion
                            }
                            error={!!errors.portion}
                            margin="normal"
                            required
                        />
                    </FormControl>
                </FormGroup>

                <FormControl fullWidth>
                    <TextField
                        label="Ингредиенты"
                        name="ingredients"
                        value={values.ingredients}
                        onChange={handleChange}
                        variant="outlined"
                        helperText={
                            !errors.ingredients
                                ? "Введите ингредиенты через запятую, например: яблоки - 3 штуки, мука - 2 стакана"
                                : errors.ingredients
                        }
                        error={!!errors.ingredients}
                        margin="normal"
                        required
                    />
                </FormControl>

                <FormControl fullWidth>
                    <TextField
                        label="Инструкция приготовления"
                        name="instructions"
                        value={values.instructions}
                        onChange={handleChange}
                        rows={8}
                        variant="outlined"
                        margin="normal"
                        helperText={
                            !errors.instructions
                                ? "Делайте инструкцию пошаговой, отделяя каждый шаг нажатием Enter"
                                : errors.instructions
                        }
                        error={!!errors.instructions}
                        multiline
                        required
                    />
                </FormControl>

                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    size="large"
                    className={classes.button}
                >Вперед</Button>
            </form>
        </Container>
    )
}

RecipeForm.propTypes = {
    initialValues: PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string,
        category: PropTypes.number.isRequired,
        time: PropTypes.string.isRequired,
        portion: PropTypes.string.isRequired,
        ingredients: PropTypes.string.isRequired,
        instructions: PropTypes.string.isRequired
    }).isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default RecipeForm