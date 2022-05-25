import { Outlet } from 'react-router-dom';
import SidebarContainer from './Sidebar/SidebarContainer';

const Layout = () => {
  return (
    <div className="app-wrapper">
      <SidebarContainer />

      <main className="app-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
