import { Link } from './ui/Link.jsx';
import { Scoreboard } from './ui/Scoreboard.jsx';

export function Header({ score, bestScore }) {
  return (
    <header>
      <h1 className="logo">
        <Link>Memory card</Link>
      </h1>
      <Scoreboard score={score} bestScore={bestScore} />
    </header>
  );
}
