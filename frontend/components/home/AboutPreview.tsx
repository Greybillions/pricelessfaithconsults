'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function AboutPreview() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.about-reveal', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className='border-b border-black/10 bg-white py-24 sm:py-32'
    >
      <div className='mx-auto max-w-7xl px-5 sm:px-8 lg:px-10'>
        <div className='grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24'>
          {/* Visual */}
          <div className='about-reveal'>
            <div className='relative overflow-hidden'>
              <div className='relative aspect-4/5 w-full max-w-xl'>
                <Image
                  src='/images/about-preview.webp'
                  alt='Teacher working in a professional classroom setting'
                  fill
                  sizes='(max-width: 1024px) 100vw, 40vw'
                  className='object-cover'
                  loading='eager'
                />
              </div>
            </div>

            <div className='mt-6'>
              <span className='text-xs font-semibold uppercase tracking-[0.22em] text-gold'>
                01 — Who We Are
              </span>

              <div className='mt-4 h-px w-12 bg-gold' />

              <p className='mt-4 max-w-xs font-serif text-2xl leading-tight text-primary'>
                Empowering education through practical action.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className='lg:pt-2'>
            <span className='about-reveal block text-xs font-semibold uppercase tracking-[0.22em] text-gold'>
              Welcome to Priceless Faith Consult
            </span>

            <h2 className='about-reveal mt-8 max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-6xl'>
              Education transforms lives. Great education begins with{' '}
              <span className='italic text-gold'>empowered teachers.</span>
            </h2>

            <div className='about-reveal mt-8 h-px w-16 bg-gold' />

            <p className='about-reveal mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg'>
              At Priceless Faith Consult, we are committed to helping teachers
              become more effective, schools become more organized, and
              educational leaders achieve greater impact.
            </p>

            <p className='about-reveal mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg'>
              Whether you are a classroom teacher seeking professional growth, a
              school proprietor pursuing excellence, or an administrator looking
              to strengthen systems and processes, we provide practical support
              and proven solutions to help you succeed.
            </p>

            <Link
              href='/about'
              className='about-reveal group mt-9 inline-flex items-center gap-3 border-b border-primary/30 pb-2 text-sm font-medium text-primary transition-colors duration-300 hover:border-gold hover:text-gold'
            >
              More about Priceless Faith Consult
              <ArrowUpRight
                size={16}
                className='transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
