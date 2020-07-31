import React from "react";
import { Link } from "react-router-dom";
import StyledFirstPage from "./Styled/StyledFirstPage";
import StyledFirstPageContainer from "./Styled/StyledFirstPageContainer";
const firstPage = () => {
  return (
    <>
      <StyledFirstPage>
        <StyledFirstPageContainer>
          <Link to="/RecipeSearch">
            <button>Recipe Search</button>
          </Link>
        </StyledFirstPageContainer>
        <StyledFirstPageContainer>
          <Link to="/WeekPlanning">
            <button>Week Planning</button>
          </Link>
        </StyledFirstPageContainer>
      </StyledFirstPage>
    </>
  );
};

export default firstPage;
