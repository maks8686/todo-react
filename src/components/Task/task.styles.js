import styled from "styled-components";
export const StyledDivTask = styled.div`
  border: 1px solid silver;
  border-radius: 15px;
  background-color: #f0fff0;
  margin-top: 3px;
`;
export const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 15px;
  width: 400px;
`;
export const StyledRemoveBtn = styled.button`
  background-color: #ffa07a;
  border-color: #ffa07a;
  border-radius: 50%;
  padding: 3px;
`;
export const StyledText = styled.text`
  text-decoration: ${(props) => (props.done ? "line-through" : "")};
`;
export const StyledData = styled.div`
  padding: 15px;
  text-align: right;
`;
