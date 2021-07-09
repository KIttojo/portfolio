function NewsComp() {
  return (
    <div className='container'>
      <div className='row'>
        <h2 className="title"><strong>Последние новости</strong></h2>

        <ul className="list-group">
          <li className="list-group-item">
            <div className="card fullText">
              <div className="card-body">
                <time dateTime="2021-08-07T00:00:00.000Z">7 июня 2021</time>
                <h3 className="card-title">Довольно странные стихи Фета про колбасу и снеговиков</h3>
                <p className="lead">Довольно странные стихи Фета про колбасу и снеговиковДовольно странные стихи Фета про колбасу и снеговиков</p>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="card fullText">
              <div className="card-body">
                <time dateTime="2021-08-07T00:00:00.000Z">7 июня 2021</time>
                <h3 className="card-title">В Москве эвакуировали балкон, на который вышли умирать</h3>
                <p className="lead">Довольно странные стихи Фета про колбасу и снеговиковДовольно странные стихи Фета про колбасу и снеговиков</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
      
  );
}

export default NewsComp;
