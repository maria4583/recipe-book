import {
    AppBar,
    Button,
    Toolbar,
    Typography,
    makeStyles
} from '@material-ui/core'
import { NavLink } from "react-router-dom";

const links = [
    {
        path: '/',
        title: 'Рецепты'
    },
    {
        path: '/create',
        title: 'Создать рецепт'
    }
]

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    bar: {
        background: theme.palette.header.background,
        padding: '.6rem 0',
    },
    title: {
        flexGrow: 1,
    },
}))

const Header = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>Книга рецептов</Typography>
                    <div>
                        {links.map(({ path, title }) =>
                            <Button color="inherit" key={path}>
                                <NavLink to={path}>{title}</NavLink>
                            </Button>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header