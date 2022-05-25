import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';

const Layout = () => {
  return (
    <div className="app-wrapper">
      <Sidebar />

      <main className="app-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
