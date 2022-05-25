import React from 'react';
import { Link } from 'react-router-dom';
import { IAddress, ICompany } from '../../models/IUser';

import cl from './User.module.scss';

interface UserProps {
  id: number;
  name: string;
  address: IAddress;
  company: ICompany;
}

const User: React.FC<UserProps> = ({ id, name, address, company }) => {
  return (
    <li className={cl.user}>
      <div className={cl.userBlock}>
        <div className={cl.userInfo}>
          <span className={cl.userInfoLabel}>ФИО</span>
          <span className={cl.userInfoValue}>{name}</span>
        </div>
        <div className={cl.userInfo}>
          <span className={cl.userInfoLabel}>город</span>
          <span className={cl.userInfoValue}>{address.city}</span>
        </div>
        <div className={cl.userInfo}>
          <span className={cl.userInfoLabel}>компания</span>
          <span className={cl.userInfoValue}>{company.name}</span>
        </div>
      </div>

      <Link to={`profile/${id}`} className={cl.userLink}>
        Подробнее
      </Link>
    </li>
  );
};

export default User;
