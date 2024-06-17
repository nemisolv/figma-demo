import Header from './common/Header';
import Footer from './common/Footer';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div>
      <Header />
      <main className='px-4 mx-auto mt-[80px] mb-[80px]'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
