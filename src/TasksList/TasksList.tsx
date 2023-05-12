import React, { useContext } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import AppContext from '../context/AppContext';

function TasksList() {
  const { state } = useContext(AppContext);
  const { tasks } = state;
  return (
    <ul className="to-do-list w-100">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TasksList;
