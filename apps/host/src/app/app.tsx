import React from 'react';
import { AppRoutes } from '@membrane-webapp-mfe/client';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <AppRoutes />
    </React.Suspense>
  );
}

export default App;
