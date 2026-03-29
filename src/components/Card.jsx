import { useEffect, useState } from 'react';

import { fetchPokemon } from '@/api.js';

import { ErrorMessage } from './ui/ErrorMessage.jsx';
import { Loader } from './ui/Loader.jsx';

export function Card({ id, handler }) {
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPokemon(id, setPokemon, setError, setIsLoading);
  }, [id]);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <article
      className="card"
      data-pokemon={pokemon}
      onClick={handler}
      onKeyDown={handler}
    >
      <img src={spriteUrl} alt="" width={160} height={160} />
      <h2>{pokemon}</h2>
    </article>
  );
}
