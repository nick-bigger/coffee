import type { HTMLProps } from "react"

export { Link }

function Link({ href, children }: HTMLProps<HTMLAnchorElement>) {
  if (href?.startsWith("/")) {
    href = import.meta.env.BASE_URL + href
    href = normalize(href)
  }

  return <a href={href} className="py-1 !text-[#d4d4d4] !no-underline !hover:no-underline hover:bg-[#383838]">{children}</a>
}

function normalize(url: string) {
  return '/' + url.split('/').filter(Boolean).join('/')
}