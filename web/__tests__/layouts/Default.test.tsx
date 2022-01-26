import { render } from '@testing-library/react';

import DefaultLayout from '@/layouts/Default';

describe('Default layout tests', () => {
  test('Layout matches snapshot', () => {
    const { asFragment } = render(
      <DefaultLayout>
        <></>
      </DefaultLayout>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
