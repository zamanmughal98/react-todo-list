import './styles/App.css';
import { useState } from 'react';

import { ToDoListData } from './components/data.js';
import CreateNewTask from './components/CreateNewTask';
import TasksContainer from './components/TasksContainer.jsx';

const App = () => {
  const [newTask, setNewTask] = useState('');
  const [tasksList, setTasksList] = useState(ToDoListData);

  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');

  const taskOnChangeHandler = (e) => setNewTask(e.target.value);

  const addTaskHandler = () => {
    if (!newTask.trim()) {
      alert('Task cannot be empty!');
      return;
    }

    const isDuplicate = tasksList.some(
      (task) =>
        task.title.toLowerCase().trim() === newTask.toLowerCase().trim(),
    );

    if (isDuplicate) {
      alert('Task already exists!');
      return;
    }

    const newTaskObj = {
      id: tasksList[tasksList.length - 1]?.id + 1,
      title: newTask.trim(),
      isCompleted: false,
    };

    setTasksList([...tasksList, newTaskObj]);
    setNewTask('');
  };

  const handleToggle = (e) => {
    const id = parseInt(e.target.id);

    const updatedTasks = tasksList.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
    );
    setTasksList(updatedTasks);
  };

  const handleDelete = (e) => {
    const id = parseInt(e.target.id);
    const updatedTasks = tasksList.filter((task) => task.id !== id);
    setTasksList(updatedTasks);
  };

  const handleEditClick = (e) => {
    const id = parseInt(e.target.id);
    const currentTitle = tasksList.find((item) => item.id === id)?.title;

    setEditingTaskId(parseInt(id));
    setEditedTitle(currentTitle);
  };

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleEditSave = (e) => {
    const id = parseInt(e.target.id);

    if (!editedTitle.trim()) {
      alert('Task cannot be empty!');
      return;
    }
    const updatedTasks = tasksList.map((task) =>
      task.id === id ? { ...task, title: editedTitle.trim() } : task,
    );

    setTasksList(updatedTasks);
    setEditingTaskId(null);
    setEditedTitle('');
  };

  return (
    <>
      <CreateNewTask
        value={newTask}
        onChangeHandler={taskOnChangeHandler}
        onClickHandler={addTaskHandler}
      />

      <TasksContainer
        tasksList={tasksList}
        editingTaskId={editingTaskId}
        editedTitle={editedTitle}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        handleEditClick={handleEditClick}
        handleEditChange={handleEditChange}
        handleEditSave={handleEditSave}
      />
    </>
  );
};

export default App;
