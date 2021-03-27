import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import { Container } from '@material-ui/core'
import {
    RecipeList,
    RecipeView,
    RecipeEdit,
    Create
} from '@/pages'
import { Header } from '@/components'
import Theme from '@/styles/'

const App = () => (
    <BrowserRouter>
        <Theme>
            <Header />

            <Container maxWidth="lg" style={{ padding: '3rem 0' }}>
                <Switch>
                    <Route exact path="/" component={RecipeList} />
                    <Route exact path="/recipe/:id" component={RecipeView} />
                    <Route exact path="/recipe/:id/edit" component={RecipeEdit}/>
                    <Route exact path="/create" component={Create} />
                </Switch>
            </Container>
        </Theme>
    </BrowserRouter>
)

export default App