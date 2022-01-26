import { render } from '@testing-library/react';

import Creator from '@/pages/[creator]';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/test',
      pathname: '',
      query: {
        creator: 'TEST',
      },
      asPath: '',
    };
  },
}));

test('Creator page matches snapshot', () => {
  const { asFragment } = render(<Creator />);

  expect(asFragment()).toMatchSnapshot();
});
