import React, { useContext } from 'react';
import { Task } from '../types';
import TaskItem from '../TaskItem/TaskItem';
import TasksContext from '../context/TasksContext';

function TasksList() {
  const { tasks } = useContext(TasksContext);
  return (
    <ul className="to-do-list w-100">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TasksList;
