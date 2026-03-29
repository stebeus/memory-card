import { Link } from './ui/Link.jsx';
import { SocialIcon } from './ui/SocialIcon.jsx';

export function Footer() {
  return (
    <footer>
      <p>
        © Stebeus 2026.{' '}
        <Link to="https://opensource.org/license/mit">MIT License</Link>
      </p>
      <Link to="https://github.com/stebeus">
        <SocialIcon brand="github" alt="GitHub profile" />
      </Link>
    </footer>
  );
}
