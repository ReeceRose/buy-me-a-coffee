import Link from 'next/link';

import { BiHome } from 'react-icons/bi';

export const CreatorNavbar = (): JSX.Element => {
  return (
    <nav className="fixed top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 bg-white">
      <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
        <div
          className="flex items-center flex-grow bg-white shadow-none bg-opacity-255"
          id="nav"
        >
          <ul className="flex flex-row ml-auto list-none">
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
};
