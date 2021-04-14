import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import { Youtube } from "./components/youtube-site/youtube";

const App = () => {
  return (
      <Router>
        <Youtube />
      </Router>
  )
}

export default App;
