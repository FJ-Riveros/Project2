import React from "react";
import { Link } from "react-router-dom";
import StyledFirstPage from "./Styled/StyledFirstPage";
import StyledSectionContainer from "./Styled/StyledSectionContainer";
const firstPage = () => {
  return (
    <>
      <StyledSectionContainer minheight>
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
