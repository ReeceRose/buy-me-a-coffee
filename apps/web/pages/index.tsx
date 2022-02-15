import { DefaultLayout } from '@/layouts/DefaultLayout';

export default function Index(): JSX.Element {
  return (
    <DefaultLayout siteURL={process.env.SITE_URK || 'http://localhost:3000'}>
      <div className="relative flex items-center content-center justify-center pt-">
        <div className="container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 pt-24 m-auto text-center lg:w-8/12">
              <h1 className="text-6xl font-bold text-gray-900">
                A supporter is worth a thousand followers.
              </h1>
              <h5 className="pt-6 text-xl">
                Accept donations. Start a membership. Sell anything you like.
                <br />
                It’s easier than you think.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
