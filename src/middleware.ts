import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

import { NextRequest, NextResponse } from 'next/server';

const isOnboardingRoute = createRouteMatcher(['/onboarding']);
const isPublicRoute = createRouteMatcher(['/privacy-policy', '/terms-of-services']);
const isAdminRoute = createRouteMatcher(['/admin(.*)']);
const isDashboardRoute = createRouteMatcher(['/dashboard(.*)']);

// const isApiRoute = createRouteMatcher(['/api(.*)']);
const isWebhookRoute = createRouteMatcher(['/api/webhook/(.*)']);

export default clerkMiddleware(async (auth, request: NextRequest) => {
  const { userId, sessionClaims, redirectToSignIn } = await auth();

  if (isWebhookRoute(request)) {
    return NextResponse.next();
  }

  if (isPublicRoute(request)) {
    return NextResponse.next();
  }

  // For users visiting /onboarding, don't try to redirect
  if (userId && isOnboardingRoute(request)) {
    return NextResponse.next();
  }

  if (isAdminRoute(request)) {
    await auth.protect((has) => has({ role: 'org:admin' }));
  }

  // If the user isn't signed in and the route is private, redirect to sign-in
  if (!userId && !isPublicRoute(request)) return redirectToSignIn({ returnBackUrl: request.url });

  if (isDashboardRoute(request) && !userId) {
    return redirectToSignIn({ returnBackUrl: request.url });
  }

  if (isAdminRoute(request)) {
    await auth.protect((has) => has({ role: 'org:admin' }));
  }

  // Catch users who do not have `onboardingComplete: true` in their publicMetadata
  // Redirect them to the /onboading route to complete onboarding
  if (userId && !sessionClaims?.metadata?.onboardingComplete) {
    const onboardingUrl = new URL('/onboarding', request.url);
    return NextResponse.redirect(onboardingUrl);
  }

  // If the user is logged in and the route is protected, let them view.
  if (userId && !isPublicRoute(request)) return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
