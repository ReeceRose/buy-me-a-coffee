import { render } from '@testing-library/react';

import CreatorNavbar from '@/components/Navbars/CreatorNavbar';

describe('Creator navbar tests', () => {
  test('Creator navbar matches snapshot', () => {
    const { asFragment } = render(<CreatorNavbar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
