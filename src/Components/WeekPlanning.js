import React from "react";
import StyledSectionContainer from "./Styled/StyledSectionContainer";
import { HomeButton } from "../Utils";
const WeekPlanning = () => {
  return (
    <>
      <StyledSectionContainer minheight>
        <h2>Week Planning</h2>
        <table width="200px" height="200px"></table>
        <button>Random week</button>
      </StyledSectionContainer>
      <HomeButton />
    </>
  );
};

export default WeekPlanning;
