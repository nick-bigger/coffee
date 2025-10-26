import React from "react";
import { Link } from "./Link";

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <header className="max-w-5xl w-full px-8 pt-8 md:px-12 md:pt-12 lg:px-16 lg:pt-16 mb-16">
      <h1 className="!text-3xl !mb-0 font-bold tracking-[1px] !text-[#d4d4d4]">
        <Link href="/">
            COFFEE GROUNDS
        </Link>
      </h1>
      </header>
      
      <div className="flex max-w-5xl w-full px-8 pb-8 md:px-12 md:pb-12 lg:px-16 lg:pb-16">
        <aside className="w-36 pr-8 flex-shrink-0 hidden md:block">
          <p>By Nick Bigger</p>
          <ul className="mt-14 text-right space-y-1">
            <li className="font-semibold tracking-[1px]"><Link href="/about">ABOUT</Link></li>
            <li className="font-semibold tracking-[1px]"><Link href="/contact">CONTACT</Link></li>
            <li className="font-semibold tracking-[1px]"><Link href="/feeds">FEEDS</Link></li>
          </ul>
        </aside>

        <main className="flex-1 md:max-w-xl md:pl-8">
          {children}
          <footer className="mt-12 pt-6 text-sm">
            © 2025 Coffee Grounds. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
}