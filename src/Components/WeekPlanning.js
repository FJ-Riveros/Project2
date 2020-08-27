import React, { useState } from "react";
import StyledSectionContainer from "./Styled/StyledSectionContainer";
import { HomeButton } from "../Utils";
import StyledGrid from "./Styled/StyledWeekPlanning";
import MediaQuery from "react-responsive";

const WeekPlanning = () => {
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 799px" });
  const [isMobile, setIsMobile] = useState(true);
  const handleMediaQueryChange = (matches) => {
    console.log(matches);
    //   matches ? setIsMobile(true) : setIsMobile(false);
  };
  return (
    <>
      <StyledSectionContainer minheight>
        <MediaQuery minDeviceWidth={800} onChange={handleMediaQueryChange}>
          <h2>Week Planning</h2>
          {isMobile ? console.log("Si es movil") : console.log("No lo es")}
          <StyledGrid>
            <div className="grid-item-colum-header"></div>
            <div className="grid-item-colum-header">Monday</div>
            <div className="grid-item-colum-header">Tuesday</div>
            <div className="grid-item-colum-header">Wednesday</div>
            <div className="grid-item-colum-header">Thursday</div>
            <div className="grid-item-colum-header">Friday</div>
            <div className="grid-item-colum-header">Saturday</div>
            <div className="grid-item-colum-header">Sunday</div>
            <div className="grid-item-colum-row-header">Breakfast</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-colum-row-header">Lunch</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-colum-row-header">Snack</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-colum-row-header">Dinner</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
            <div className="grid-item-row">1</div>
          </StyledGrid>
          <button>Random week</button>
        </MediaQuery>
      </StyledSectionContainer>
      <HomeButton />
    </>
  );
};

export default WeekPlanning;
