'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navigation = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className='relative z-50'>
      <div className='mx-auto max-w-7xl px-5 pt-5 sm:px-8 lg:px-10'>
        <nav className='flex h-20 items-center justify-between border-b border-black/10'>
          <Link href='/' className='group flex items-center gap-3'>
            <span className='flex h-9 w-9 items-center justify-center border border-gold text-sm font-semibold text-gold'>
              PF
            </span>

            <span className='font-serif text-lg tracking-tight text-primary'>
              Priceless Faith
            </span>
          </Link>

          <div className='hidden items-center gap-9 md:flex'>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='text-sm text-muted transition-colors duration-300 hover:text-primary'
              >
                {item.label}
              </Link>
            ))}

            <Link
              href='/contact'
              className='border border-primary bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-transparent hover:text-primary'
            >
              Let&apos;s Talk
            </Link>
          </div>

          <button
            type='button'
            onClick={() => setOpen((value) => !value)}
            className='text-primary md:hidden'
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {open && (
          <div className='border-b border-black/10 bg-background py-6 md:hidden'>
            <nav className='flex flex-col gap-5'>
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className='text-base text-primary'
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href='/contact'
                onClick={() => setOpen(false)}
                className='mt-2 w-fit bg-primary px-5 py-3 text-sm font-medium text-white'
              >
                Let&apos;s Talk
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
