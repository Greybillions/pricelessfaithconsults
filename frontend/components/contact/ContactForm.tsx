'use client';

import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FormEvent, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const enquiryTypes = [
  'Teacher Training',
  'School Consultancy',
  'Educational Resources',
  'Professional Guidance',
  'Other',
];

export function ContactForm() {
  const container = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus({
      type: null,
      message: '',
    });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      organisation: String(formData.get('organisation') || ''),
      enquiry: String(formData.get('enquiry') || ''),
      message: String(formData.get('message') || ''),
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        const message = Array.isArray(result.message)
          ? result.message[0]
          : result.message;

        throw new Error(message || 'Unable to send your enquiry.');
      }

      setStatus({
        type: 'success',
        message: 'Your enquiry has been sent successfully.',
      });

      form.reset();
    } catch (error) {
      console.error('Contact form error:', error);

      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Unable to send your enquiry. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useGSAP(
    () => {
      gsap.fromTo(
        '.contact-reveal',
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 80%',
            once: true,
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className='border-b border-black/10 bg-background py-24 sm:py-32'
    >
      <div className='mx-auto max-w-7xl px-5 sm:px-8 lg:px-10'>
        {/* Intro */}
        <div className='contact-reveal grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24'>
          <div>
            <span className='text-xs font-semibold uppercase tracking-[0.22em] text-gold'>
              Contact
            </span>

            <div className='mt-5 h-px w-12 bg-gold' />
          </div>

          <div>
            <h1 className='max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-primary sm:text-6xl lg:text-7xl'>
              Let&apos;s build better{' '}
              <span className='italic text-gold'>education together.</span>
            </h1>

            <p className='mt-7 max-w-2xl text-base leading-8 sm:text-lg text-black'>
              Whether you need teacher training, school consultancy, educational
              resources, or professional guidance, we would be delighted to hear
              from you.
            </p>
          </div>
        </div>

        {/* Contact content */}
        <div className='mt-20 grid gap-16 border-t border-black/10 pt-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24'>
          {/* Contact details */}
          <div className='contact-reveal'>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gold'>
              Get in touch
            </p>

            <div className='mt-10 space-y-8'>
              <a href='tel:+2348106396300' className='group flex gap-5'>
                <div className='flex h-11 w-11 shrink-0 items-center justify-center border border-black/10 transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/10'>
                  <Phone size={17} strokeWidth={1.5} className='text-gold' />
                </div>

                <div>
                  <p className='text-xs uppercase tracking-[0.15em] text-muted'>
                    Phone
                  </p>

                  <p className='mt-2 text-base text-primary transition-colors group-hover:text-gold'>
                    +234 810 639 6300
                  </p>
                </div>
              </a>

              <a
                href='mailto:pricelessfaithconsult@gmail.com'
                className='group flex gap-5'
              >
                <div className='flex h-11 w-11 shrink-0 items-center justify-center border border-black/10 transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/10'>
                  <Mail size={17} strokeWidth={1.5} className='text-gold' />
                </div>

                <div>
                  <p className='text-xs uppercase tracking-[0.15em] text-muted'>
                    Email
                  </p>

                  <p className='mt-2 break-all text-base text-primary transition-colors group-hover:text-gold'>
                    pricelessfaithconsult@gmail.com
                  </p>
                </div>
              </a>
            </div>

            <div className='mt-12 border-t border-black/10 pt-8'>
              <p className='text-xs uppercase tracking-[0.15em] text-muted'>
                Follow us
              </p>

              <div className='mt-5 flex gap-6'>
                <a
                  href='#'
                  className='text-sm text-primary transition-colors hover:text-gold'
                >
                  Facebook
                </a>

                <a
                  href='#'
                  className='text-sm text-primary transition-colors hover:text-gold'
                >
                  Instagram
                </a>

                <a
                  href='#'
                  className='text-sm text-primary transition-colors hover:text-gold'
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className='contact-reveal space-y-8'>
            <div className='grid gap-8 sm:grid-cols-2'>
              <div>
                <label
                  htmlFor='name'
                  className='text-xs font-semibold uppercase tracking-[0.15em] text-primary'
                >
                  Name
                </label>

                <input
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Your name'
                  className='mt-3 w-full border-0 border-b border-black/15 bg-transparent px-0 py-3 text-primary outline-none transition-colors placeholder:text-muted/60 focus:border-gold'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='text-xs font-semibold uppercase tracking-[0.15em] text-primary'
                >
                  Email
                </label>

                <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='you@example.com'
                  className='mt-3 w-full border-0 border-b border-black/15 bg-transparent px-0 py-3 text-primary outline-none transition-colors placeholder:text-muted/60 focus:border-gold'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='organisation'
                className='text-xs font-semibold uppercase tracking-[0.15em] text-primary'
              >
                Organisation
              </label>

              <input
                id='organisation'
                name='organisation'
                type='text'
                placeholder='School or organisation'
                className='mt-3 w-full border-0 border-b border-black/15 bg-transparent px-0 py-3 text-primary outline-none transition-colors placeholder:text-muted/60 focus:border-gold'
              />
            </div>

            <div>
              <label
                htmlFor='enquiry'
                className='text-xs font-semibold uppercase tracking-[0.15em] text-primary'
              >
                What can we help with?
              </label>

              <select
                id='enquiry'
                name='enquiry'
                defaultValue=''
                className='mt-3 w-full border-0 border-b border-black/15 bg-transparent px-0 py-3 text-primary outline-none transition-colors focus:border-gold'
              >
                <option value='' disabled>
                  Select an option
                </option>

                {enquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor='message'
                className='text-xs font-semibold uppercase tracking-[0.15em] text-primary'
              >
                Message
              </label>

              <textarea
                id='message'
                name='message'
                rows={5}
                placeholder='Tell us a little about what you need...'
                className='mt-3 w-full resize-none border-0 border-b border-black/15 bg-transparent px-0 py-3 text-primary outline-none transition-colors placeholder:text-muted/60 focus:border-gold'
              />
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='group inline-flex items-center gap-4 bg-primary px-7 py-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-gold disabled:cursor-not-allowed disabled:opacity-50'
            >
              {isSubmitting ? 'Sending...' : 'Send enquiry'}

              {!isSubmitting && (
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
                />
              )}
            </button>

            {status.type && (
              <p
                role='status'
                className={`mt-4 text-sm ${
                  status.type === 'success' ? 'text-green-700' : 'text-red-600'
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
