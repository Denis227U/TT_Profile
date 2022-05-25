import React, { useCallback, useContext, useEffect, useState } from 'react';
import UserService from '../../API/user-service';
import Error from '../../components/Error/Error';
import Preloader, {
  PreloaderColor,
} from '../../components/UI/preloader/Preloader';
import { SortContext } from '../../context';
import { useFetching } from '../../hooks/useFetching';
import { useSortedUsers } from '../../hooks/useUsers';
import { IUser } from '../../models/IUser';
import UsersList from './UsersList';

const UsersListContainer: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const sContext = useContext(SortContext);
  const sortedUsers = useSortedUsers(users, sContext?.sort);

  const fetchUsersCb = useCallback(async () => {
    const data = await UserService.getAll();
    setUsers([...data]);
  }, []);

  const {
    fetching: fetchUsers,
    isLoading: isUsersLoading,
    error: usersError,
  } = useFetching(fetchUsersCb);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (isUsersLoading) {
    return <Preloader color={PreloaderColor.secondary} />;
  }

  if (usersError) {
    return <Error error={usersError} />;
  }

  return <UsersList users={sortedUsers} />;
};

export default UsersListContainer;
