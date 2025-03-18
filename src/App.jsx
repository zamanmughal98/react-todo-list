import './styles/App.css';
import { useState } from 'react';
import { ToDoListData } from './components/data.js';
import CreateNewTask from './components/CreateNewTask';
const App = () => {
    const [newTask, setNewTask] = useState('');
    const handleChange = (e) => setNewTask(e.target.value);

    return (
        <>
            <CreateNewTask value={newTask} onChangeHandler={handleChange} />

            <section className="viewTasksContainer">
                {ToDoListData.map(({ id, title }) => (
                    <li className="viewTaskItem" key={id}>
                        <input type="checkbox" />
                        {id} {title.toLocaleLowerCase()}
                    </li>
                ))}
            </section>
        </>
    );
};

export default App;
