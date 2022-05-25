import React from 'react';
import { ISort } from '../../models/ISort';
import MainButton from '../UI/button/MainButton';
import cl from './SortBlock.module.scss';

interface SortBlockProps {
  sortOptions?: ISort[];
  isActiveSortBlock: boolean;
  isActiveSort: string;
  selectSort: (e: React.MouseEvent<HTMLButtonElement>, option: ISort) => void;
}

const SortBlock: React.FC<SortBlockProps> = ({
  sortOptions,
  isActiveSortBlock,
  isActiveSort,
  selectSort,
}) => {
  return (
    <div className={cl.sortBlock}>
      <div className={cl.sortTitle}>Сортировка</div>
      <div className={cl.sortTags}>
        {sortOptions &&
          sortOptions.map((option) => (
            <div className={cl.sortTag} key={option.value}>
              <MainButton onClick={(e) => selectSort(e, option)}>
                {option.name}
              </MainButton>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SortBlock;
