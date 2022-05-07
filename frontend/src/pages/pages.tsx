import React from 'react';
import { lazy, ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ScrollToTop } from '../components/route/scroll-to-top';
import { ROUTES } from '../utils/routes';
import Signup from './signup';
import { PageLayout } from '../components/page-layout';
import { PlaceHolderLoading } from '../components/placeholder-loading';
import { Page404 } from './404';

const Dashboard = lazy(() => import('./dashboard'));

export const Pages = (): ReactElement => {
  return (
    <div className="h-screen w-screen">
      <Router>
        <ScrollToTop />
        <PageLayout>
          <Routes>
            <Route path="*" element={<Page404 />} />
            <Route path={ROUTES.home} element={<Signup />} />
            <Route path={ROUTES.signup} element={<Signup />} />
            <Route
              path={ROUTES.dashboard}
              element={
                <React.Suspense
                  fallback={<PlaceHolderLoading className="h-2 w-72" />}
                >
                  <Dashboard />
                </React.Suspense>
              }
            />
          </Routes>
        </PageLayout>
      </Router>
    </div>
  );
};
