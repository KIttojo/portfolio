const fetch = require("node-fetch");

async function getNews() {
  let posts = [];
  //YES, I LEAVE MY VK APP API KEY PUBLICKLY
  let data = await fetch('https://api.vk.com/method/wall.get?owner_id=-198361544&count=10&filter=owner&offset=1&v=5.131&access_token=aa46d955c8daf6e39cd0cff9a1c3ec54d9eaaa314da6d4b16d8b0bc9c5511b8493046bb5d5153ba15e7c3')
    .then(response => response.json())
    .then(res => {
      res.response.items.forEach(el => posts.push({
        date: el.date,
        text: el.text
      }));
      return posts;
    });

    return await data;
}

function createNews() {
  //IS JSX SYNTAX NOT SUPPORTED INSIDE ASYNC?
  //IF YOU SEE THIS, I STILL DIDN'T SOLVE THIS ISSUE =(
    const postsArray = await getNews().then(data => {return data});
    return ([
      <ul className="list-group">
      {postsArray.map(elem => ( 
        <li className="list-group-item">
          <div className="card fullText">
            <div className="card-body">
              <time dateTime="2021-08-07T00:00:00.000Z">7 июня 2021</time>
              <h3 className="card-title">{elem.date}</h3>
              <p className="lead">Довольно странные стихи Фета про колбасу и снеговиковДовольно странные стихи Фета про колбасу и снеговиков</p>
            </div>
          </div>
        </li>
       )
    )}
    </ul>
    ]
   );
}


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
