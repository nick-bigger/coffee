import type { HTMLProps } from "react"

export { Link }

function Link({ href, children }: HTMLProps<HTMLAnchorElement>) {
  if (href && !href.startsWith('/')) throw new Error('Link href should start with /')
  href = import.meta.env.BASE_URL + href
  href = normalize(href)
  return <a href={href}>{children}</a>
}

function normalize(url: string) {
  return '/' + url.split('/').filter(Boolean).join('/')
}