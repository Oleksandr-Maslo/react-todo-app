import React, { useState } from 'react';
import { TodoList } from './components/TodoList';
import { TodosHeader } from './components/TodosHeader';
import { TodosFooter } from './components/TodosFooter';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Todo } from './types/Todo';
import { TodosFilterEnum } from './types/Filter';
import { TodosContext } from './components/TodosContext';

const filter = (type: TodosFilterEnum, toFilter: Todo[]) => {
  switch (type) {
    case TodosFilterEnum.ACTIVE:

      return toFilter.filter((item) => !item.completed);
    case TodosFilterEnum.COMPLETED:

      return toFilter.filter((item) => item.completed);
    case TodosFilterEnum.ALL:
      return toFilter;

    default: return toFilter;
  }
};

export const App: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  const [filterType, setFilterType] = useState<TodosFilterEnum>(TodosFilterEnum.ALL);
  const showFooter = todos.length > 0;

  const filteredTodos = filter(filterType, todos) || [];

  return (
    <div className="todoapp">
      <TodosContext.Provider value={{
        todos,
        filteredTodos,
        filterType,
        setTodos,
        setFilterType,
      }}
      >

        <TodosHeader />

        {showFooter && (
          <>
            <TodoList />
            <TodosFooter />
          </>
        )}

      </TodosContext.Provider>
    </div>
  );
};
