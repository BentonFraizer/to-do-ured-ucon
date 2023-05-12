import { createContext } from 'react';
import { Task } from '../types';

type TasksContextType = {
  tasks: Task[] | [];
};

const initialContext = {
  tasks: [],
};

const TasksContext = createContext<TasksContextType>(initialContext);

export default TasksContext;
