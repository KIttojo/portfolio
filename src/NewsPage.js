function NewsComp() {
  console.log("Дела обстоят так: на 12.07 Балабоба от Яндекса блокирует запросы (403 ошибка), Порфирьевич не работает (503 ошибка), как и пара его аналогов. Жаль.")
  return (
    <div className='container'>
      <div className='row'>
        <h2 className="title"><strong>Последние новости</strong></h2>
        <ul className="list-group">
          {/* {res.map(elem => (
            <li className="list-group-item">
              <div className="card fullText">
                <div className="card-body">
                  <time dateTime="2021-08-07T00:00:00.000Z">7 июня 2021</time>
                  <h3 className="card-title">{elem.date}</h3>
                  <p className="lead">{elem.text}</p>
                </div>
              </div>
            </li>
          ))} */}
          <li className="list-group-item">
            <div className="card fullText">
              <div className="card-body">
                <time dateTime="2021-08-07T00:00:00.000Z">10 июня 2021</time>
                <h3 className="card-title">Пользователи приложения «Госуслугия» смогут подслушивать разговоры своих коллег и одноклассников</h3>
                <p className="lead">Пользователи приложения «Госуслугия» смогут подслушивать разговоры своих коллег и одноклассников. Об этом пишет «Коммерсант» со ссылкой на представителя проекта.
                  Если верить этой информации, то программа позволяет не только слушать, но и записывать разговоры граждан через микрофоны сотовых телефонов.
                  Она также будет сохранять аудиозаписи.
                  В настоящее время проект находится в стадии тестирования с несколькими государственными ведомствами.
                  Это МВД, Рособрнадзор, Минэкономразвития и другие.
                  Ожидается, что к концу года он будет запущен в полном объеме.</p>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="card fullText">
              <div className="card-body">
                <time dateTime="2021-08-07T00:00:00.000Z">9 июня 2021</time>
                <h3 className="card-title">В американских школах новый вид наказаний — принудительный расстрел за отказ от предложения съесть краба</h3>
                <p className="lead">В американских школах новый вид наказаний — принудительный расстрел за отказ от предложения съесть краба на Хэллоуин.
                  Я думаю, что в американских школах новый вид наказаний - принудительный каннибализм за отказ от предложения съесть лобстера на День благодарения.</p>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="card fullText">
              <div className="card-body">
                <time dateTime="2021-08-07T00:00:00.000Z">9 июня 2021</time>
                <h3 className="card-title">Выпускники горно-металлургического техникума вернулись из Чувашии, где проходили учения по поеданию сала</h3>
                <p className="lead">В американских школах новый вид наказаний — принудительный расстрел за отказ от предложения съесть краба на Хэллоуин.
                Выпускники горно-металлургического техникума вернулись из Чувашии, где проходили учения по поеданию сала на скорость.
                В них, кроме российских студентов, участвовали и иностранные бойцы, сообщили в техникуме.
                Для победы участникам нужно было съесть как можно больше сала за определенное время.
                Как проходит это испытание, и чей вариант был лучше, узнаем в нашем сюжете.
                Первый этап конкурса — бег на время.
                На старте восемь участников, каждый со своей тарелкой.
                По сигналу судьи все должны одновременно съесть сало, а затем передать его следующему.
                И так до финала.
                Сало — это лишь часть программы.</p>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="card fullText">
              <div className="card-body">
                <time dateTime="2021-08-07T00:00:00.000Z">9 июня 2021</time>
                <h3 className="card-title">Видели, как Петр I обнимал Кашина?</h3>
                <p className="lead">Видели, как Петр I обнимал Кашина? Да, он обнимал его так, что все присутствующие видели, как у него тряслась рука.
                Да еще и сказал: «Петр Иванович, друг мой, дай тебе Бог здоровья на многие лета...»
                А затем, когда Петр ушел, Кашин начал жаловаться – он только сегодня узнал, что у него есть друзья.
                И он пожаловался, что в прошлом году на юбилейном вечере он не смог подойти к своему другу по имени Петр.
                «Почему?
                Ты же так любишь Петра Ивановича.
                Почему же ты не подошел?»
                У Кашина началась черная полоса в его жизни.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div> 
  );

}

export default NewsComp;
