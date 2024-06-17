import { Suspense } from 'react';
import Routes from './routes';
import Loader from '@components/Loader';
import ScrollToTop from '@components/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ScrollToTop>
        <Routes />
        <ToastContainer autoClose={2000} style={{ padding: '20px' }} />
      </ScrollToTop>
    </Suspense>
  );
}

export default App;
