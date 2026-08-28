'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function AboutCTA() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.about-cta-content', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className='bg-primary px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-10'
    >
      <div className='about-cta-content mx-auto max-w-7xl'>
        <div className='max-w-4xl'>
          <span className='text-xs font-semibold uppercase tracking-[0.22em] text-gold-light'>
            Our Vision
          </span>

          <h2 className='mt-6 max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl'>
            Equipping educators and transforming schools for{' '}
            <span className='italic text-gold-light'>
              excellence and impact.
            </span>
          </h2>

          <p className='mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg'>
            Our vision is to become a leading educational consultancy and
            teacher development platform in Africa, equipping educators and
            transforming schools for excellence, relevance, and positive
            societal impact.
          </p>

          <Link
            href='/contact'
            className='group mt-9 inline-flex items-center gap-3 border-b border-white/30 pb-2 text-sm font-medium transition-colors hover:border-gold-light hover:text-gold-light'
          >
            Talk to our team
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
