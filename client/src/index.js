import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './store/store'

import '@babel/polyfill'

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)