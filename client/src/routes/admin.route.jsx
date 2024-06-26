
import AdminLayout from '@layouts/AdminLayout';
import AdminAccount from '@pages/admin/AdminAccount';
import EditAccount from '@pages/admin/EditAccount';
import { element } from 'prop-types';
import { lazy } from 'react';

const AdminHome = lazy(() => import('@pages/admin/AdminHome'));
const AdminStories = lazy(() => import('@pages/admin/AdminStories'));
const AddStory = lazy(() => import('@pages/admin/AddStory'));
const EditStory = lazy(() => import('@pages/admin/EditStory'));
const adminRoutes = {
  path: 'admin',
  element: <AdminLayout />,
  children: [

    {
      path: '',
      element: <AdminHome />,
    },
    {
      path: 'stories',
      element: <AdminStories />,
    },
    {
      path:'add-story',
      element: <AddStory/>
    },
    {
      path: 'edit-story/:id',
      element: <EditStory />,
    },

    {
      path: 'accounts',
      element: <AdminAccount />,
    },
    {
      path: 'edit-account/:id',
      element: <EditAccount />,
    }
  
  ],
};

export default adminRoutes;
