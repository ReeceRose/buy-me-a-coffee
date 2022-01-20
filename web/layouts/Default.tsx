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
      <main>{children}</main>
    </>
  );
}
