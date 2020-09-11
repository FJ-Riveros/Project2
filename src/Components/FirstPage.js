import React from "react";
import { Link } from "react-router-dom";
import StyledFirstPage from "./Styled/StyledFirstPage";
import StyledFirstPageContainer from "./Styled/StyledFirstPageContainer";
const firstPage = (userLogged) => {
  console.log(userLogged);
  const disabledWeekPlanning = () => {
    if (userLogged.userLogged) {
      return false;
    } else {
      return true;
    }
  };
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
            <button disabled={disabledWeekPlanning()}>Week Planning</button>
          </Link>
        </StyledFirstPageContainer>
      </StyledFirstPage>
    </>
  );
};

export default firstPage;
