import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'outline';
  className?: string;
};

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const styles =
    variant === 'primary'
      ? 'bg-primary text-white hover:bg-primary-soft'
      : 'border border-primary/30 text-primary hover:border-primary hover:bg-primary hover:text-white';

  const classes = `
    inline-flex items-center justify-center
    px-6 py-3.5
    text-sm font-medium
    transition-all duration-300
    ${styles}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type='button' className={classes}>
      {children}
    </button>
  );
}
