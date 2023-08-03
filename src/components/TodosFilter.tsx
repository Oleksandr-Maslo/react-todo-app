import React, { useContext } from 'react';
import { TodosFilterEnum } from '../types/Filter';
import { TodosContext } from './TodosContext';

export const TodosFilter: React.FC = () => {
  const { filterType, setFilterType } = useContext(TodosContext);
  const makeSetFilterType = (type: TodosFilterEnum) => (
    () => setFilterType(type));

  return (
    <ul className="filters" data-cy="todosFilter">
      <li>
        <a
          href="#/"
          className={filterType === TodosFilterEnum.ALL ? 'selected' : ''}
          onClick={makeSetFilterType(TodosFilterEnum.ALL)}
        >
          All
        </a>
      </li>

      <li>
        <a
          href="#/active"
          className={filterType === TodosFilterEnum.ACTIVE ? 'selected' : ''}
          onClick={makeSetFilterType(TodosFilterEnum.ACTIVE)}
        >
          Active
        </a>
      </li>

      <li>
        <a
          href="#/completed"
          className={filterType === TodosFilterEnum.COMPLETED ? 'selected' : ''}
          onClick={makeSetFilterType(TodosFilterEnum.COMPLETED)}
        >
          Completed
        </a>
      </li>
    </ul>
  );
};
