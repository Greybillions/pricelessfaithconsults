'use client';

import { ArrowDown } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function ResourcesHero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from('.resources-eyebrow', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      })
        .from(
          '.resources-title',
          {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
          },
          '-=0.4',
        )
        .from(
          '.resources-description',
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
          <div className='resources-eyebrow flex items-center gap-4'>
            <span className='h-px w-10 bg-gold' />

            <span className='text-xs font-semibold uppercase tracking-[0.24em] text-gold'>
              The Priceless Faith Series
            </span>
          </div>

          <h1 className='resources-title mt-7 max-w-5xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] text-primary sm:text-6xl lg:text-8xl'>
            Practical resources for{' '}
            <span className='italic text-gold'>effective educators.</span>
          </h1>

          <p className='resources-description mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg'>
            A growing collection of educational publications, guides, templates,
            and professional tools created to support teachers, school leaders,
            and educational institutions.
          </p>
        </div>
      </div>

      <div className='absolute bottom-8 right-6 hidden sm:block lg:right-10'>
        <a
          href='#resources'
          aria-label='Scroll to resources'
          className='flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-primary transition-all duration-300 hover:border-gold hover:text-gold'
        >
          <ArrowDown size={18} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}
