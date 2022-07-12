import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Layout from './components/Layout'

import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <BrowserRouter
        history={history}
        basename={window.__POWERED_BY_QIANKUN__ ? '/lowCode' : '/'}
      >
        <Layout />
      </BrowserRouter>
    </div>
  )
}

export default App
