import Link from 'next/link';
import { SiBuymeacoffee } from 'react-icons/si';

import DefaultLayout from '@/layouts/Default';

export default function Index(): JSX.Element {
  return (
    <DefaultLayout>
      <main className="relative h-screen overflow-hidden bg-white dark:bg-gray-800">
        <header className="z-30 flex items-center w-full h-24 sm:h-32">
          <div className="container flex items-center justify-between px-6 mx-auto">
            <div className="flex items-center text-3xl font-black text-gray-800 uppercase align-middle dark:text-white">
              <SiBuymeacoffee className="mr-4" />
              Buy Me a Coffee
            </div>
            <div className="flex items-center">
              <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
                <Link href="/">
                  <a className="flex px-6 py-2">Home</a>
                </Link>
              </nav>
              <button className="flex flex-col ml-4 lg:hidden">
                <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
              </button>
            </div>
          </div>
        </header>
        <div className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800"></div>
      </main>
    </DefaultLayout>
  );
}
