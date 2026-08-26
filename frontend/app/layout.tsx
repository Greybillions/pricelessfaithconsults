import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Priceless Faith Consult',
    template: '%s | Priceless Faith Consult',
  },
  description:
    'Empowering teachers, strengthening schools, and advancing educational excellence through practical resources, professional training, and consultancy services.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
