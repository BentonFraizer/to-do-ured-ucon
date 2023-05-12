import React, { useEffect, useReducer, useState } from 'react';
import './App.css';
import AppContext from '../context/AppContext';
import TasksList from '../TasksList/TasksList';
import { State } from '../types/index';
import reducer from '../reducer/reducer';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const initialState: State = {
    tasks: [],
  };

  const [taskTitle, setTaskTitle] = useState('');

  const handleTitleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(evt.target.value);
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Первоначальная инициализация массива задач. Получены из интернета.
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        dispatch({ type: 'TASKS_INIT', payload: json });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Добавление задачи
  const handleSubmit = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault();
    const newTask = {
      userId: '1',
      id: uuidv4(),
      title: taskTitle,
      completed: false,
    };
    dispatch({ type: 'TASK_ADD', payload: newTask });
    setTaskTitle('');
  };

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="app">
        <div className="container d-flex flex-column align-items-start">
          <form className="row g-3">
            <div className="col-auto ">
              <label htmlFor="inputPassword2" className="visually-hidden">
                What needs to be done?
              </label>
              <input type="text" className="form-control" id="inputPassword" placeholder="What needs to be done?" value={taskTitle} onChange={(evt) => handleTitleChange(evt)} />
            </div>
            <div className="col-auto">
              <button type="submit" className="add-btn btn btn-primary mb-3" onClick={(evt) => handleSubmit(evt)}>
                Add
              </button>
            </div>
          </form>
          <div className="to-do-title">Todo List</div>
          {state.tasks.length === 0 ? <h2>Загрузка...</h2> : <TasksList />}
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
