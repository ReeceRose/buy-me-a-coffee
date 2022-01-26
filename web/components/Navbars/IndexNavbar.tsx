import { useState } from 'react';
import Link from 'next/link';

import { BiMenuAltRight, BiHome } from 'react-icons/bi';
import { SiBuymeacoffee } from 'react-icons/si';

export default function IndexNavbar(): JSX.Element {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 bg-white shadow navbar-expand-lg">
      <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
        <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
          <div className="flex items-center text-2xl font-black text-gray-800 uppercase align-middle dark:text-white">
            <SiBuymeacoffee className="mr-4" />
            Buy Me a Coffee
          </div>
          <button
            className="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <BiMenuAltRight className="text-3xl" />
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none' +
            (navbarOpen ? ' block' : ' hidden')
          }
          id="nav"
        >
          <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
            <li className="flex items-center">
              <Link href="/">
                <a className="mr-2 text-lg text-gray-700 leading-lg">
                  <span className="flex items-center">
                    <BiHome className="mr-2" />
                    Home
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
