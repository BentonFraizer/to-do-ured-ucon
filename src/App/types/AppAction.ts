import { Task } from '../../types';

type AppAction =
  | {
      type: 'TASKS_INIT';
      payload: Task[];
    }
  | {
      type: 'TASK_ADD';
      payload: Task;
    };

export default AppAction;
