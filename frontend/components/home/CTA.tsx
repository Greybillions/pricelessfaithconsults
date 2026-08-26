'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function CTA() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.cta-reveal', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className='border-b border-white/10 bg-primary py-24 text-white sm:py-32'
    >
      <div className='mx-auto max-w-7xl px-5 sm:px-8 lg:px-10'>
        <div className='grid gap-12 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:gap-24'>
          <div>
            <span className='cta-reveal text-xs font-semibold uppercase tracking-[0.22em] text-gold-light'>
              07 — Let&apos;s Work Together
            </span>

            <h2 className='cta-reveal mt-7 max-w-4xl font-serif text-5xl leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl'>
              Ready to strengthen your{' '}
              <span className='italic text-gold-light'>
                educational impact?
              </span>
            </h2>

            <p className='cta-reveal mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg'>
              Whether you are a teacher, school proprietor, administrator, or
              educational leader, let&apos;s explore how we can support your
              goals.
            </p>
          </div>

          <div className='cta-reveal lg:justify-self-end'>
            <Link
              href='/contact'
              className='group inline-flex items-center gap-5 border border-gold/50 px-7 py-5 text-sm font-medium text-white transition-all duration-300 hover:bg-gold hover:text-primary'
            >
              Start a conversation
              <span className='flex h-8 w-8 items-center justify-center border border-current'>
                <ArrowUpRight
                  size={16}
                  className='transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
