import Header from './common/Header';
import Footer from './common/Footer';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div>
      <Header />
      <main className='max-w-[1250px] mx-auto mt-[56px]'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
