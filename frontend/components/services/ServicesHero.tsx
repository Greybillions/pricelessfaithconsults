'use client';

import { ArrowDown } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function ServicesHero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from('.services-eyebrow', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      })
        .from(
          '.services-title',
          {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
          },
          '-=0.4',
        )
        .from(
          '.services-description',
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.5',
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className='relative overflow-hidden border-b border-black/10 bg-background'
    >
      <div className='mx-auto flex min-h-[70vh] max-w-7xl items-end px-5 pb-20 pt-32 sm:px-8 sm:pb-24 lg:px-10 lg:pt-40'>
        <div className='max-w-5xl'>
          <div className='services-eyebrow flex items-center gap-4'>
            <span className='h-px w-10 bg-gold' />

            <span className='text-xs font-semibold uppercase tracking-[0.24em] text-gold'>
              What We Do
            </span>
          </div>

          <h1 className='services-title mt-7 max-w-5xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] text-primary sm:text-6xl lg:text-8xl'>
            Practical solutions for{' '}
            <span className='italic text-gold'>better education.</span>
          </h1>

          <p className='services-description mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg'>
            We provide practical training, consultancy, and educational
            resources designed to strengthen educators, schools, and the systems
            that support them.
          </p>
        </div>
      </div>

      <div className='absolute bottom-8 right-6 hidden sm:block lg:right-10'>
        <a
          href='#services'
          aria-label='Scroll to services'
          className='flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-primary transition-all duration-300 hover:border-gold hover:text-gold'
        >
          <ArrowDown size={18} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}
