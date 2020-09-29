import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

require("dotenv").config()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
