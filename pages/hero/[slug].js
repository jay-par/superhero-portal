import { getHero } from '../../src/apis/marvel';

const Hero = (props) => {
  return (
    <div className="container">
      <h2>{props.hero.name}</h2>
      <p>{props.hero.description}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = [
    { params: { slug: 'hulk' } },
    { params: { slug: 'Falcon' } },
    { params: { slug: 'iron man' } },
    { params: { slug: 'captain america' } },
    { params: { slug: 'storm' } },
    { params: { slug: 'thanos' } },
    { params: { slug: 'spider-man' } },
    { params: { slug: 'Groot' } },
    { params: { slug: 'rocket raccoon' } },
    { params: { slug: 'X-23' } },
    { params: { slug: 'hulk' } },
  ];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const hero = await getHero(params.slug);
  return {
    props: { hero: hero.data.data.results[0] },
  };
}

export default Hero;
