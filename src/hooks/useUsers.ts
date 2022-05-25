import { useMemo } from 'react';
import { IAddress, ICompany, IUser } from '../models/IUser';
import { GetNames } from '../types/types';

type Sort1Type = GetNames<IUser, string>;
interface S2 extends IAddress, ICompany {}
type Sort2Type = GetNames<S2, string> & never;

export const useSortedUsers = (
  users: IUser[],
  sort: string | undefined,
): IUser[] => {
  let sortVal1 = '';
  let sortVal2 = '';

  if (sort) {
    sortVal1 = sort.split('.')[0];
    sortVal2 = sort.split('.')[1];
  }

  const sortedUsers = useMemo(() => {
    if (sort) {
      return [...users].sort((a, b) =>
        sortVal2
          ? a[sortVal1 as Sort1Type][sortVal2 as Sort2Type].localeCompare(
              b[sortVal1 as Sort1Type][sortVal2 as Sort2Type],
            )
          : a[sortVal1 as Sort1Type].localeCompare(b[sortVal1 as Sort1Type]),
      );
    }
    return users;
  }, [sort, sortVal1, sortVal2, users]);

  return sortedUsers;
};
