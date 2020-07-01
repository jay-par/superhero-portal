import axios from 'axios';
import CryptoJS from 'crypto-js';

let client = null;

const _getClient = () => {
  if (!client) {
    client = axios.create({
      baseURL: 'https://gateway.marvel.com',
      timeout: 1000,
      headers: {},
    });
  }
  return client;
};

export const getHero = async (hero) => {
  const ts = Date.now();
  const hash = CryptoJS.MD5(ts + process.env.MARVEL_PRIVATE_KEY + process.env.MARVEL_PUBLIC_KEY).toString();

  return _getClient().get(
    `/v1/public/characters?name=${hero}&apikey=${process.env.MARVEL_PUBLIC_KEY}&hash=${hash}&ts=${ts}&limit=1`
  );
};

export const getAllHeroes = async () => {
  // const heroes = [
  //   'hulk',
  //   'wolverine',
  //   // 'iron man',
  //   // 'captain america',
  //   // 'thor',
  //   // 'thanos',
  //   // 'spider-man',
  //   // 'Groot',
  //   // 'rocket raccoon',
  //   // 'silver surfer'
  // ];
  let heroes = [];
  await axios.all([getHero('hulk'), getHero('thor')]).then((results) => {
    results.map((hero) => {
      const heroPayload = hero.data.data.results[0];
      heroes.push(heroPayload);
    });
  });
  console.log(heroes);
};
