import Head from 'next/head';
import { getAllHeroes } from '../src/apis/marvel';
import Navigation from '../src/components/Navigation';
import { makeStyles } from '@material-ui/core/styles';

const Index = (props) => {
  return (
    <div className="container">
      <main>
        <Navigation {...props} />
      </main>
    </div>
  );
};

export const getStaticProps = async (context) => {
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
};

export default Index;
