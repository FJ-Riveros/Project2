import React, { useState, useEffect } from "react";
import { getUsers } from "../APICalls";

const Profile = ({ userIndex }) => {
  const [userProfile, setUserProfile] = useState(undefined);

  useEffect(() => {
    const updateUsers = async () => {
      setUserProfile(await getUsers());
    };
    updateUsers();
  }, []);

  return (
    <>
      <h1>From Profile</h1>
      <h2>{userProfile !== undefined && userProfile[userIndex].username}</h2>
    </>
  );
};

export default Profile;
