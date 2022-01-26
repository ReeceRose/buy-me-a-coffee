import { useRouter } from 'next/router';

import CreatorLayout from '@/layouts/Creator';

export default function CreatorPage(): JSX.Element {
  const router = useRouter();
  const creator = router.query.creator as string;

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
