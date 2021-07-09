import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Signup from './containers/Signup'
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const history = useHistory()

  useEffect(() => {
    fetch('/me')
    .then(r => {
      if(r.ok){
        r.json()
        .then(u => {
          setLoggedIn(true)
          setUser(u)
        })
      }
    })
  }, [])

  const onLogin = (u) => {
    setLoggedIn(true)
    setUser(u)
    history.push('/')
  }


  return (
    <div className="App">
      <NavBar onLogin={onLogin} loggedIn={loggedIn} />
      <Switch>
        <Route exact path="/" render={routerProps => <Home {...routerProps} loggedIn={loggedIn} user={user} />} />
        <Route exact path="/signup" render={routerProps => <Signup {...routerProps} onLogin={onLogin} />} />
      </Switch>
    </div>
  );
}

export default App;
