'use client';

import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });

      tl.from('.hero-eyebrow', {
        y: 20,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          '.hero-title',
          {
            y: 50,
            opacity: 0,
            duration: 1,
          },
          '-=0.35',
        )
        .from(
          '.hero-copy',
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          '-=0.5',
        )
        .from(
          '.hero-actions',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.35',
        )
        .from(
          '.hero-aside',
          {
            x: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5',
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className='relative overflow-hidden border-b border-black/10'
    >
      <div className='mx-auto grid min-h-[calc(100vh-6.25rem)] max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.4fr_0.6fr] lg:px-10 lg:py-24'>
        <div>
          <div className='hero-eyebrow mb-7 flex items-center gap-3'>
            <span className='h-px w-10 bg-gold' />

            <span className='text-xs font-semibold uppercase tracking-[0.22em] text-gold'>
              Education • Training • Consultancy
            </span>
          </div>

          <h1 className='hero-title max-w-4xl text-5xl leading-[0.98] tracking-[-0.035em] text-primary sm:text-6xl lg:text-[5.8rem]'>
            Building professional
            <span className='block italic text-gold'>teachers.</span>
            <span className='block'>Strengthening schools.</span>
          </h1>

          <p className='hero-copy mt-8 max-w-2xl text-base leading-7 text-muted sm:text-lg'>
            We empower teachers, schools, and educational leaders through
            practical resources, professional training, and consultancy services
            designed to create meaningful, lasting impact.
          </p>

          <div className='hero-actions mt-9 flex flex-wrap items-center gap-4'>
            <Link
              href='/services'
              className='group inline-flex items-center gap-3 bg-primary px-6 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-primary-soft'
            >
              Explore our services
              <ArrowUpRight
                size={17}
                className='transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
              />
            </Link>

            <Link
              href='/about'
              className='inline-flex items-center gap-2 px-3 py-3.5 text-sm font-medium text-primary'
            >
              Discover our story
            </Link>
          </div>
        </div>

        <div className='hero-aside hidden lg:block'>
          <div className='border-l border-gold/40 pl-10'>
            <span className='text-xs font-semibold uppercase tracking-[0.2em] text-gold'>
              Our Approach
            </span>

            <p className='mt-6 font-serif text-2xl leading-snug text-primary'>
              Practical education solutions built around people, purpose, and
              progress.
            </p>

            <div className='mt-10 border-t border-black/10 pt-6'>
              <p className='text-sm leading-6 text-muted'>
                From teacher development and school consultancy to educational
                resources and professional growth, we help education
                stakeholders move forward with clarity.
              </p>
            </div>

            <div className='mt-12 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted'>
              <ArrowDown size={15} className='text-gold' />
              Explore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
