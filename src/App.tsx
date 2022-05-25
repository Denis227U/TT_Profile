import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Notfoundpage from './pages/Notfoundpage/Notfoundpage';
import UsersList from './pages/UsersList/UsersList';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UsersList />} />
        <Route path="profile/:id" element={<Profile />} />

        <Route path="*" element={<Notfoundpage />} />
      </Route>
    </Routes>
  );
}

export default App;
