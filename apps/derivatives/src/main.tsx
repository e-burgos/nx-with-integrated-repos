import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { BrowserRouter } from 'react-router-dom';
import { queryClient, ReactQueryConfig } from '@membrane-webapp-mfe/queries';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ReactQueryConfig client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactQueryConfig>
  </StrictMode>
);
