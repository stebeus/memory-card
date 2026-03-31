import { Icon } from '@/components/__ui__/Icon.jsx';
import { Link } from '@/components/__ui__/Link/index.jsx';

import './index.css';

export function Footer() {
  return (
    <footer>
      <p className="copyright">
        © Stebeus 2026.{' '}
        <Link to="https://opensource.org/license/mit">MIT License</Link>
      </p>
      <Link to="https://github.com/stebeus">
        <Icon spriteId="github" alt="GitHub profile" />
      </Link>
    </footer>
  );
}
