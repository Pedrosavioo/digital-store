import React from "react";
import "./Button.css";

interface IButtonProps {
   width?: string;
   content: string;
   type: "primary" | "secondary";
}

const Button: React.FC<IButtonProps> = ({ width, content, type }) => {
   return (
      <button style={{ width: `${width ? width : 'fit-content'}` }} className={`${type} btn`}>
         {content}
      </button>
   );
};

export default Button;
