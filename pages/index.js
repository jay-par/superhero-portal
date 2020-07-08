import Head from 'next/head';
import { getAllHeroes } from '../src/apis/marvel';
import Navigation from '../src/components/Navigation';

const Index = (props) => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation {...props} />
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  const heroes = [
    'hulk',
    'Falcon',
    'iron man',
    'captain america',
    'storm',
    'thanos',
    'spider-man',
    'Groot',
    'rocket raccoon',
    'X-23',
  ];
  return {
    props: { heroes },
  };
}

export default Index;
