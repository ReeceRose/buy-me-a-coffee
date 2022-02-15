import { GetServerSidePropsContext } from 'next';

import { render } from '@testing-library/react';

import Creator, { getServerSideProps } from '@/pages/[creator]';
import { ParsedUrlQuery } from 'querystring';
import { Creator as CreatorType } from 'lib/types';

describe('Creator page tests', () => {
  const creator: CreatorType = {
    username: 'TestUser',
    description: 'is a test user',
    wallet: 'BiofzXP2MXVFBtMeT5zmoDGkfUTkpHutAbCUkzKW2mxj',
    bannerImageUrl:
      'https://t3.ftcdn.net/jpg/02/68/48/86/360_F_268488616_wcoB2JnGbOD2u3bpn2GPmu0KJQ4Ah66T.jpg',
    profileImageUrl:
      'https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png',
    supporters: 198,
    support: {
      icon: 'Si/SiBuymeacoffee',
      defaults: [1, 3, 5],
      item: 'coffee',
      pricePerItem: 1.75,
    },
  };

  test('Page matches snapshot', () => {
    const { asFragment } = render(<Creator creator={creator} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('getServerSide props returns expected data', async () => {
    const context = {
      query: { creator: 'TestUser' } as ParsedUrlQuery,
    };

    const response = await getServerSideProps(
      context as GetServerSidePropsContext
    );

    // TODO: mock API to return data
    expect(response).toEqual({
      props: {
        creator: creator,
      },
    });
  });
});
