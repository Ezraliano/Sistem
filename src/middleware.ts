import { clerkMiddleware } from "@clerk/nextjs/server";
import type { NextRequest } from 'next/server';
import { NextResponse } from "next/server";

const ClerkMiddleware = (req: NextRequest, event: any) => {
  const url = req.nextUrl.pathname;
  
  // Define public and ignored routes
  const publicRoutes = [
    '/',
    '/api/clerk-webhook',
    '/api/drive-activity/notification',
    '/api/payment/success',
  ];
  
  const ignoredRoutes = [
    '/api/auth/callback/discord',
    '/api/auth/callback/notion',
    '/api/auth/callback/slack',
    '/api/flow',
    '/api/cron/wait',
  ];

  if (publicRoutes.includes(url)) {
    return NextResponse.next();
  }

  if (ignoredRoutes.includes(url)) {
    return NextResponse.next();
  }

  return clerkMiddleware()(req, event);
};

export default ClerkMiddleware;

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
