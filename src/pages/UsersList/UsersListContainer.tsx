import React, { useCallback, useEffect, useState } from 'react';
import UserService from '../../API/user-service';
import { useFetching } from '../../hooks/useFetching';
import { IUser } from '../../models/IUser';
import UsersList from './UsersList';

const UsersListContainer: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

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

  return <UsersList users={users} />;
};

export default UsersListContainer;
