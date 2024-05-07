import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesConfig } from './routes.config';

export function AppRoutes() {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        {routesConfig.map((route) => (
          <Route key={route.key} path={route.path} element={route.element} />
        ))}
      </Routes>
    </React.Suspense>
  );
}

export default AppRoutes;
