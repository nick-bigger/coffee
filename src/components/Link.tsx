import type { HTMLProps } from "react";

import { cn } from "@/utils";

export { Link };

function Link({ href, children, className }: HTMLProps<HTMLAnchorElement>) {
  if (href?.startsWith("/")) {
    href = import.meta.env.BASE_URL + href;
    href = normalize(href);
  }

  return (
    <a
      href={href}
      className={cn(
        "py-1 text-[#d4d4d4] no-underline hover:bg-[#383838]",
        className,
      )}
    >
      {children}
    </a>
  );
}

function normalize(url: string) {
  return "/" + url.split("/").filter(Boolean).join("/");
}
