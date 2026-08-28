'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function WhoWeAre() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.about-image', {
        x: -40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
          once: true,
        },
      });

      gsap.from('.about-copy', {
        x: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
          once: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id='who-we-are'
      className='border-b border-black/10 bg-background py-24 sm:py-32'
    >
      <div className='mx-auto max-w-7xl px-5 sm:px-8 lg:px-10'>
        <div className='grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24'>
          {/* Image */}
          <div className='about-image'>
            <div className='relative aspect-4/5 overflow-hidden'>
              <Image
                src='/images/about-preview.webp'
                alt='Educator working at a desk'
                fill
                className='object-cover'
                sizes='(max-width: 1024px) 100vw, 45vw'
              />
            </div>

            <div className='mt-6'>
              <span className='text-xs font-semibold uppercase tracking-[0.22em] text-gold'>
                01 — Who We Are
              </span>

              <div className='mt-4 h-px w-12 bg-gold' />

              <p className='mt-5 max-w-sm font-serif text-2xl leading-tight text-primary sm:text-3xl'>
                Empowering education through practical action.
              </p>
            </div>
          </div>

          {/* Copy */}
          <div className='about-copy'>
            <span className='text-xs font-semibold uppercase tracking-[0.22em] text-gold'>
              Priceless Faith Consult
            </span>

            <h2 className='mt-6 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-6xl'>
              Education transforms lives. Great education begins with{' '}
              <span className='italic text-gold'>empowered teachers.</span>
            </h2>

            <div className='mt-7 h-px w-12 bg-gold' />

            <div className='mt-8 max-w-2xl space-y-6 text-base leading-8 text-muted sm:text-lg'>
              <p>
                At Priceless Faith Consult, we are committed to helping teachers
                become more effective, schools become more organized, and
                educational leaders achieve greater impact.
              </p>

              <p>
                Whether you are a classroom teacher seeking professional growth,
                a school proprietor pursuing excellence, or an administrator
                looking to strengthen systems and processes, we provide
                practical support and proven solutions to help you succeed.
              </p>

              <p>
                Our work brings together teacher training, school consultancy,
                educational resource development, administrative support
                systems, policy and documentation development, educational
                supplies, and professional growth programmes for educators.
              </p>
            </div>

            <Link
              href='/services'
              className='group mt-9 inline-flex items-center gap-3 border-b border-primary/30 pb-2 text-sm font-medium text-primary transition-colors hover:border-gold hover:text-gold'
            >
              Explore our services
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
