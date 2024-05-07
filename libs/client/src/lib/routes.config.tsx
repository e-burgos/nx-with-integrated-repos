import {
  Dashboard,
  Loans,
  Trades,
  Derivatives,
  Collateral,
  Settlements,
  Counterparties,
  Settings,
  Session,
} from './entry-points';

export const routesConfig = [
  {
    key: 'home',
    path: '/',
    element: <Dashboard />,
  },
  {
    key: 'dashboard',
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    key: 'trades',
    path: '/trades',
    element: <Trades />,
  },
  {
    key: 'loans',
    path: '/loans',
    element: <Loans />,
  },
  {
    key: 'derivatives',
    path: '/derivatives',
    element: <Derivatives />,
  },
  {
    key: 'collateral',
    path: '/collateral',
    element: <Collateral />,
  },
  {
    key: 'settlements',
    path: '/settlements',
    element: <Settlements />,
  },
  {
    key: 'counterparties',
    path: '/counterparties',
    element: <Counterparties />,
  },
  {
    key: 'settings',
    path: '/settings',
    element: <Settings />,
  },
  {
    key: 'session',
    path: '/session',
    element: <Session />,
  },
];
