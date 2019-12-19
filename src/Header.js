import React from "react";

function Header({name, children}) {
  return (
  <div>
    <h1>This is a header, and name props were passed down: {name}</h1>
    <h3>Also props.children</h3>
    {
      children
    }
  </div>
  );
}

export default Header;