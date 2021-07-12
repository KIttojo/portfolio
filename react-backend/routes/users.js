var express = require('express');
var router = express.Router();

const easyvk = require('easyvk');
const fetch = require("node-fetch");

function getNews() {
  //YES, I LEAVE MY VK APP API KEY PUBLICKLY
  return easyvk({
    token: "aa46d955c8daf6e39cd0cff9a1c3ec54d9eaaa314da6d4b16d8b0bc9c5511b8493046bb5d5153ba15e7c3",
  }).then(async (vk) => {
    let posts = [];
    await vk.call('wall.get', {
        owner_id: -198361544,
        offset: 1,
        count: 10,
        filter: 'owner'
    }).then(async (res) => {
        const items = res.items;
        for (let i = 0; i < items.length; i++) {
          const post = {
            date: items[i].date,
            text: items[i].text,
          };
          posts.push(post);
        }
        return posts;
    });
    return posts;
  }).catch(console.error)
};

//fetch блочится серверами Яндекса, возвращая 403 ошибку. Буду искать другие решения.
async function getText() {
  const obj = { 
    date: 1626105602, 
    text: "Нобелевскую премию мира присудили за продолжение стрельбы по живому американцу" 
}

  let query = {
    "query":`${obj.text}`,
    "intro":0,
    "filter":1
  }

  let response = await fetch('https://zeapi.yandex.net/lab/api/yalm/text3', {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8'
    },
    body: JSON.stringify(query)
  }).then((res) => console.log(res));
  response = {}
  return await response;
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  getNews().then(posts => res.send(posts));
});

module.exports = router;
