import { SVGProps } from "react";

const BackgroundTop = (props: SVGProps<SVGElement>) => (
  <svg
    width="1440" 
    height="929" 
    viewBox="0 0 1440 929" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    preserveAspectRatio={props.preserveAspectRatio}
  >
    <path d="M0 0H1440V929C1440 929 1247 896 720 896C193 896 0 929 0 929V0Z" fill="#170D1D"/>
  </svg>
);

export default BackgroundTop;