import { GetServerSidePropsContext } from 'next';

import { render } from '@testing-library/react';

import Creator, { getServerSideProps } from '@/pages/[creator]';
import { ParsedUrlQuery } from 'querystring';

describe('Creator page tests', () => {
  test('Page matches snapshot', () => {
    const { asFragment } = render(<Creator creator="TEST" />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('getServerSide props returns expected data', async () => {
    const context = {
      query: { creator: 'TestCreator' } as ParsedUrlQuery,
    };
    const response = await getServerSideProps(
      context as GetServerSidePropsContext
    );

    expect(response).toEqual({
      props: {
        creator: 'TestCreator',
      },
    });
  });
});
