import React from "react";
import "./style.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function ProfileContent(props) {
  const { label, contentValue } = props;
  return (
    <div class="detail-item">
      <ArrowForwardIosIcon classes={{ root: "MuiSvgIcon root" }} />
      <b>{label}:</b> {contentValue}
    </div>
  );
}
export default ProfileContent;
