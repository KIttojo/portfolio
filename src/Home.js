import News from './News';

function Home(props) {
  return (
    <div className='container'>
      <div className='row'>
        <main className="col-8">
          <h2 className="title"><strong>Где я?</strong></h2>
          <article className="lead">
            <p>
              Это небольшое приложение, где собраны теоретические знания и практические навыки.
            </p>
            <p>
              В разделе «Биография» собраны основные сведения обо мне и моем опыте.
            </p>
            <p>
            Раздел «Новости» содержит в себе раздел, посвященный несуществующим новостям, сгенерированным нейронными сетями и дополненные ими же. За генерацию новостей отвечает <mark>Neural Meduza</mark>. Далее эти новости красочно дополняет нейросеть семейства YaLM — <mark>Балабоба</mark>. Если вы ещё не слышали об этом сервисе, обязательно попробуйте!
            </p>
            <p>
            На страничке «О сайте» представлена исключительно технического рода информация о сайте (точнее, веб-приложении).
            </p>
          </article>
        </main>
        <aside className="col-4 news-react">
          <div className="news-list">
            <h2 className="news-title">Последние новости</h2>
            <News news={props.news}/>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Home;
