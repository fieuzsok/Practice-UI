import React from "react";
import TitleCommon from "../common/title/Title";
import ProfileDetail from "./profile-detail/ProfileDetail";
import avatar from "../../img/avatar.jpg";
import "./style.css";

const About = (props) => {
  const defaultProps = {
    labelTitle: "About",
    aboutYourSelf:
      "Example : I graduated with my degree in Economics two months ago. I chose that field of study because I’ve always been interested in finance and money, and a couple of family members told me it leads to great career options, too.",
    role: "UI/UX designer & Web Developer",
    profileContentLeft: [
      { label: "Birthday", contentValue: "11-11-1997" },
      {
        label: "Website",
        contentValue: "xxx.com",
      },
      {
        label: "Phone",
        contentValue: "0969696969",
      },
      {
        label: "Email",
        contentValue: "conga@gmail.com",
      },
      {
        label: "City",
        contentValue: "Ho Chi Minh",
      },
      {
        label: "Email",
        contentValue: "conga@gmail.com",
      },
      {
        label: "City",
        contentValue: "Ho Chi Minh",
      },
      {
        label: "Email",
        contentValue: "conga@gmail.com",
      },
      {
        label: "City",
        contentValue: "Ho Chi Minh",
      },
    ],
    profileContentRight: [
      { label: "Birthday", contentValue: "11-11-1997" },
      {
        label: "Website",
        contentValue: "xxx.com",
      },
      {
        label: "Phone",
        contentValue: "0969696969",
      },
      {
        label: "Email",
        contentValue: "conga@gmail.com",
      },
      {
        label: "City",
        contentValue: "Ho Chi Minh",
      },
      {
        label: "Email",
        contentValue: "conga@gmail.com",
      },
      {
        label: "City",
        contentValue: "Ho Chi Minh",
      },
      {
        label: "Email",
        contentValue: "conga@gmail.com",
      },
      {
        label: "City",
        contentValue: "Ho Chi Minh",
      },
    ],
  };

  return (
    <div>
      <TitleCommon labelTitle={defaultProps.labelTitle}></TitleCommon>
      <p>{defaultProps.aboutYourSelf}</p>
      <div id="about-container">
        <div class="about-detail">
          <img class="avatar" src={avatar} />
          <div class="container">
            <h3>{defaultProps.role}</h3>
            <p>
              Example! Example! Example! Example! Example! Example! Example!
              Example! Example! Example! Example! Example! Example!
              Example!Example! Example! Example! Example! Example! Example!
              Example!Example! Example! Example! Example! Example! Example!
              Example!
            </p>
            <ProfileDetail
              profileContent={{
                profileContentLeft: defaultProps.profileContentLeft,
                profileContentRight: defaultProps.profileContentRight,
              }}
            ></ProfileDetail>
            <p>
              Example! Example! Example! Example! Example! Example! Example!
              Example! Example! Example! Example! Example! Example!
              Example!Example! Example! Example! Example! Example! Example!
              Example!Example! Example! Example! Example! Example! Example!
              Example!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
