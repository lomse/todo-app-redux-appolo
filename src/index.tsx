import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import * as serviceWorker from './serviceWorker'
import '@fortawesome/fontawesome-free/css/all.css'
import './index.css'
import App from './App'

ReactDOM.render(<App store={store} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
