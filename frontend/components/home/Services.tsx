'use client';

import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: '01',
    title: 'Teacher Development',
    description:
      'Practical training programmes designed to improve classroom effectiveness, professional competence, leadership skills, and educational outcomes.',
    items: [
      'Teacher professional development',
      'Classroom management training',
      'Lesson planning workshops',
      'Record keeping & documentation',
      'Leadership development',
    ],
  },
  {
    number: '02',
    title: 'School Consultancy',
    description:
      'Helping schools establish strong systems that promote excellence, effective administration, and sustainable growth.',
    items: [
      'School improvement planning',
      'Administrative systems development',
      'School policy formulation',
      'Staff handbook development',
      'Academic quality assurance',
      'School start-up guidance',
    ],
  },
  {
    number: '03',
    title: 'Educational Resources',
    description:
      'Practical tools and resources that support effective teaching, school administration, and the everyday work of educators.',
    items: [
      'Priceless Faith Series',
      'Teacher record templates',
      'Administrative forms',
      'Educational guides',
      'Textbooks & learning resources',
      'School stationery & supplies',
    ],
  },
];

export function Services() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.service-heading', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        },
      });

      gsap.from('.service-row', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-list',
          start: 'top 75%',
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className='border-b border-black/10 bg-background py-24 sm:py-32'
    >
      <div className='mx-auto max-w-7xl px-5 sm:px-8 lg:px-10'>
        {/* Heading */}
        <div className='service-heading grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24'>
          <div>
            <span className='text-xs font-semibold uppercase tracking-[0.22em] text-gold'>
              02 — What We Do
            </span>

            <div className='mt-5 h-px w-12 bg-gold' />
          </div>

          <div>
            <h2 className='max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-6xl'>
              Practical solutions for{' '}
              <span className='italic text-gold'>better education.</span>
            </h2>

            <p className='mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg'>
              From developing educators to strengthening school systems, we
              provide practical support built around the realities of education.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className='services-list mt-20 border-t border-black/10'>
          {services.map((service) => (
            <article
              key={service.number}
              className='service-row group grid gap-8 border-b border-black/10 py-10 lg:grid-cols-[100px_1fr_1fr_auto] lg:items-start lg:gap-12'
            >
              {/* Number */}
              <span className='font-serif text-lg text-gold'>
                {service.number}
              </span>

              {/* Title */}
              <div>
                <h3 className='font-serif text-3xl tracking-tight text-primary transition-colors duration-300 group-hover:text-gold sm:text-4xl'>
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div>
                <p className='max-w-lg text-sm leading-7 text-muted sm:text-base'>
                  {service.description}
                </p>

                <ul className='mt-6 grid gap-2 sm:grid-cols-2'>
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-primary/70 before:mr-2 before:text-gold before:content-['—']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow */}
              <div className='flex h-11 w-11 shrink-0 items-center justify-center border border-black/10 text-primary transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-white'>
                <ArrowUpRight
                  size={17}
                  className='transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='service-heading mt-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-center'>
          <p className='max-w-xl text-sm leading-6 text-muted'>
            Need a solution tailored to your school, teaching career, or
            educational goals?
          </p>

          <a
            href='/contact'
            className='group inline-flex w-fit items-center gap-3 border-b border-primary/30 pb-2 text-sm font-medium text-primary transition-colors hover:border-gold hover:text-gold'
          >
            Talk to our team
            <ArrowUpRight
              size={16}
              className='transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'
            />
          </a>
        </div>
      </div>
    </section>
  );
}
