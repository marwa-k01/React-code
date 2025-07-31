import { ArrowUp } from 'lucide-react'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='py-4 px-4 bg-card relative border-t border-border mt-12  flex flex-wrap justify-between items-center'>
      <p className='text-sm text-muted-foreground'>
        &copy; {new Date().getFullYear()} Marwa Kashify All right reserved.
      </p>
      <a href='#hero' className='p-2 rounded-full bg-primary/20 text-primary transition-colors'>
        <ArrowUp/>
      </a>
    </footer>
  )
}
