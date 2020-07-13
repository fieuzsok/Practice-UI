import React from "react";
import "./style.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ProfileContent from "../profile-content/ProfileContent";

function ProfileDetail(props) {
  const { profileContentLeft, profileContentRight } = props.profileContent;
  return (
    <div id="profile-detail">
      <div class="detail-block">
        <div class="detail-list">
          {profileContentLeft.map((item) => (
            <ProfileContent
              label={item.label}
              contentValue={item.contentValue}
            />
          ))}
        </div>

        <div class="detail-list">
          {profileContentRight.map((item) => (
            <ProfileContent
              label={item.label}
              contentValue={item.contentValue}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProfileDetail;
