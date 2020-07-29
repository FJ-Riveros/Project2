import React from "react";
import { Link } from "react-router-dom";
import StyledFirstPage from "./Styled/StyledFirstPage";
import StyledSectionContainer from "./Styled/StyledSectionContainer";
const firstPage = () => {
  return (
    <>
      <StyledSectionContainer minheight>
        <h1>Project 2</h1>
        <StyledFirstPage>
          <Link to="/RecipeSearch">
            <button>Recipe Search</button>
          </Link>
          <Link to="/WeekPlanning">
            <button>Week Planning</button>
          </Link>
        </StyledFirstPage>
      </StyledSectionContainer>
    </>
  );
};

export default firstPage;
