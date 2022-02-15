import { render } from '@testing-library/react';
import { Creator } from 'lib/types/';

import { SupportCard } from '../../../components/Cards/Support';

describe('Support card tests', () => {
  const creator: Creator = {
    bannerImageUrl:
      'https://www.pngitem.com/pimgs/m/505-5058955_sample-png-images-sample-png-transparent-png.png',
    profileImageUrl:
      'https://www.pngitem.com/pimgs/m/505-5058955_sample-png-images-sample-png-transparent-png.png',
    username: 'TestUser',
    description: 'Test user is helping with tests',
    supporters: 198,
    support: {
      icon: 'Si/SiBuymeacoffee',
      item: 'coffee',
      defaults: [1, 3, 5],
      pricePerItem: 1.75,
    },
  };

  test('SupportCard matches snapshot', () => {
    const { asFragment } = render(<SupportCard creator={creator} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
