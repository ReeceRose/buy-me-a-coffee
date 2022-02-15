import { render } from '@testing-library/react';

import { CreatorLayout } from '@/layouts/CreatorLayout';

describe('Creator layout tests', () => {
  test('Layout matches snapshot', () => {
    const title = 'TestCreator';
    const { asFragment } = render(
      <CreatorLayout
        title={title}
        description="TestCreator"
        siteURL="http://localhost:3000"
      >
        <></>
      </CreatorLayout>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
