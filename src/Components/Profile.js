import React from "react";

const Profile = ({ userInfo }) => {
  return (
    <>
      <h1>From Profile</h1>
      <h2>{userInfo.username}</h2>
      <h2>{userInfo.email}</h2>
    </>
  );
};
export default Profile;
