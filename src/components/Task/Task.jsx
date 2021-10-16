import {
  TaskWrapper,
  StyledRemoveBtn,
  StyledText,
  StyledData,
  StyledDivTask,
} from "./Task.styles";

function Task({ todo, toggleDoneTask, removeTask }) {
  return (
    <StyledDivTask>
      <TaskWrapper key={todo.id}>
        <StyledText done={todo.done} onClick={() => toggleDoneTask(todo.id)}>
          {todo.text}
        </StyledText>

        <div>
          <StyledRemoveBtn onClick={() => removeTask(todo.id)}>
            X
          </StyledRemoveBtn>
        </div>
      </TaskWrapper>
      <StyledData> {todo.date}</StyledData>
    </StyledDivTask>
  );
}
export default Task;
