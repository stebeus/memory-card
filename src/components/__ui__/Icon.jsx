import { BASE_URL } from '@/constants.js';

export function Icon({ spriteId, alt }) {
  const url = `${BASE_URL}/icons.svg#${spriteId}`;

  return (
    <svg
      className="icon"
      role="img"
      aria-label={alt}
      width={24}
      height={24}
      fill="currentColor"
    >
      <use href={url}></use>
    </svg>
  );
}
