import React from "react";
import StyledSectionContainer from "./Styled/StyledSectionContainer";

const WeekPlanning = () => {
  return (
    <>
      <StyledSectionContainer minheight>
        <h2>Week Planning</h2>
        <table width="200px" height="200px"></table>
        <button>Random week</button>
      </StyledSectionContainer>
    </>
  );
};

export default WeekPlanning;
