import React from "react";

const Chips = ({ children, backgroundColor, textColor }) => (
  <span
    style={{
      backgroundColor: backgroundColor,
      borderRadius: '5px',
      color: textColor,
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

export default Chips;