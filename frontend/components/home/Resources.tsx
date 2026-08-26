'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const resources = [
  {
    number: '01',
    title: "The Teacher's Record File Pack",
    type: 'Professional Tool',
  },
  {
    number: '02',
    title: "The Smart Teacher's Guide to Lesson Notes",
    type: 'Teacher Guide',
  },
  {
    number: '03',
    title: 'Effective Record Keeping for Teachers',
    type: 'Professional Guide',
  },
  {
    number: '04',
    title: 'Classroom Management Made Practical',
    type: 'Teacher Guide',
  },
  {
    number: '05',
    title: "The New Teacher's Survival Guide",
    type: 'Professional Guide',
  },
];

export function Resources() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.resources-heading', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        },
      });

      gsap.from('.resource-item', {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.resources-list',
          start: 'top 80%',
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className='border-b border-black/10 bg-primary py-24 text-white sm:py-32'
    >
      <div className='mx-auto max-w-7xl px-5 sm:px-8 lg:px-10'>
        {/* Heading */}
        <div className='resources-heading grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24'>
          <div>
            <span className='text-xs font-semibold uppercase tracking-[0.22em] text-gold-light'>
              04 — The Priceless Faith Series
            </span>

            <div className='mt-5 h-px w-12 bg-gold' />
          </div>

          <div>
            <h2 className='max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl'>
              Practical resources for{' '}
              <span className='italic text-gold-light'>
                effective educators.
              </span>
            </h2>

            <p className='mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg'>
              A growing collection of educational publications, templates,
              guides, and professional tools developed to support teachers,
              school leaders, and educational institutions.
            </p>
          </div>
        </div>

        {/* Resources list */}
        <div className='resources-list mt-20 border-t border-white/15'>
          {resources.map((resource) => (
            <article
              key={resource.number}
              className='resource-item group grid gap-5 border-b border-white/15 py-7 lg:grid-cols-[90px_1fr_auto] lg:items-center lg:gap-10'
            >
              <span className='font-serif text-sm text-gold-light'>
                {resource.number}
              </span>

              <div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-8'>
                <h3 className='max-w-2xl font-serif text-2xl leading-tight transition-colors duration-300 group-hover:text-gold-light sm:text-3xl'>
                  {resource.title}
                </h3>

                <span className='w-fit border border-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50'>
                  {resource.type}
                </span>
              </div>

              <ArrowUpRight
                size={20}
                className='hidden md:flex text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold-light'
              />
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className='resources-heading mt-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center'>
          <p className='max-w-xl text-sm leading-6 text-white/50'>
            More titles are coming soon as the Priceless Faith Series continues
            to grow.
          </p>

          <Link
            href='/resources'
            className='group inline-flex w-fit items-center gap-3 border-b border-white/30 pb-2 text-sm font-medium transition-colors hover:border-gold-light hover:text-gold-light'
          >
            Explore the series
            <ArrowUpRight
              size={16}
              className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
