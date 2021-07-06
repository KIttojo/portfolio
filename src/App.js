import React from 'react';
import './App.css';

import News from './News';

function App() {
  return (
    <div>
      <header className="d-flex justify-content-center sticky-top bg-dark">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Главная</a>
                <a className="nav-link" href="#">Биография</a>
                <a className="nav-link" href="#">Новости</a>
                <a className="nav-link" href="#">О сайте</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className='container'>
        <div className='row'>
          <main className="col-8">
            <article>
              <h2 className="title"><strong>Где я?</strong></h2>
              <p className="lead">            
                Это небольшое приложение, где собраны теоретические знания и практические навыки.
              </p>
              <p className="lead">
                В разделе «Биография» собраны основные сведения обо мне и моем опыте.
              </p>
              <p className="lead">
              Раздел «Новости» содержит в себе раздел, посвященный несуществующим новостям, сгенерированным нейронными сетями и дополненные ими же. За генерацию новостей отвечает <mark>Neural Meduza</mark>. Далее эти новости красочно дополняет нейросеть семейства YaLM — <mark>Балабоба</mark>. Если вы ещё не слышали об этом сервисе, обязательно попробуйте!
              </p>
              <p className="lead">
              На страничке «О сайте» представлена исключительно технического рода информация о сайте (точнее, веб-приложении).
              </p>
            </article>
          </main>
          <aside className="col-4 news-react">
            <div className="news-list">
              <h2 className="news-title">Последние новости</h2>
              <News />
              </div>
          </aside>
        </div>
        
      </div>
      <footer className="footer mt-auto py-3 fixed-bottom bg-light">
        <div className="container">
          <span className="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
