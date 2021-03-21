import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    Grid,
    Card,
    CardHeader,
    CardMedia,
    Badge,
    makeStyles,
} from '@material-ui/core'
import { formatDate } from "@/utils/format-date"
import { categories } from '@/constants/categories'

const useStyles = makeStyles(theme => ({
    card: {
        width: 350,
        height: 290,
        marginBottom: '3rem',
    },
    media: {
        height: '100%'
    }
}))

const RecipeItem = ({ recipe }) => {
    const classes = useStyles()

    return (
        <Grid item>
            <Badge badgeContent={formatDate(recipe.createdAt)} color="primary">
                <Card className={classes.card}>
                    <Link to={`/recipe/${recipe._id}`}>
                        <CardHeader
                            title={recipe.title}
                            subheader={categories[recipe.category]}
                        />
                    </Link>
                    {recipe.img
                        ? <CardMedia className={classes.media} image={recipe.img} />
                        : null
                    }
                </Card>
            </Badge>
        </Grid>
    )
}

RecipeItem.propTypes = {
    recipe: PropTypes.shape({
        _id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string,
        category: PropTypes.number.isRequired,
        createdAt: PropTypes.string.isRequired
    }).isRequired
}

export default RecipeItem