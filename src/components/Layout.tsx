import React from "react";

import { Link } from "./Link";

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <header className="mb-16 flex w-full max-w-5xl flex-col px-8 pt-8 md:flex-row md:items-center md:justify-between md:px-12 md:pt-12 lg:px-16 lg:pt-16">
        <h1 className="!mb-0 !text-3xl font-bold tracking-[2px] !text-[#d4d4d4]">
          <Link href="/">COFFEE GROUNDS</Link>
        </h1>
        <ul className="mt-4 flex space-x-4 md:mt-0 md:hidden">
          <li className="font-semibold tracking-[1px]">
            <Link href="/about">ABOUT</Link>
          </li>
          <li className="font-semibold tracking-[1px]">
            <Link href="/contact">CONTACT</Link>
          </li>
          <li className="font-semibold tracking-[1px]">
            <Link href="/feeds">FEEDS</Link>
          </li>
        </ul>
      </header>

      <div className="flex w-full max-w-5xl px-8 pb-8 md:px-12 md:pb-12 lg:px-16 lg:pb-16">
        <aside className="hidden w-36 flex-shrink-0 pr-8 md:block">
          <p className="tracking-[0.5px]">By Nick Bigger</p>
          <ul className="mt-14 space-y-1 text-right">
            <li className="font-semibold tracking-[1px]">
              <Link href="/about">ABOUT</Link>
            </li>
            <li className="font-semibold tracking-[1px]">
              <Link href="/contact">CONTACT</Link>
            </li>
            <li className="font-semibold tracking-[1px]">
              <Link href="/feeds">FEEDS</Link>
            </li>
          </ul>
        </aside>

        <main className="max-w-xl flex-1 md:pl-8">
          {children}
          <footer className="mt-12 pt-6 text-sm">
            © 2025 Coffee Grounds. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
}
