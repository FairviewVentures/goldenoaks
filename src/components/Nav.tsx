import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navlink =
  "block rounded px-2 py-2 md:bg-transparent md:p-0 font-semibold";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav aria-label="Navigation" lang="en">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            className="mr-3 md:h-auto md:w-32"
            alt="goldenoaks_logo"
            width={100}
            height={100}
          />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="mt-4 flex flex-col items-center rounded-lg p-4 text-sm font-medium text-base-accent md:mt-0 md:flex-row md:space-x-4 md:border-0 md:p-0">
            <li>
              <Link href="/rates-and-floorplans" className={navlink}>
                Rates & Floorplans
              </Link>
            </li>
            <li>
              <Link href="/gallery" className={navlink}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/neighborhood" className={navlink}>
                Neighborhood
              </Link>
            </li>
            <li>
              <Link href="/accessibility" className={navlink}>
                Accessibility
              </Link>
            </li>
            <li>
              <Link
                href="/schedule"
                className="block rounded-full border-2 border-base-accent font-semibold md:bg-transparent md:px-4 md:py-2"
              >
                Schedule A Tour
              </Link>
            </li>
          </ul>
        </div>
        {isOpen && (
          <div className="w-full">
            <ul className="mt-4 flex flex-col items-center gap-4 rounded-lg p-4 text-sm font-medium text-base-accent md:mt-0 md:flex-row md:space-x-4 md:border-0 md:p-0">
              <li>
                <Link href="/rates-and-floorplans" className={navlink}>
                  Rates & Floorplans
                </Link>
              </li>
              <li>
                <Link href="/gallery" className={navlink}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/neighborhood" className={navlink}>
                  Neighborhood
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className={navlink}>
                  Accessibility
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="block rounded-full border-2 border-base-accent px-4 py-2 font-semibold md:bg-transparent"
                >
                  Schedule A Tour
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
