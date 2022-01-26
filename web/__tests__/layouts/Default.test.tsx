import { render } from '@testing-library/react';

import DefaultLayout from '@/layouts/Default';

test('Default layout matches snapshot', () => {
  const { asFragment } = render(
    <DefaultLayout>
      <></>
    </DefaultLayout>
  );
  expect(asFragment()).toMatchSnapshot();
});
