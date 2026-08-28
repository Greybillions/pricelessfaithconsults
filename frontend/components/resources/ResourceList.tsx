'use client';

import {
  ClipboardCheck,
  FolderKanban,
  LayoutDashboard,
  NotebookPen,
  ShieldCheck,
} from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const resources = [
  {
    icon: FolderKanban,
    title: "The Teacher's Record File Pack",
    type: 'Professional Tool',
    description:
      'A practical resource designed to support teachers with the records and documentation required for effective professional practice.',
  },
  {
    icon: NotebookPen,
    title: "The Smart Teacher's Guide to Lesson Notes",
    type: 'Teacher Guide',
    description:
      'A guide focused on helping teachers approach lesson preparation with greater clarity, structure, and effectiveness.',
  },
  {
    icon: ClipboardCheck,
    title: 'Effective Record Keeping for Teachers',
    type: 'Professional Guide',
    description:
      'A practical guide supporting teachers in maintaining organized and effective professional records.',
  },
  {
    icon: LayoutDashboard,
    title: 'Classroom Management Made Practical',
    type: 'Teacher Guide',
    description:
      'A resource focused on practical approaches to creating and managing effective classroom environments.',
  },
  {
    icon: ShieldCheck,
    title: "The New Teacher's Survival Guide",
    type: 'Professional Guide',
    description:
      'A practical resource intended to support teachers as they navigate the demands of professional teaching.',
  },
];

export function ResourceList() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('.resource-card');

      gsap.fromTo(
        cards,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.resource-grid',
            start: 'top 80%',
            once: true,
          },
        },
      );

      ScrollTrigger.refresh();
    },
    {
      scope: container,
    },
  );

  return (
    <section
      ref={container}
      id='resources'
      className='border-b border-black/10 bg-background py-24 sm:py-32'
    >
      <div className='mx-auto max-w-7xl px-5 sm:px-8 lg:px-10'>
        <div className='mb-16 max-w-2xl'>
          <p className='text-xs font-semibold uppercase tracking-[0.22em] text-gold'>
            The Collection
          </p>

          <p className='mt-5 text-base leading-7 text-muted sm:text-lg'>
            Professional resources developed around the practical realities of
            teaching, classroom management, and educational work.
          </p>
        </div>

        <div className='resource-grid grid gap-5 md:grid-cols-2'>
          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <article
                key={resource.title}
                className='resource-card group border border-black/10 bg-white p-7 sm:p-9'
              >
                <div className='flex items-start justify-between gap-6'>
                  <div className='flex h-12 w-12 items-center justify-center border border-black/10 transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/10'>
                    <Icon size={20} strokeWidth={1.5} className='text-gold' />
                  </div>

                  <span className='border border-black/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted'>
                    {resource.type}
                  </span>
                </div>

                <h2 className='mt-12 max-w-lg font-serif text-3xl leading-tight tracking-tight text-primary transition-colors duration-300 group-hover:text-gold sm:text-4xl'>
                  {resource.title}
                </h2>

                <p className='mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base'>
                  {resource.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className='mt-16 border-t border-black/10 pt-8'>
          <p className='max-w-2xl text-sm leading-7 text-muted'>
            The Priceless Faith Series continues to grow with additional
            resources and professional tools for educators and schools.
          </p>
        </div>
      </div>
    </section>
  );
}
