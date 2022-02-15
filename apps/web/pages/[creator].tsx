import { GetServerSideProps } from 'next';

import { CreatorProps } from 'lib/types/props';
import { Creator } from 'lib/types/';
import { CreatorLayout } from '@/layouts/CreatorLayout';
import { CreatorHeader } from 'ui/components/Headers/';
import { SupportCardWrapper } from '@/components/Cards/Support';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const username = context.query.creator as string;

  // TODO: pull creator info from API
  const creator: Creator = {
    username: username,
    description: 'is a test user',
    wallet: 'BiofzXP2MXVFBtMeT5zmoDGkfUTkpHutAbCUkzKW2mxj',
    bannerImageUrl:
      'https://t3.ftcdn.net/jpg/02/68/48/86/360_F_268488616_wcoB2JnGbOD2u3bpn2GPmu0KJQ4Ah66T.jpg',
    profileImageUrl:
      'https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png',
    supporters: 198,
    support: {
      icon: 'Si/SiBuymeacoffee',
      item: 'coffee',
      defaults: [1, 3, 5],
      pricePerItem: 1.75,
    },
  };
  return {
    props: {
      creator: creator,
    },
  };
};

export default function CreatorPage({ creator }: CreatorProps): JSX.Element {
  return (
    <CreatorLayout
      title={creator.username}
      description={creator.description}
      siteURL={process.env.SITE_URL || 'http://localhost:3000'}
    >
      <div className="flex items-center content-center justify-center min-w-full">
        <div className="container min-w-full mx-auto">
          <div className="flex flex-wrap items-center">
            <CreatorHeader creator={creator} />
            {/* <p>test</p> */}
            <div className="w-full border-b border-gray-200"></div>
            <SupportCardWrapper creator={creator} />
          </div>
        </div>
      </div>
    </CreatorLayout>
  );
}
