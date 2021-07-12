function News() {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="card">
          <div className="card-body lead lead-title">
            <h5 className="card-title">Пользователи приложения «Госуслугия» смогут подслушивать разговоры своих коллег и одноклассников</h5>
            <a href="/news" className="btn btn-secondary">Читать новость</a>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="card">
          <div className="card-body lead">
            <h5 className="card-title">В американских школах новый вид наказаний — принудительный расстрел за отказ от предложения съесть краба</h5>
            <a href="/news" className="btn btn-secondary">Читать новость</a>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default News;