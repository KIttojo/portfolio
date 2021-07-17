var express = require('express');
var router = express.Router();

const easyvk = require('easyvk');
const fetch = require("node-fetch");

function getDate(postDate) {
  const ms = postDate;
  const date = new Date(+ms * 1000);
  const dmy = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' +  date.getFullYear().toString();
  
  return dmy;
}

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
          const postDate = getDate(items[i].date);
          // getText(items[i].text);

          const post = {
            date: postDate,
            text: items[i].text,
            id: items[i].id
          };
          posts.push(post);
        }

        return posts;
    });

    return posts;
  }).catch(console.error)
};

//fetch блочится серверами Яндекса, возвращая 403 ошибку. Буду искать другие решения.
// async function getText(title) {
//   let query = {
//     "length": 60,
//     "prompt": `${title}`,
//   }

//   return response = await fetch('https://pelevin.gpt.dobro.ai/generate/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'text/plain;charset=utf-8'
//     },
//     body: JSON.stringify(query),
//     redirect: 'follow'
//   }).then(response => response.text())
//   .then(result => console.log(result))
//   .catch(err => console.log(err));
//   // response = {}
//   // return await response;
// }

/* GET users listing. */
router.get('/', function(req, res, next) {
  getNews().then(posts => res.send(posts));
});

module.exports = router;
