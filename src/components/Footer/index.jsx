import { Icon } from '@/components/ui/Icon/index.jsx';
import { Link } from '@/components/ui/Link/index.jsx';

export function Footer() {
  return (
    <footer>
      <p>
        © Stebeus 2026.{' '}
        <Link to="https://opensource.org/license/mit">MIT License</Link>
      </p>
      <Link to="https://github.com/stebeus">
        <Icon fileName="github" alt="GitHub profile" />
      </Link>
    </footer>
  );
}
