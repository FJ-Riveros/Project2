import React, { useState, useEffect } from "react";
import { getUsers } from "../APICalls";
import { getIndexOfCurrentUser } from "../Utils";

const Profile = ({ currentUserEmail }) => {
  const [userProfile, setUserProfile] = useState(undefined);
  const [userIndex, setUserIndex] = useState("");
  useEffect(() => {
    const updateUsers = async () => {
      const usersDb = await getUsers();
      setUserProfile(usersDb);
      setUserIndex(await getIndexOfCurrentUser(usersDb, currentUserEmail));
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
//Cambiar el userIndex para que no crashee al inicializarse en undefined
