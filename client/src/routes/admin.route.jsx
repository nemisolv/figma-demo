
import AdminLayout from '@layouts/AdminLayout';
import { lazy } from 'react';

const AdminHome = lazy(() => import('@pages/admin/Home'));
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
      path:'add-story',
      element: <AddStory/>
    },
    {
      path: 'edit-story/:id',
      element: <EditStory />,
    }
  
  ],
};

export default adminRoutes;
