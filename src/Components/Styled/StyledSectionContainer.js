import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  border-radius: 1.5rem;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.2);
  margin: 40px 0 40px 0;
  min-height: ${(props) => (props.minheight ? "70vh" : "none")};
  table {
    border: 2px solid black;
  }
`;
