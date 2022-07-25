import { Avatar } from "@material-ui/core";
import React from "react";
import { VerifiedIcon } from "../icons";
import "./ProfileCard.css";

const ProfileCard = ({ active }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <div
      className={
        active || isVisible ? "profileDetailCard" : "profileDetailCardActive"
      }
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div>
        <Avatar src="https://www.fcbarcelonanoticias.com/uploads/s1/12/83/61/2/fc-barcelona-v-levante-ud-laliga-santander-3-1.jpeg" />
        <div>
          <span>Follow</span>
        </div>
      </div>
      <div>
        <span>Aditya</span>
        <VerifiedIcon />
      </div>
      <div>
        <span>@aditya.aks</span>
      </div>
      <div>
        <span>Software Developer</span>
      </div>
      <div>
        <span>
          <span>167</span>
          <span>Following</span>
        </span>
        <span>
          <span>167</span>
          <span>Followers</span>
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
