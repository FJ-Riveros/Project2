import React from "react";
import { Link } from "react-router-dom";

const firstPage = () => {
  return (
    <>
      <h1>Project 2</h1>
      <Link to="/RecipeSearch">
        <button>Recipe Search</button>
      </Link>
      <Link to="/WeekPlanning">
        <button>Week Planning</button>
      </Link>
    </>
  );
};

export default firstPage;
