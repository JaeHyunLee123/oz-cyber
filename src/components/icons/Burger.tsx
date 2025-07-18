interface BurgerProps {
  fill?: string;
}

export default function Burger({ fill = "#080341" }: BurgerProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.5 13.75H7.5V11.25H32.5V13.75Z"
        fill={fill}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.5 21.25H7.5V18.75H32.5V21.25Z"
        fill={fill}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.5 28.75H7.5V26.25H32.5V28.75Z"
        fill={fill}
      />
    </svg>
  );
}
