import { TodosFilterEnum } from './Filter';
import { Todo } from './Todo';

export type TodosContextProps = {
  todos: Todo[],
  filteredTodos: Todo[],
  filterType: TodosFilterEnum,
  setTodos: (newTodos: Todo[]) => void,
  setFilterType: (filter: TodosFilterEnum) => void,
};
