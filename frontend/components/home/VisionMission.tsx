'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function VisionMission() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.vision-reveal', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
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
        <div className='vision-reveal'>
          <span className='text-xs font-semibold uppercase tracking-[0.22em] text-gold'>
            06 — Our Direction
          </span>

          <div className='mt-5 h-px w-12 bg-gold' />
        </div>

        <div className='mt-16 grid gap-px bg-black/10 lg:grid-cols-2'>
          <article className='vision-reveal bg-white p-8 sm:p-12 lg:p-16'>
            <span className='text-xs font-semibold uppercase tracking-[0.2em] text-gold'>
              Our Vision
            </span>

            <h2 className='mt-8 max-w-xl font-serif text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl'>
              To become a trusted partner in education and professional
              development.
            </h2>
          </article>

          <article className='vision-reveal bg-primary p-8 text-white sm:p-12 lg:p-16'>
            <span className='text-xs font-semibold uppercase tracking-[0.2em] text-gold-light'>
              Our Mission
            </span>

            <h2 className='mt-8 max-w-xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl'>
              To provide practical, professional, and impactful solutions that
              empower educators and improve schools.
            </h2>
          </article>
        </div>

        <p className='vision-reveal mt-10 max-w-2xl text-sm leading-7 text-muted'>
          We are committed to creating meaningful, lasting impact through
          education, professional development, and practical support.
        </p>
      </div>
    </section>
  );
}
