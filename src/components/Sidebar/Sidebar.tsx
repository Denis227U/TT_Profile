import React from 'react';
import { ISort } from '../../models/ISort';
import SortBlock from '../SortBlock/SortBlock';
import cl from './Sidebar.module.scss';

interface SortBlockProps {
  sortOptions?: ISort[];
  isActiveSortBlock: boolean;
  isActiveSort: string;
  selectSort: (e: React.MouseEvent<HTMLButtonElement>, option: ISort) => void;
}

const Sidebar: React.FC<SortBlockProps> = ({
  sortOptions,
  isActiveSortBlock,
  isActiveSort,
  selectSort,
}) => {
  return (
    <aside className={cl.sideBar}>
      {' '}
      {
        <SortBlock
          sortOptions={sortOptions}
          isActiveSortBlock={isActiveSortBlock}
          isActiveSort={isActiveSort}
          selectSort={selectSort}
        />
      }
    </aside>
  );
};

export default Sidebar;
