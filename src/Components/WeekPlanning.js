import React from "react";
import StyledSectionContainer from "./Styled/StyledSectionContainer";
import { HomeButton } from "../Utils";
import StyledGrid from "./Styled/StyledWeekPlanning";
import JupiterCollapsibleMenuStyle from "./GatsbyCollapSable";
import StyledCollapsible from "./Styled/StyledWeekPlanCollapsible";
import { useMediaQuery } from "react-responsive";
import WeekCalendar from "./Calendar";

const WeekPlanning = () => {
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 799 });
    return isMobile ? children : null;
  };

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 800 });
    return isDesktop ? children : null;
  };
  return (
    <>
      <StyledSectionContainer minheight>
        <Desktop>
          <h2>Week Planning</h2>
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
          <WeekCalendar />
        </Desktop>
        <Mobile>
          <h2>Week Planning</h2>
          <StyledCollapsible>
            <JupiterCollapsibleMenuStyle></JupiterCollapsibleMenuStyle>
          </StyledCollapsible>
        </Mobile>
        <button disabled={true}>Random week</button>
      </StyledSectionContainer>
      <HomeButton />
    </>
  );
};

export default WeekPlanning;
