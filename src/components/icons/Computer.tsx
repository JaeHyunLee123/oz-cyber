interface ComputerProps {
  stroke?: string;
}

export default function Computer({ stroke = "white" }: ComputerProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M7 20H17M9 16V20M15 16V20M3.42857 13.7143H20.5714M4 4H20C20.5523 4 21 4.44772 21 5V15C21 15.5523 20.5523 16 20 16H4C3.44772 16 3 15.5523 3 15V5C3 4.44772 3.44772 4 4 4Z"
          stroke={stroke}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
}
