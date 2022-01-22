import styled from "styled-components";


const TaskForm = styled.form`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
`;

const TaskInput = styled.input`
  width: 78.03%;
  height: 100%;
  max-width: 476px;
  border: 1px solid #BDBDBD;
  border-radius: 12px;
  padding: 0 12px;
  outline: 0;

  /* Font Layout */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #000000;

  &::placeholder {
    /* Font Layout */
    font-family: "Montserrat";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #828282;
  }
`;

const TaskSubmitBtn = styled.input`
  width: 17.87%;
  height: 100%;
  max-width: 109px;
  background: #2F80ED;
  box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
  border: 0;
  border-radius: 12px;
  cursor: pointer;

  /* Font Layout */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
`;

export default function TaskFunc( props ) {
  const {
    input, handleAddTodo, handleChange
  } = props;

  return (
    <>
      <TaskForm onSubmit={ handleAddTodo }>
        <TaskInput
          type="text"
          placeholder="add details"
          value={ input }
          onChange={ handleChange }
        />
        <TaskSubmitBtn type="button" value="Add"
          onClick={ handleAddTodo }
        />
      </TaskForm>
    </>
  )
}