import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: ${(props) => (props.minheight ? "70vh" : "none")};
  table {
    border: 2px solid black;
  }
`;
