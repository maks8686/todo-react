import styled from "styled-components";
export const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  margin-top: 3px;
  padding: 15px;
  width: 400px;
  border: 1px solid silver;
  border-radius: 15px;
  background-color: #F0FFF0;
`;
export const StyledRemoveBtn = styled.button`
  background-color: #FFA07A;
  border-color: #FFA07A;
  border-radius: 50%;
  padding: 3px;
`;
export const StyledText = styled.text`
text-decoration: ${props=> props.done ? 'line-through': ''}
`

