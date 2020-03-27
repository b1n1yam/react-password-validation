import React from "react";

export default function Line({ color, label }) {
  const Styles = {
    line: {
      width: 80,
      height: 7,
      background: color,
      borderRadius: 25,
      marginRight: 7,
      marginBottom: 10
    },
    lable: {
      lineHeight: 3
    }
  };
  return (
    <div style={Styles.line}>
      <span style={Styles.lable}>&nbsp;</span>
      <small>{label}</small>
    </div>
  );
}
