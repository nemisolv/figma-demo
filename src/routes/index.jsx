import mainRoutes from './main.route';
import authRoutes from './auth.route';

import PageNotFound from '@pages/PageNotFound';
import { useRoutes } from 'react-router-dom';

const noLayoutRoutes = [
    {
        path: '*',
        element: <PageNotFound />,
    },
    {
        path: '/404',
        element: <PageNotFound />,
    },
    ];

const Routes = () => useRoutes([authRoutes, mainRoutes, ...noLayoutRoutes]);

export default Routes;
