import React, { useState } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Notfoundpage from './pages/Notfoundpage/Notfoundpage';
import Profile from './pages/Profile/Profile';
import UsersListContainer from './pages/UsersList/UsersListContainer';
import { SortContext } from './context';

function App() {
  const [sort, setSort] = useState('');

  const sortOptions = [
    { name: 'по городу', value: 'address.city' },
    { name: 'по компании', value: 'company.name' },
    { name: 'по имени', value: 'name' },
  ];

  return (
    <SortContext.Provider value={{ sort, setSort, sortOptions }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UsersListContainer />} />
          <Route path="profile/:id" element={<Profile />} />

          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </SortContext.Provider>
  );
}

export default App;
