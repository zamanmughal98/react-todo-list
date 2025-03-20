import { FiEdit2 } from 'react-icons/fi';
import { MdOutlineDelete } from 'react-icons/md';
import { IoMdSave } from 'react-icons/io';

import TaskNotFound from './TaskNotFound';

const TasksContainer = ({
  tasksList,
  editingTaskId,
  editedTitle,
  handleToggle,
  handleEditClick,
  handleEditSave,
  handleDelete,
  handleEditChange,
}) => {
  return (
    <section className="viewTasksContainer">
      {tasksList.length === 0 && <TaskNotFound />}

      {tasksList.map(({ id, title, isCompleted }) => (
        <li
          className="viewTaskItem"
          key={id}
          style={{
            textDecoration: isCompleted ? 'line-through' : 'none',
            color: isCompleted ? 'gray' : 'black',
          }}>
          <input
            className="checkbox"
            type="checkbox"
            checked={isCompleted}
            id={id}
            onChange={handleToggle}
            disabled={editingTaskId === id}
          />
          {editingTaskId === id ? (
            <>
              <input
                type="text"
                value={editedTitle}
                onChange={handleEditChange}
                className="editInputField"
              />
              <button
                className="taskBtnPosition taskButtons"
                onClick={handleEditSave}>
                <span id={id} className="iconsWrapper">
                  Save
                  <IoMdSave />
                </span>
              </button>
            </>
          ) : (
            <>
              {id}. {title}
              <div className="taskBtnPosition">
                <button
                  className="taskButtons"
                  disabled={isCompleted}
                  onClick={handleEditClick}>
                  <span id={id} className="iconsWrapper">
                    Edit
                    <FiEdit2 />
                  </span>
                </button>

                <button className="taskButtons" onClick={handleDelete}>
                  <span id={id} className="iconsWrapper">
                    Delete
                    <MdOutlineDelete />
                  </span>
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </section>
  );
};

export default TasksContainer;
