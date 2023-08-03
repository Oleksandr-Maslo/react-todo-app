import React from 'react';
import { TodosContextProps } from '../types/TodosContextProps';
import { TodosFilterEnum } from '../types/Filter';

export const TodosContext = React.createContext<TodosContextProps>({
  todos: [],
  filteredTodos: [],
  filterType: TodosFilterEnum.ALL,
  setTodos: () => {},
  setFilterType: () => {},
});
