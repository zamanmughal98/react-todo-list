import { FaPlus } from 'react-icons/fa';
const CreateNewTask = ({ value, onChangeHandler, onClickHandler }) => {
  return (
    <>
      <h1 className="title">React To-Do List</h1>

      <section className="createTaskContainer">
        <input
          className="inputField"
          placeholder="Enter a new task..."
          type="text"
          name="inputTask"
          value={value}
          onChange={onChangeHandler}
          aria-label="New Task Input"
        />

        <button
          className="addButton"
          type="button"
          aria-label="Add Task"
          onClick={onClickHandler}>
          <span className="iconsWrapper">
            Add <FaPlus />
          </span>
        </button>
      </section>
    </>
  );
};

export default CreateNewTask;
