import {
    useMediaQuery,
    createMuiTheme,
    ThemeProvider,
    CssBaseline
} from '@material-ui/core'
import LightTheme from './themes/light'
import DarkTheme from './themes/dark'

const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                all: {
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                },
                a: {
                    textDecoration: 'none',
                    color: 'inherit'
                }
            }
        }
    },
    typography: {
        fontFamily: [
            'Nunito',
            'Segoe UI',
            'Roboto',
            'sans-serif'
        ]
    },
    palette: DarkTheme
})

export default ({ children }) => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
)
