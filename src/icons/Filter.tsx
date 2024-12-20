import React from "react";

interface IconProsp {
   onClick?: () => void;
   sx?: any;
}

const Filter: React.FC<IconProsp> = () => {
   return (
      <svg
         width="26"
         height="25"
         viewBox="0 0 26 25"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M24.7858 1.25H1.21436L10.6429 13.075V21.25L15.3572 23.75V13.075L24.7858 1.25Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
};

export default Filter;
