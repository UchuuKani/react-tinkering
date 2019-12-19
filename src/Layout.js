import React from "react";

const styles = {
  display: "flex"
}

const color = {
  color: "blue"
}

function Layout({left, right}) {
  return (
  <div style={styles}>
    {left}
    <h2 style={color}>This is the Layout, and a LeftSlot and RightSlot component are passed down as props</h2>
    {right}
  </div>
  );
}

export default Layout;