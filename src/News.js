function News() {
  return (
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
  );
}

export default News;