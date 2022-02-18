import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import './index.scss'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import SingleLodging from './pages/SingleLodging'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route
          exact
          path="/lodging/:lodgingId"
          render={(props) => <SingleLodging {...props} />}
        />

        <Route path="/about">
          <About />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
