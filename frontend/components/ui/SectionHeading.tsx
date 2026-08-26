type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div
      className={`
        max-w-2xl
        ${align === 'center' ? 'mx-auto text-center' : ''}
      `}
    >
      {eyebrow && (
        <span className='mb-4 block text-sm font-semibold uppercase tracking-[0.18em] text-primary'>
          {eyebrow}
        </span>
      )}

      <h2 className='text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl'>
        {title}
      </h2>

      {description && (
        <p className='mt-5 text-base leading-7 text-muted sm:text-lg'>
          {description}
        </p>
      )}
    </div>
  );
}
