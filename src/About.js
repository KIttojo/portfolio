import React from 'react';
import './App.css';

function About() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h2 className="title"><strong>Об этом сайте</strong></h2>
          <article className="lead">
            <p>
            В данном разделе собрана информация исключительно технического характера.
            </p>
            <dl className="row">
              <dt className="col-sm-3 listRow">Front-end инструменты</dt>
              <dd className="col-sm-9">HTML 5, CSS, Bootstrap 5, JS + React.js.</dd>

              <dt className="col-sm-3 listRow">Back-end</dt>
              <dd className="col-sm-9">Node.js + Express.js</dd>

              <dt className="col-sm-3 listRow">Дополнительные инструменты</dt>
              <dd className="col-sm-9">
                <dl className="row">
                  <dt className="col-sm-4">API</dt>
                  <dd className="col-sm-8">
                    <p>VK API</p>
                  </dd>
                  <dt className="col-sm-4">Сервисы</dt>
                  <dd className="col-sm-8">
                    <p>Neural Meduza</p>
                    <p>Балабоба</p>
                  </dd>
                </dl>
              </dd>
            </dl>
          </article>
        </div>
      </div>
    </div>
  );
}

export default About;
