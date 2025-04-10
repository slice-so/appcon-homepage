interface CoinbaseLogoProps {
  className?: string;
}

export function CoinbaseLogo({ className = '' }: CoinbaseLogoProps) {
  return (
    <svg
      className={className || 'w-full h-full'}
      width="1024"
      height="1024"
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1024" height="1024" rx="512" fill="#0052FF" />
      <path
        d="M512.147 692C412.697 692 332.146 611.45 332.146 512C332.146 412.55 412.697 332 512.147 332C601.247 332 675.197 396.95 689.447 482H870.797C855.497 297.2 700.846 152 512.147 152C313.396 152 152.146 313.25 152.146 512C152.146 710.75 313.396 872 512.147 872C700.846 872 855.497 726.8 870.797 542H689.297C675.047 627.05 601.247 692 512.147 692Z"
        fill="white"
      />
    </svg>
  );
}
