'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const audiences = [
  {
    number: '01',
    title: 'Teachers',
    description:
      'For educators seeking professional growth, stronger classroom practice, and practical tools that make teaching more effective.',
  },
  {
    number: '02',
    title: 'Schools',
    description:
      'For schools pursuing excellence through stronger systems, better administration, effective policies, and continuous improvement.',
  },
  {
    number: '03',
    title: 'School Proprietors',
    description:
      'For proprietors building schools with clear systems, professional standards, and a strong foundation for sustainable growth.',
  },
  {
    number: '04',
    title: 'Educational Leaders',
    description:
      'For administrators and educational leaders looking to strengthen processes, develop people, and create lasting impact.',
  },
];

export function Audience() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.audience-heading', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        },
      });

      gsap.from('.audience-item', {
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.audience-list',
          start: 'top 80%',
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
        <div className='audience-heading grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24'>
          <div>
            <span className='text-xs font-semibold uppercase tracking-[0.22em] text-gold'>
              03 — Who We Serve
            </span>

            <div className='mt-5 h-px w-12 bg-gold' />
          </div>

          <div>
            <h2 className='max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-6xl'>
              Support for the people who{' '}
              <span className='italic text-gold'>shape education.</span>
            </h2>

            <p className='mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg'>
              Whether you teach, lead, manage, or build an educational
              institution, our solutions are designed around the work you do.
            </p>
          </div>
        </div>

        <div className='audience-list mt-20 grid border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4'>
          {audiences.map((audience) => (
            <article
              key={audience.number}
              className='audience-item group border-b border-black/10 py-8 sm:px-7 sm:odd:border-r lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0'
            >
              <span className='font-serif text-sm text-gold'>
                {audience.number}
              </span>

              <h3 className='mt-8 font-serif text-2xl text-primary sm:text-3xl'>
                {audience.title}
              </h3>

              <p className='mt-5 text-sm leading-7 text-muted'>
                {audience.description}
              </p>

              <Link
                href='/contact'
                className='mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary transition-colors hover:text-gold'
              >
                Learn more
                <ArrowUpRight
                  size={14}
                  className='transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'
                />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
