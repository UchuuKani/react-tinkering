import React from "react";

function Subheader({age}) {
  return (
  <div>
    <h2>This is the subheader, and age props were passed down: {age}</h2>
  </div>
  );
}

export default Subheader;