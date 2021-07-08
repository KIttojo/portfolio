import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import App from './App';
import About from './About';
import Bio from './Bio';

function Header() {
  return(
    <Router>
      <header className="d-flex justify-content-center sticky-top bg-dark">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* <Link className="nav-link active" to="/">Главная</Link>
              <Link className="nav-link" to="/bio">Биография</Link>
              <Link className="nav-link" to="/news">Новости</Link>
              <Link className="nav-link " to="/about">О сайте</Link> */}
              <a className="nav-link active" aria-current="page" href="/">Главная</a>
              <a className="nav-link" href="/bio">Биография</a>
              <a className="nav-link" href="/news">Новости</a>
              <a className="nav-link" href="/about">О сайте</a>
            </div>
          </div>
          {/* <Switch>
            <Route path="/"><App /></Route>
            <Route path="/bio"><Bio /></Route>
            <Route path="/about"><About /></Route>
          </Switch> */}
        </div>
      </nav>
    </header>
  </Router>
  );
}

export default Header;