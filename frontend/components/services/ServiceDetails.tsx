'use client';

import { BookOpen, ClipboardCheck, School, Users } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 'teacher-development',
    number: '01',
    icon: Users,
    title: 'Teacher Development',
    description:
      'Practical professional development designed to strengthen classroom practice, professional competence, leadership skills, and educational outcomes.',
    items: [
      'Teacher professional development',
      'Classroom management training',
      'Lesson planning workshops',
      'Record keeping & documentation',
      'Leadership development',
    ],
  },
  {
    id: 'school-consultancy',
    number: '02',
    icon: School,
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
    id: 'educational-resources',
    number: '03',
    icon: BookOpen,
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

export function ServiceDetails() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.service-detail', {
        y: 40,
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
      id='services'
      className='border-b border-black/10 bg-background py-24 sm:py-32'
    >
      <div className='mx-auto max-w-7xl px-5 sm:px-8 lg:px-10'>
        <div className='mb-16 max-w-2xl'>
          <p className='text-xs font-semibold uppercase tracking-[0.22em] text-gold'>
            Our Areas of Work
          </p>

          <p className='mt-5 text-base leading-7 text-muted sm:text-lg'>
            Our work is centred around educators, schools, and practical
            resources that make educational work more effective.
          </p>
        </div>

        <div className='border-t border-black/10'>
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className='service-detail grid gap-10 border-b border-black/10 py-12 lg:grid-cols-[70px_80px_1fr_1fr] lg:gap-10 lg:py-16'
              >
                {/* Icon */}
                <div className='flex h-12 w-12 items-center justify-center border border-black/10'>
                  <Icon size={20} strokeWidth={1.5} className='text-gold' />
                </div>

                {/* Number */}
                <span className='hidden font-serif text-sm text-gold lg:block'>
                  {service.number}
                </span>

                {/* Title */}
                <div>
                  <h2 className='max-w-md font-serif text-3xl leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl'>
                    {service.title}
                  </h2>
                </div>

                {/* Content */}
                <div>
                  <p className='max-w-xl text-sm leading-7 text-muted sm:text-base'>
                    {service.description}
                  </p>

                  <ul className='mt-8 space-y-3'>
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className='flex items-start gap-3 text-sm text-primary/75'
                      >
                        <ClipboardCheck
                          size={15}
                          strokeWidth={1.5}
                          className='mt-0.5 shrink-0 text-gold'
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
