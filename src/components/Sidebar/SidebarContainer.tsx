import React, { useContext, useState } from 'react';
import { useMatch } from 'react-router-dom';

import { SortContext } from '../../context';
import { ISort } from '../../models/ISort';
import Sidebar from './Sidebar';

const SidebarContainer: React.FC = () => {
  const sContext = useContext(SortContext);
  const match = useMatch('/');
  const [activeOption, setActiveOption] = useState('');

  const selectSort = (
    e: React.MouseEvent<HTMLButtonElement>,
    option: ISort,
  ) => {
    sContext?.setSort(option.value);
    setActiveOption(option.value);
  };

  return (
    <Sidebar
      sortOptions={sContext?.sortOptions}
      isActiveSortBlock={!match}
      selectSort={selectSort}
      activeSort={activeOption}
    />
  );
};

export default SidebarContainer;
