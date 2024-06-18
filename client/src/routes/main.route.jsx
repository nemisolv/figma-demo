import MainLayout from '@layouts/MainLayout';
import { lazy } from 'react';

const Home = lazy(() => import('@pages/Home'));
const StoryPreview = lazy(() => import('@pages/StoryPreview'));
const StoryPreviewChapter = lazy(() => import('@pages/StoryPreviewChapter'));
const mainRoutes = {
  path: '',
  element: <MainLayout />,
  children: [
    {
      path: '',
      element: <Home />,
    },
    {
      path: 'stories/preview/:id',
      element: <StoryPreview />,
    },
    {
      path: 'stories/preview-chapter/:id',
      element: <StoryPreviewChapter />,
    },
  ],
};

export default mainRoutes;
