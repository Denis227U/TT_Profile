import React, { useCallback, useContext, useEffect, useState } from 'react';
import UserService from '../../API/user-service';
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
    return <div>Loading...</div>;
  }

  if (usersError) {
    return (
      <div>
        Произошла ошибка: <span style={{ color: 'crimson' }}>{usersError}</span>
      </div>
    );
  }

  return <UsersList users={sortedUsers} />;
};

export default UsersListContainer;
