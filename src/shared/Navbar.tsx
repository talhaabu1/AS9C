'use client';

import { Button } from '@material-tailwind/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const AuthButton = dynamic(() => import('@/components/ui/AuthButton'), {
  ssr: false,
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 bg-[#f5f5f5] rounded-b-lg shadow-lg ">
      <div className="relative flex items-center justify-between">
        <Link
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center">
          <Image src="/logo.png" width={55} height={55} alt="icon" />
          <span className="ml-2 text-2xl font-bold tracking-wide text-green-500 uppercase">
            Recover-Ease
          </span>
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-semibold tracking-wide text-green-500">
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              aria-label="Our product"
              title="Our product"
              className="font-semibold  tracking-wide text-green-500 ">
              ABOUT US
            </Link>
          </li>
        </ul>

        <AuthButton design1="hidden lg:flex" design2="hidden lg:flex" />

        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}>
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-30 ">
              <div className="p-5 bg-bgPrimary border rounded shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center">
                      <Image
                        src="/logo.png"
                        width={55}
                        height={55}
                        alt="icon"
                      />
                      <span className="ml-2 text-2xl font-bold tracking-wide text-green-500 uppercase">
                        Recover-Ease
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}>
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4 text-center">
                    <li>
                      <Link
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-semibold tracking-wide text-green-500">
                        HOME
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about-us"
                        aria-label="Our product"
                        title="Our product"
                        className="font-semibold tracking-wide text-green-500">
                        ABOUT US
                      </Link>
                    </li>

                    <AuthButton design2="justify-center" />
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
