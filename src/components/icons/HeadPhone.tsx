interface HeadPhoneProps {
  stroke?: string;
}

export default function HeadPhone({ stroke = "white" }: HeadPhoneProps) {
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
          d="M4 15V18C4 19.1046 4.89543 20 6 20H7C8.10457 20 9 19.1046 9 18V15C9 13.8954 8.10457 13 7 13H6C4.89543 13 4 13.8954 4 15ZM4 15V12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12L20 15M20 15C20 13.8954 19.1046 13 18 13H17C15.8954 13 15 13.8954 15 15V18C15 19.1046 15.8954 20 17 20H18C19.1046 20 20 19.1046 20 18V15Z"
          stroke={stroke}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
}
