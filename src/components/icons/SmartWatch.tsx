interface SmartWatchProps {
  fill?: string;
}

export default function SmartWatch({ fill = "white" }: SmartWatchProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9 7C7.89543 7 7 7.89543 7 9V15C7 16.1046 7.89543 17 9 17H15C16.1046 17 17 16.1046 17 15V9C17 7.89543 16.1046 7 15 7H9ZM5 9C5 6.79086 6.79086 5 9 5H15C17.2091 5 19 6.79086 19 9V15C19 17.2091 17.2091 19 15 19H9C6.79086 19 5 17.2091 5 15V9Z"
        fill={fill}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9 17C9.55228 17 10 17.4477 10 18V20H14V18C14 17.4477 14.4477 17 15 17C15.5523 17 16 17.4477 16 18V21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21V18C8 17.4477 8.44772 17 9 17Z"
        fill={fill}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3V6C16 6.55228 15.5523 7 15 7C14.4477 7 14 6.55228 14 6V4H10V6C10 6.55228 9.55228 7 9 7C8.44772 7 8 6.55228 8 6V3Z"
        fill={fill}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.3571 8.5C10.6332 8.5 10.8571 8.72386 10.8571 9V14.5C10.8571 14.7761 10.6332 15 10.3571 15C10.0809 15 9.85706 14.7761 9.85706 14.5V9C9.85706 8.72386 10.0809 8.5 10.3571 8.5Z"
        fill={fill}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.3571 11C12.6332 11 12.8571 11.2239 12.8571 11.5V14.5C12.8571 14.7761 12.6332 15 12.3571 15C12.0809 15 11.8571 14.7761 11.8571 14.5V11.5C11.8571 11.2239 12.0809 11 12.3571 11Z"
        fill={fill}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.3571 10C14.6332 10 14.8571 10.2239 14.8571 10.5V14.5C14.8571 14.7761 14.6332 15 14.3571 15C14.0809 15 13.8571 14.7761 13.8571 14.5V10.5C13.8571 10.2239 14.0809 10 14.3571 10Z"
        fill={fill}
      />
    </svg>
  );
}
