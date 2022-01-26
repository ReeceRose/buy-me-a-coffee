import { render } from '@testing-library/react';

import CreatorLayout from '@/layouts/Creator';

describe('Creator layout tests', () => {
  test('Layout matches snapshot', () => {
    const title = 'TestCreator';
    const { asFragment } = render(
      <CreatorLayout title={title} description="TestCreator">
        <></>
      </CreatorLayout>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
