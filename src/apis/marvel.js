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
  let heroes = [];
  await axios
    .all([
      getHero('hulk'),
      getHero('Falcon'),
      getHero('Iron man'),
      getHero('captain america'),
      getHero('Thanos'),
      getHero('Spider-man'),
      getHero('rocket raccoon'),
      getHero('wolverine'),
      getHero('storm'),
      getHero('X-23'),
    ])
    .then((results) => {
      results.map((hero) => {
        const heroPayload = hero.data.data.results[0];
        heroes.push(heroPayload);
      });
    });

  return heroes;
};
