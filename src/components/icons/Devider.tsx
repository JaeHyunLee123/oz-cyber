interface DeviderProps {
  stroke?: string;
}

export default function Devider({ stroke = "white" }: DeviderProps) {
  return (
    <svg
      width="2"
      height="24"
      viewBox="0 0 2 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        opacity="0.2"
        x1="1"
        y1="2.18557e-08"
        x2="0.999999"
        y2="24"
        stroke={stroke}
      />
    </svg>
  );
}
