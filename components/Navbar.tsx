"use client";

import { useEffect, useState } from "react";
import { nav, phoneNumber } from "@/config";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  // The mobile menu remembers the page it was opened on, so it closes
  // itself after navigating.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const isOpen = openedOn === pathname;
  const setIsOpen = (open: boolean) => setOpenedOn(open ? pathname : null);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenedOn(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <>
      <nav
        className={`${isHome ? "absolute left-0 top-0" : "relative"} z-30 flex w-full flex-col flex-nowrap items-center justify-between py-8 lg:flex-wrap lg:justify-start ${isHome ? "" : "bg-white"}`}
      >
        <div className="flex w-full flex-wrap items-center justify-between px-4 md:px-16">
          <Link href="/" className="ml-4">
            <Image
              src={isHome ? "/logo.png" : "/logodark.jpg"}
              alt="Golden Oaks Apartments, home"
              width={100}
              height={50}
              className="aspect-auto"
            />
          </Link>
          <button
            className={`block border-0 bg-transparent px-2 hover:no-underline hover:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-current lg:hidden ${isHome ? "text-white" : "text-neutral-400"}`}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent3"
          >
            <ul className="list-style-none mr-auto flex flex-col pl-0 md:pl-8 lg:mt-1 lg:flex-row">
              {nav.map((item, index) => (
                <li
                  key={index}
                  className={`my-4 pl-8 lg:my-0 lg:pr-1 ${isHome ? "text-white" : ""}`}
                >
                  <Link
                    aria-current={pathname === item.slug ? "page" : undefined}
                    href={item.slug}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <svg
                className={`h-auto w-6 ${isHome ? "fill-white" : "fill-black"}`}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" />
              </svg>
              <a
                href={`tel:${phoneNumber}`}
                className={isHome ? "text-white" : ""}
              >
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>
        {isOpen && (
          <ul
            id="mobile-menu"
            className={`mt-4 flex w-full flex-col items-center gap-8 bg-black/75 py-4 ${isHome ? "bg-black/75 text-white" : "bg-white/75 text-black"}`}
          >
            {nav.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.slug}
                  aria-current={pathname === item.slug ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
