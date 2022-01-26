import { render } from '@testing-library/react';

import CreatorLayout from '@/layouts/Creator';

test('Creator layout matches snapshot', () => {
  const title = 'Test';
  const { asFragment } = render(
    <CreatorLayout title={title} description="test">
      <></>
    </CreatorLayout>
  );

  expect(asFragment()).toMatchSnapshot();
});
