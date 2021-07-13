function News(props) {
  let items = [];

  props.news.forEach((el, i) => {
    if (i <3) {
      items.push(el);
    }});

  return (
    <ul className="list-group">
      {items.map(elem => (
        <li className="list-group-item" key={elem.id}>
        <div className="card">
          <div className="card-body lead lead-title">
            <h5 className="card-title">{elem.text}</h5>
          </div>
        </div>
      </li>
      ))}
    </ul>
  );
}

export default News;