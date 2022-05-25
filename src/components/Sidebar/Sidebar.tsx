import React from 'react';
import { ISort } from '../../models/ISort';
import SortBlock from '../SortBlock/SortBlock';
import cl from './Sidebar.module.scss';

interface SortBlockProps {
  sortOptions?: ISort[];
  isActiveSortBlock: boolean;
  activeSort: string;
  selectSort: (e: React.MouseEvent<HTMLButtonElement>, option: ISort) => void;
}

const Sidebar: React.FC<SortBlockProps> = ({
  sortOptions,
  isActiveSortBlock,
  activeSort,
  selectSort,
}) => {
  return (
    <aside className={cl.sideBar}>
      {
        <SortBlock
          sortOptions={sortOptions}
          isActiveSortBlock={isActiveSortBlock}
          activeSort={activeSort}
          selectSort={selectSort}
        />
      }
    </aside>
  );
};

export default Sidebar;
