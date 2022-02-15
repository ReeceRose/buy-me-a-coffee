import { render } from '@testing-library/react';
import { Creator } from 'lib/types/';

import { CreatorHeader } from '../../../components/Headers/Creator';

describe('Creator headbar tests', () => {
  const creator: Creator = {
    bannerImageUrl:
      'https://www.pngitem.com/pimgs/m/505-5058955_sample-png-images-sample-png-transparent-png.png',
    profileImageUrl:
      'https://www.pngitem.com/pimgs/m/505-5058955_sample-png-images-sample-png-transparent-png.png',
    username: 'TestUser',
    wallet: '123',
    description: 'Test user is helping with tests',
    supporters: 198,
    support: {
      icon: 'Si/SiBuymeacoffee',
      item: 'coffee',
      defaults: [1, 3, 5],
      pricePerItem: 1.75,
    },
  };

  test('Headbar matches snapshot', () => {
    const { asFragment } = render(<CreatorHeader creator={creator} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
