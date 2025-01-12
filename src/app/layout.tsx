'use client';
import { ClerkProvider } from '@clerk/nextjs';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Toaster } from '@/components/ui/toaster';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/components/theme-provider';
import { Roboto, Roboto_Mono } from 'next/font/google';
import './globals.css';

const queryClient = new QueryClient();

const geistSans = Roboto({
  variable: '--font-roboto-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const geistMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider signInUrl="/sign-in" signUpUrl="/sign-up" signInFallbackRedirectUrl="/dashboard" afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>
        <NuqsAdapter>
          <html lang="en" suppressHydrationWarning>
            <body
              className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
            >
              <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                <div className="relative flex min-h-screen min-w-screen">
                  <main className="flex flex-grow mx-auto w-full">{children}</main>
                </div>
                <Toaster />
              </ThemeProvider>
            </body>
          </html>
        </NuqsAdapter>
      </QueryClientProvider>
    </ClerkProvider>
  );
}
