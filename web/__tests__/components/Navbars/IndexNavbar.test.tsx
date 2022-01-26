import { render } from '@testing-library/react';

import IndexNavbar from '@/components/Navbars/IndexNavbar';

test('Index navbar matches snapshot', () => {
  const { asFragment } = render(<IndexNavbar />);
  expect(asFragment()).toMatchSnapshot();
});
