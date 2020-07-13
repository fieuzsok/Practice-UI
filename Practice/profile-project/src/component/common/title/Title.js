import React from "react";
import "./style.css";
function TitleCommon(props) {
  const { labelTitle } = props;

  return (
    <div id="title">
      <h1>{labelTitle}</h1>
    </div>
  );
}

export default TitleCommon;
