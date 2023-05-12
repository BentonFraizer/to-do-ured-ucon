import { createContext } from 'react';
import Context from '../types/Context';

const AppContext = createContext<Context>(undefined as any);

export default AppContext;
