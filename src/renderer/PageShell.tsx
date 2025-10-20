import React from 'react'
import './PageShell.css'

export function PageShell({ children }: React.PropsWithChildren) {
  return (
    <React.StrictMode>
      
        {children}
    </React.StrictMode>
  )
}