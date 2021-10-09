import React, { useState } from "react";

const Button = ({
  children,
  label,
  link,
  borderColor,
  bgColor,
  textColor,
  onClick,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        margin: "1rem",
        padding: "1rem 3rem",
        border: `3px solid ${borderColor}`,
        backgroundColor: bgColor,
        color: textColor,
        transform: hover && "scale(105%)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a
        href={link}
        onClick={onClick}
        style={{
          textDecoration: "none",
        }}
      >
        {label || children}
      </a>
    </div>
  );
};

export default Button;
