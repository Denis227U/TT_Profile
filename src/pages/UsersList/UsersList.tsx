import React from 'react';
import User from '../../components/User/User';
import { IUser } from '../../models/IUser';
import cl from './UsersList.module.scss';

interface UsersListProps {
  users: IUser[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div>
      <h2>Список пользователей</h2>

      <ul className={cl.usersList}>
        {users && users.map((user) => <User key={user.id} {...user} />)}
      </ul>

      <div className={cl.usersCount}>Найдено {users.length} пользователей</div>
    </div>
  );
};

export default UsersList;
