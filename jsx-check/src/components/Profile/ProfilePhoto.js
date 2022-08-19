import React from "react";
import Profile from "./Profile.jpg";

const ProfilePhoto = () => {
  return (
    <div>
      <h3> My Profile</h3>
      <hr></hr>
      <img
        src={Profile}
        alt="Profile"
        style={{ width: "530px", border: "50px" }}
      />
    </div>
  );
};

export default ProfilePhoto;
