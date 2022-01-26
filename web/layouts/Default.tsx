import IndexNavbar from '@/components/Navbars/IndexNavbar';
import SEO from '@/components/SEO';

interface Props {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: Props): JSX.Element {
  return (
    <>
      <SEO
        title="Buy Me a Coffee"
        description="Support a creator by tipping with crypto"
      />
      <main>
        <IndexNavbar />
        <div className="pt-20">{children}</div>
      </main>
    </>
  );
}
