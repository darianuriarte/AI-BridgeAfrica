import React from 'react';

import {
  LandingPage,
  UpcomingProgram as UpcomingProgramView,
  AboutUs as AboutUsView,
  Project as ProjectView,
  PastProgram as PastProgramView,
  StudentStories as StudentStoriesView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <LandingPage {...params} />,
  },
  {
    path: '/upcoming-program',
    renderer: (params = {}) => <UpcomingProgramView {...params} />,
  },
  {
    path: '/project/:pageName',
    renderer: (params = {}) => <ProjectView {...params} />,
  },
  {
    path: '/about-us',
    renderer: (params = {}) => <AboutUsView {...params} />,
  },
  {
    path: '/program/:pageName',
    renderer: (params = {}) => <PastProgramView {...params} />,
  },
  {
    path: '/student-stories/:pageName',
    renderer: (params = {}) => <StudentStoriesView {...params} />,
  },
  {
    path: '/not-found',
    renderer: (params = {}) => <NotFoundView {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}) => <NotFoundCoverView {...params} />,
  },
];

export default routes;
