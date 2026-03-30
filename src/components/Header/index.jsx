import { Link } from '@/components/__ui__/Link/index.jsx';
import { Scoreboard } from '@/components/__ui__/Scoreboard/index.jsx';

import './index.css';

export function Header({ score, bestScore }) {
  return (
    <header>
      <h1 className="logo">
        <Link>Memory Card Game</Link>
      </h1>
      <Scoreboard score={score} bestScore={bestScore} />
    </header>
  );
}
