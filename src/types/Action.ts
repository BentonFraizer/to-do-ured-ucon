import { Task, TaskId } from '../types/task';

type Action =
  | {
      type: 'TASKS_INIT';
      payload: Task[];
    }
  | {
      type: 'TASK_ADD';
      payload: Task;
    }
  | {
      type: 'TASK_DELETE';
      payload: TaskId;
    }
  | {
      type: 'TASK_CHANGE';
      payload: Task;
    };

export default Action;
