import React from 'react';
import './App.css';

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
      <div className='row'>
        <main className="col-8">
          <article>
            <h2>
              Где я?
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim pulvinar ligula at malesuada. Ut vitae tellus ut urna aliquam efficitur. In sit amet mattis dolor. Suspendisse id nulla leo. Vivamus lorem velit, mattis at risus quis, pulvinar efficitur leo. Integer non tortor vitae ipsum luctus dictum. Sed nisi purus, elementum non commodo non, lobortis vel ipsum. In mattis, risus luctus volutpat accumsan, ligula nunc malesuada lorem, quis finibus sem justo quis nisl. Nunc auctor augue id vulputate tempor. Aenean aliquet iaculis quam a fermentum. Nullam nec lorem venenatis, vulputate elit nec, accumsan eros. Ut ultricies ligula euismod dui tincidunt finibus. Pellentesque malesuada mattis auctor. Proin maximus nunc nisi, ut finibus nibh ornare in. In hac habitasse platea dictumst. Sed vehicula in lorem ac eleifend.
              Ut ut nibh et felis fringilla scelerisque. Praesent pharetra viverra metus quis gravida. Curabitur eget risus magna. Etiam sit amet tellus purus. Quisque dignissim varius maximus. Aliquam imperdiet leo ut nisi rhoncus bibendum. Quisque faucibus erat sed leo sagittis, ut malesuada velit vestibulum.
              Sed semper non ipsum malesuada ultrices. Vivamus posuere tempor venenatis. Cras scelerisque euismod nulla vitae commodo. Aliquam erat volutpat. Praesent justo ex, feugiat nec viverra eu, pretium nec elit. Nam et mauris vel massa gravida dapibus. Nulla facilisi.
            </p>
          </article>
        </main>
        <aside className="col-4 news-react">
          <div className="news-list">
            <h2>Последние новости</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Довольно странные стихи Фета про колбасу и снеговиков</h5>
                    <a href="#" className="btn btn-secondary">Go somewhere</a>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">В Москве эвакуировали балкон, на который вышли умирать</h5>
                    <a href="#" className="btn btn-secondary">Go somewhere</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <span className="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
