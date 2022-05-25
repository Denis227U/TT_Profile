import { createContext } from 'react';
import { ISort } from '../models/ISort';

export interface ISortContext {
  sortOptions: ISort[];
  sort: string;
  setSort: (sort: string) => void;
}

export const SortContext = createContext<ISortContext | null>(null);
