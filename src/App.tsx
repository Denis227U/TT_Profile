import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Notfoundpage from './pages/Notfoundpage/Notfoundpage';
import Profile from './pages/Profile/Profile';
import UsersListContainer from './pages/UsersList/UsersListContainer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UsersListContainer />} />
        <Route path="profile/:id" element={<Profile />} />

        <Route path="*" element={<Notfoundpage />} />
      </Route>
    </Routes>
  );
}

export default App;
