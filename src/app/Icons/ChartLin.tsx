interface props {
  stroke?: string;
  fill?: string;
}
const Logo: React.FC<props> = ({ stroke, fill }) => (
  <svg
    width="78"
    height="51"
    viewBox="0 0 78 51"
    fill="none"
    className={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 49.5323C1.33333 46.1989 4 40.0323 12 42.0323C22 44.5323 26.5 41.0322 27.5 33.5322C28.5 26.0322 34.5 19.0322 43 20.0322C51.5 21.0322 58.5 24.0322 60.5 10.0322C62.1 -1.16776 71.8333 0.365574 76.5 2.53224"
      stroke="stroke-current"
      className={stroke}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default Logo;
