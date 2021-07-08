import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function News() {
  return (
    <Router>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="card">
            <div className="card-body lead">
              <h5 className="card-title">Довольно странные стихи Фета про колбасу и снеговиков</h5>
              <a href="/news" className="btn btn-secondary">Читать новость</a>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="card">
            <div className="card-body lead">
              <h5 className="card-title">В Москве эвакуировали балкон, на который вышли умирать</h5>
              <a href="/news" className="btn btn-secondary">Читать новость</a>
            </div>
          </div>
        </li>
      </ul>
    </Router>
  );
}

export default News;