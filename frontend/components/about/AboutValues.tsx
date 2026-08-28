'use client';

import { Award, Compass, Lightbulb, ShieldCheck } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We are committed to helping educators and schools achieve high standards of professional performance.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description:
      'We promote integrity and accountability in teaching, leadership, administration, and educational practice.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We encourage practical approaches and resources that respond to the changing needs of education.',
  },
  {
    icon: Compass,
    title: 'Lasting Impact',
    description:
      'We focus on solutions that create meaningful and sustainable improvements for educators and schools.',
  },
];

export function AboutValues() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.value-item', {
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
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
      className='border-b border-black/10 bg-white py-24 sm:py-32'
    >
      <div className='mx-auto max-w-7xl px-5 sm:px-8 lg:px-10'>
        <div className='grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24'>
          <div>
            <span className='text-xs font-semibold uppercase tracking-[0.22em] text-gold'>
              What Guides Us
            </span>

            <div className='mt-5 h-px w-12 bg-gold' />
          </div>

          <div>
            <h2 className='max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-6xl'>
              Professional work grounded in{' '}
              <span className='italic text-gold'>purpose and values.</span>
            </h2>

            <div className='mt-14 grid border-t border-black/10 sm:grid-cols-2'>
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article
                    key={value.title}
                    className='value-item border-b border-black/10 py-8 sm:px-7 sm:even:border-l lg:px-8'
                  >
                    <div className='flex h-11 w-11 items-center justify-center border border-black/10'>
                      <Icon size={19} strokeWidth={1.5} className='text-gold' />
                    </div>

                    <h3 className='mt-7 font-serif text-2xl text-primary sm:text-3xl'>
                      {value.title}
                    </h3>

                    <p className='mt-4 text-sm leading-7 text-muted sm:text-base'>
                      {value.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
