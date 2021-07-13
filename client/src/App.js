import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Signup from './containers/Signup'
import Login from './containers/Login'
import Games from './containers/Games'
import FullGame from './components/FullGame'
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

  const logOut = () => {
    fetch('/logout', {
      method: "DELETE"
    })
    .then(() => {
      setLoggedIn(false)
      setUser({})
      history.push('/')
    })
  }


  return (
    <div className="App">
      <NavBar onLogin={onLogin} loggedIn={loggedIn} logOut={logOut} />
      <Switch>
        <Route exact path="/" render={routerProps => <Home {...routerProps} loggedIn={loggedIn} user={user} />} />
        <Route exact path="/signup" render={routerProps => <Signup {...routerProps} onLogin={onLogin} />} />
        <Route exact path="/login" render={routerProps => <Login {...routerProps} onLogin={onLogin} />} />
        <Route exact path ="/video_games" render={routerProps => <Games {...routerProps} user={user} loggedIn={loggedIn} />} />
        <Route path ="/video_games/:id" render={routerProps => <FullGame {...routerProps} user={user} loggedIn={loggedIn} />} />
      </Switch>
    </div>
  );
}

export default App;
