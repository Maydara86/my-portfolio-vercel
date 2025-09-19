import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import dynamic from 'next/dynamic';

const BackToTop = dynamic(() => import('@/components/BackToTop'), { ssr: false });

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohamed Cherif - Full-Stack Web Developer',
  description: 'Passionate full-stack web developer creating modern, scalable web applications with cutting-edge technologies. Specialized in React, Next.js, Node.js, and more.',
  keywords: 'web developer, full-stack developer, React, Next.js, Node.js, JavaScript, TypeScript, MongoDB, PostgreSQL',
  authors: [{ name: 'Mohamed Cherif' }],
  creator: 'Mohamed Cherif',
  publisher: 'Mohamed Cherif',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mohamedcherif.dev',
    title: 'Mohamed Cherif - Full-Stack Web Developer',
    description: 'Passionate full-stack web developer creating modern, scalable web applications with cutting-edge technologies.',
    siteName: 'Mohamed Cherif Portfolio',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Mohamed Cherif - Full-Stack Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Cherif - Full-Stack Web Developer',
    description: 'Passionate full-stack web developer creating modern, scalable web applications with cutting-edge technologies.',
    images: ['/images/profile.jpg'],
    creator: '@mohamedcherif',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/android-chrome-512x512.png" />

        {/* Social / Open Graph metadata */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mohamed Cherif - Full-Stack Web Developer" />
        <meta property="og:description" content="Passionate full-stack web developer creating modern, scalable web applications with cutting-edge technologies." />
        <meta property="og:image" content="/images/profile.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mohamed Cherif - Full-Stack Web Developer" />
        <meta name="twitter:description" content="Passionate full-stack web developer creating modern, scalable web applications with cutting-edge technologies." />
        <meta name="twitter:image" content="/images/profile.jpg" />

        {/* Theme color (fallback) */}
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}