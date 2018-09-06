import reducer from './reducer';
import { epics } from './epics';

export * from './actions';
export const _books = { reducer, epics };