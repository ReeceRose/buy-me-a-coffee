import { GetServerSideProps } from 'next';

import CreatorLayout from '@/layouts/Creator';

type Props = {
  creator: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const creator = context.query.creator as string;
  // TODO: pull creator info from API

  return {
    props: {
      creator: creator,
    },
  };
};

export default function CreatorPage({ creator }: Props): JSX.Element {
  return (
    <CreatorLayout title={creator} description={creator}>
      <div className="relative flex items-center content-center justify-center">
        <div className="container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 pt-24 m-auto text-center lg:w-6/12"></div>
          </div>
        </div>
      </div>
    </CreatorLayout>
  );
}
