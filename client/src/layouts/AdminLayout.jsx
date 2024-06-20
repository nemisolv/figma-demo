import Footer from './common/Footer';
import { Outlet, useNavigate } from 'react-router-dom';
import Menu from '@components/menu';
import { useEffect, useState } from 'react';

function AdminLayout() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
    // check if refresh token is expired
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')));
    } else {
      setUser(null);
      navigate('/auth/login');
    }
  }, []);


  return (
    <div>
      {/* <Header /> */}
      <main className="flex justify-between px-4 mx-auto mb-[20px]">
        <div className="min-w-[300px]">
          <Menu></Menu>
        </div>
        <div className='flex-1 '><Outlet /></div>
      </main>
      <Footer />
    </div>
  );
}

export default AdminLayout;
