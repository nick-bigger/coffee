import type { HTMLProps } from "react"

export { Link }

function Link({ href, children }: HTMLProps<HTMLAnchorElement>) {
  href = import.meta.env.BASE_URL + href
  href = normalize(href)
  return <a href={href}>{children}</a>
}

function normalize(url: string) {
  return '/' + url.split('/').filter(Boolean).join('/')
}