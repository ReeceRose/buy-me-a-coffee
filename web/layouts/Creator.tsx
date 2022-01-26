import SEO from '@/components/SEO';
import CreatorNavbar from '@/components/Navbars/CreatorNavbar';

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function CreatorLayout({
  children,
  title,
  description,
}: Props): JSX.Element {
  return (
    <>
      <SEO title={title} description={description} />
      <main>
        <CreatorNavbar />
        {children}
      </main>
    </>
  );
}
