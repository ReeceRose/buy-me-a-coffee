import { SEO } from 'ui/components/';
import { IndexNavbar } from '@/components/Navbars/Index';

interface Props {
  siteURL: string;
  children: React.ReactNode;
}

export const DefaultLayout = ({ siteURL, children }: Props): JSX.Element => {
  return (
    <>
      <SEO
        title="Buy Me a Coffee"
        description="Support a creator by tipping with crypto"
        siteURL={siteURL}
      />
      <main>
        <IndexNavbar />
        <div className="pt-20">{children}</div>
      </main>
    </>
  );
};
