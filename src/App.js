
import React from 'react'
import { Nav } from './components'
import { routes } from './components/routes'
import { BrowserRouter as Router } from 'react-router-dom'

import './sass/App.scss'

function App () {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Nav routes={routes} />
        </div>
      </div>
    </Router>
  )
}

export default App
