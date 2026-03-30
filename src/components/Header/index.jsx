import { Link } from '@/components/ui/Link/index.jsx';
import { Scoreboard } from '@/components/ui/Scoreboard/index.jsx';

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
