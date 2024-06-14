import React from "react";
import "./preview.css";

const Repos = ({ repos, header }) => {
  return (
    <h1>
      {repos}({header});
    </h1>
  );
};

export default Repos;
