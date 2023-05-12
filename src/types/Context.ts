import { Dispatch } from 'react';
import State from './State';
import Action from './Action';

type Context = {
  state: State;
  dispatch: Dispatch<Action>;
};

export default Context;
