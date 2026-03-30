import { Card } from '@/components/Card/index.jsx';

const getRandomId = (pokemonAmount = 75) =>
  Math.ceil(Math.random() * pokemonAmount);

export function Grid({ size = 8, cardHandler }) {
  const createCard = () => (
    <Card key={crypto.randomUUID()} id={getRandomId()} handler={cardHandler} />
  );

  const cards = Array.from({ length: size }, createCard);

  return <div className="grid">{cards}</div>;
}
