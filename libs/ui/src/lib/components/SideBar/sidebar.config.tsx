import {
  Dashboard,
  CorporateFare,
  CreditScore,
  Moving,
  MultipleStop,
  CurrencyExchange,
  People,
  Settings,
} from '@mui/icons-material';

export const SidebarConfig = [
  {
    text: 'Dashboard',
    icon: <Dashboard />,
    path: '/dashboard',
  },
  {
    text: 'Trades',
    icon: <CorporateFare />,
    path: '/trades',
  },
  {
    text: 'Loans',
    icon: <CreditScore />,
    path: '/loans',
  },
  {
    text: 'Derivatives',
    icon: <MultipleStop />,
    path: '/derivatives',
  },
  {
    text: 'Collateral',
    icon: <Moving />,
    path: '/collateral',
  },
  {
    text: 'Settlements',
    icon: <CurrencyExchange />,
    path: '/settlements',
  },
  {
    text: 'Counterparties',
    icon: <People />,
    path: '/counterparties',
  },
  {
    text: 'Settings',
    icon: <Settings />,
    path: '/settings',
  },
];
