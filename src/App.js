import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import NewsComp from './NewsPage';
import Home from './Home';
import Bio from './Bio';
import About from './About';

function setAvtiveTab(e) {
  const items = Array.from(document.getElementsByClassName("nav-link"));
  items.forEach(item => {item.classList.remove("active")})
  e.target.classList.add("active");
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    }
  }

  componentDidMount() {
    fetch('/posts')
      .then(res => res.json())
      .then(str => this.setState({
        news: str
      }));
  };

  render() {
    return (
      <div>
        <Router>
          <header className="d-flex justify-content-center sticky-top bg-dark">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <Link className="nav-link" to="/" onClick={setAvtiveTab}>Главная</Link>
                    <Link className="nav-link" to="/bio" onClick={setAvtiveTab}>Биография</Link>
                    <Link className="nav-link" to="/news" onClick={setAvtiveTab}>Новости</Link>
                    <Link className="nav-link" to="/about" onClick={setAvtiveTab}>О сайте</Link>
                  </div>
                </div>.
              </div>
            </nav>
          </header>

        <Switch>
          <Route path="/bio" component={Bio}></Route>
          <Route path="/news" render={() => (<NewsComp news={this.state.news}/>)}></Route>
          <Route path="/about" component={About}></Route>
          <Route exact path="/" render={() => (<Home news={this.state.news}/>)}></Route>
        </Switch>

        <footer className="footer mt-auto py-3 fixed-bottom bg-light">
          <div className="container">
            <span className="text-muted">
              <p className="footer-text">Связь со мной: </p>
              <div className="footer-icons">
              <a href="https://vk.com/id134517736"><svg fill="none" height="24" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="m0 23c0-10.8423 0-16.26346 3.36827-19.63173s8.78943-3.36827 19.63173-3.36827h2c10.8423 0 16.2635 0 19.6317 3.36827 3.3683 3.36827 3.3683 8.78943 3.3683 19.63173v2c0 10.8423 0 16.2635-3.3683 19.6317-3.3682 3.3683-8.7894 3.3683-19.6317 3.3683h-2c-10.8423 0-16.26346 0-19.63173-3.3683-3.36827-3.3682-3.36827-8.7894-3.36827-19.6317z" fill="#2787f5"/><path clipRule="evenodd" d="m13.0009 15h-3.5008c-1.00024 0-1.2003.4708-1.2003.9898 0 .9271 1.18686 5.525 5.5262 11.6061 2.8929 4.1529 6.9687 6.4041 10.6776 6.4041 2.2253 0 2.5006-.5 2.5006-1.3612v-3.1388c0-1 .2108-1.1996.9154-1.1996.5193 0 1.4094.2596 3.4864 2.2619 2.3737 2.3731 2.765 3.4377 4.1001 3.4377h3.5008c1.0003 0 1.5004-.5 1.2119-1.4867-.3157-.9834-1.449-2.4103-2.9528-4.1016-.816-.9641-2.0399-2.0023-2.4108-2.5215-.5192-.6674-.3709-.9641 0-1.5573 0 0 4.2652-6.007 4.7103-8.0463.2225-.7417 0-1.2866-1.0587-1.2866h-3.5008c-.8901 0-1.3005.4708-1.5231.9898 0 0-1.7802 4.3384-4.3022 7.1565-.816.8157-1.1869 1.0753-1.632 1.0753-.2225 0-.5446-.2596-.5446-1.0011v-6.9339c0-.89-.2583-1.2866-1.0002-1.2866h-5.5013c-.5562 0-.8908.413-.8908.8045 0 .8436 1.261 1.0382 1.391 3.4113v5.1542c0 1.13-.2042 1.3349-.6492 1.3349-1.1868 0-4.0737-4.3578-5.7859-9.3442-.3355-.9692-.6721-1.3607-1.5668-1.3607z" fill="#fff" fillRule="evenodd"/></svg></a>
              <a href="https://t.me/Kittojo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" data-ember-extension="1"><defs><linearGradient id="a" x1="46" x2="29" y1="11" y2="52" gradientUnits="userSpaceOnUse"><stop stopColor="#2aabee" offset="0"/><stop stopColor="#229ed9" offset="1"/></linearGradient></defs><g transform="scale(0.69)"><circle cy="34.6" cx="34.6" r="34.6" fill="url(#a)"/><path d="M47.8 20.5s3.6-1.4 3.3 2c-.1 1.4-1 6.3-1.7 11.6L47 49.8s-.2 2.3-2 2.7c-1.8.4-4.5-1.4-5-1.8-.4-.3-7.5-4.8-10-7-.7-.6-1.5-1.8.1-3.2l10.5-10c1.2-1.2 2.4-4-2.6-.6l-14 9.5s-1.6 1-4.6.1l-6.5-2s-2.4-1.5 1.7-3c10-4.7 22.3-9.5 33.2-14z" fill="#fff"/></g></svg></a>
              </div>
            </span>
          </div>
        </footer>
      </Router>
    </div>
  );
  }
}


export default App;
