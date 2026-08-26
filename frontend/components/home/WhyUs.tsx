'use client';

import {
  Award,
  BadgeCheck,
  HeartHandshake,
  LifeBuoy,
  Wrench,
} from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    title: 'Experience',
    description:
      'Practical knowledge and experience in education and professional development.',
    icon: BadgeCheck,
  },
  {
    title: 'Practical Solutions',
    description:
      'Resources and training designed to work in real educational environments.',
    icon: Wrench,
  },
  {
    title: 'Professional Excellence',
    description:
      'A commitment to quality, continuous learning, and professional growth.',
    icon: Award,
  },
  {
    title: 'Values-Based Approach',
    description: 'Integrity, excellence, and service guide the way we work.',
    icon: HeartHandshake,
  },
  {
    title: 'Continuous Support',
    description:
      'We believe in building long-term relationships, not just offering one-off services.',
    icon: LifeBuoy,
  },
];

export function WhyUs() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.why-heading', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        },
      });

      gsap.from('.why-item', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.why-list',
          start: 'top 80%',
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
        <div className='why-heading grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24'>
          <div>
            <span className='text-xs font-semibold uppercase tracking-[0.22em] text-gold'>
              Why Choose Us
            </span>

            <div className='mt-5 h-px w-12 bg-gold' />
          </div>

          <div>
            <h2 className='max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-6xl'>
              Built on{' '}
              <span className='italic text-gold'>experience, integrity,</span>{' '}
              and a commitment to excellence.
            </h2>
          </div>
        </div>

        {/* Reasons */}
        <div className='why-list mt-20 border-t border-black/10'>
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className='why-item group grid gap-6 border-b border-black/10 py-8 lg:grid-cols-[70px_1fr_1.2fr] lg:items-center lg:gap-10'
              >
                {/* Icon */}
                <div className='flex h-11 w-11 items-center justify-center border border-black/10 transition-all duration-300 group-hover:border-gold group-hover:bg-gold/10'>
                  <Icon
                    size={19}
                    strokeWidth={1.5}
                    className='text-primary transition-colors duration-300 group-hover:text-gold'
                  />
                </div>

                {/* Title */}
                <h3 className='font-serif text-2xl text-primary transition-colors duration-300 group-hover:text-gold sm:text-3xl'>
                  {reason.title}
                </h3>

                {/* Description */}
                <p className='max-w-xl text-sm leading-7 text-muted sm:text-base'>
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
