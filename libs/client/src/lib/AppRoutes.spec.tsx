import { render } from '@testing-library/react';

import { AppRoutes } from './AppRoutes';

describe('AppRoutes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppRoutes />);
    expect(baseElement).toBeTruthy();
  });
});
