function NewsComp(props) {
  console.log("Дела обстоят так: на 14.07 Балабоба от Яндекса блокирует запросы (403 ошибка), а Порфирьевич не удалось настроить. Жаль.")
  return (
    <div className='container'>
      <div className='row'>
        <h2 className="title"><strong>Последние новости</strong></h2>
        <ul className="list-group">
          {props.news.map(elem => (
            <li className="list-group-item" key={elem.id}>
              <div className="card fullText">
                <div className="card-body">
                  <time dateTime="2021-08-07T00:00:00.000Z">{elem.date}</time>
                  <h3 className="card-title">{elem.text}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div> 
  );

}

export default NewsComp;
