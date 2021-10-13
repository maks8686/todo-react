import { TaskWrapper, StyledRemoveBtn, StyledText } from "./task.styles";

function Task({ todo, toggleDoneTask, removeTask }) {
  return (
    <TaskWrapper key={todo.id}>
      <StyledText done={todo.done} onClick={() => toggleDoneTask(todo.id)}>
        {todo.text}
      </StyledText>
      <div>
        <StyledRemoveBtn onClick={() => removeTask(todo.id)}>X</StyledRemoveBtn>
      </div>
    </TaskWrapper>
  );
}
export default Task;
