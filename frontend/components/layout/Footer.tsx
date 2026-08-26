import Link from 'next/link';

const navigation = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className='bg-primary text-white'>
      <div className='mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20'>
        <div className='grid gap-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr]'>
          {/* Brand */}
          <div>
            <Link href='/' className='inline-flex items-center gap-3'>
              <span className='flex h-9 w-9 items-center justify-center border border-gold text-sm font-semibold text-gold'>
                PF
              </span>

              <span className='font-serif text-xl'>Priceless Faith</span>
            </Link>

            <p className='mt-7 max-w-sm text-sm leading-7 text-white/50'>
              Empowering teachers, strengthening schools, and advancing
              educational excellence through practical support and professional
              development.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span className='text-xs font-semibold uppercase tracking-[0.2em] text-gold-light'>
              Explore
            </span>

            <nav className='mt-6 flex flex-col gap-4'>
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='w-fit text-sm text-white/60 transition-colors hover:text-white'
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <span className='text-xs font-semibold uppercase tracking-[0.2em] text-gold-light'>
              Get in touch
            </span>

            <div className='mt-6 flex flex-col gap-4 text-sm text-white/60'>
              <a
                href='mailto:info@pricelessfaithconsult.com'
                className='transition-colors hover:text-white'
              >
                info@pricelessfaithconsult.com
              </a>

              <a
                href='tel:+2340000000000'
                className='transition-colors hover:text-white'
              >
                +234 000 000 0000
              </a>
            </div>
          </div>
        </div>

        <div className='mt-16 flex flex-col gap-5 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between'>
          <p>
            © {new Date().getFullYear()} Priceless Faith Consult. All rights
            reserved.
          </p>

          <p>Education • Training • Consultancy</p>
        </div>
      </div>
    </footer>
  );
}
