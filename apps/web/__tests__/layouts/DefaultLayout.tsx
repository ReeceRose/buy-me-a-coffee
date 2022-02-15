import { render } from '@testing-library/react';

import { DefaultLayout } from '@/layouts/DefaultLayout';

describe('Default layout tests', () => {
  test('Layout matches snapshot', () => {
    const { asFragment } = render(
      <DefaultLayout siteURL="http://localhost:3000">
        <></>
      </DefaultLayout>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
