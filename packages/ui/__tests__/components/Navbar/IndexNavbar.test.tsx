import { render } from '@testing-library/react';

import { IndexNavbar } from '../../../components/Navbars';

describe('Index navbar tests', () => {
  test('Navbar matches snapshot', () => {
    const { asFragment } = render(<IndexNavbar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
