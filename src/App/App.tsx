import React from 'react';
import './App.css';
import TasksContext from '../context/TasksContext';
import TasksList from '../TasksList/TasksList';

const tasks = [
  {
    id: '84b171fb-c77f-4ff8-9115-c8a76cff41df',
    text: 'Задача №1',
    isDone: false,
  },
  {
    id: 'cacd0ec7-1a15-4897-9ed9-f05b2b224d04',
    text: 'Задача №2',
    isDone: true,
  },
  {
    id: '5c88ce4d-b98b-48c0-bff0-dfaf6719c06e',
    text: 'Задача №3',
    isDone: false,
  },
  {
    id: 'b753b439-b713-42c2-bba9-c42c049b7f5e',
    text: 'Задача №4',
    isDone: true,
  },
  {
    id: '5f18769c-55c2-4f11-9a30-8215d128cf2d',
    text: 'Задача №5',
    isDone: false,
  },
];

function App() {
  return (
    <TasksContext.Provider value={{ tasks }}>
      <div className="app">
        <div className="container d-flex flex-column align-items-start">
          <form className="row g-3">
            <div className="col-auto ">
              <label htmlFor="inputPassword2" className="visually-hidden">
                What needs to be done?
              </label>
              <input type="text" className="form-control" id="inputPassword" placeholder="What needs to be done?" />
            </div>
            <div className="col-auto">
              <button type="submit" className="add-btn btn btn-primary mb-3">
                Add
              </button>
            </div>
          </form>
          <div className="to-do-title">Todo List</div>
          <TasksList />
        </div>
      </div>
    </TasksContext.Provider>
  );
}

export default App;
