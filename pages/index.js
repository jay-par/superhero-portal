import Head from 'next/head';
import Navigation from '../src/components/Navigation';
import { getAllHeroes } from '../src/apis/marvel';

const Index = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  let heroes;
  // Promise.all([getHero('hulk'), getHero('wolverine')]).then((results) => {
  //   const hulk = results[0];
  //   const wolverine = results[1];
  //   console.log(results[0].data.results.name);
  //   heroes = { hulk, wolverine };
  // });
  await getAllHeroes();

  return {
    props: {},
  };
}

export default Index;
