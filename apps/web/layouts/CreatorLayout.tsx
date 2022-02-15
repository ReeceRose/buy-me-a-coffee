import { SEO } from 'ui/components/SEO';
import { CreatorNavbar } from '@/components/Navbars/Creator';

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  siteURL: string;
}

export const CreatorLayout = ({
  children,
  title,
  description,
  siteURL,
}: Props): JSX.Element => {
  return (
    <>
      <SEO title={title} description={description} siteURL={siteURL} />
      <main>
        <CreatorNavbar />
        {children}
      </main>
    </>
  );
};
