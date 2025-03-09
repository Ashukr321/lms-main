import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define public routes that should be accessible without authentication
const isPublicRoute = createRouteMatcher(["/", "/sign-up", "/sign-in"]);
// eg. const isPublicRoute = createRouteMatcher(["/", "/about", "/contact", "/pricing", "/course"]);

export default clerkMiddleware(async (auth, request) => {
  if (isPublicRoute(request)) {
    return NextResponse.next();
  }

  const { userId } = await auth();

  // If user is not authenticated and trying to access a protected route, redirect them
  if (!userId) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next(); // Allow access to authenticated routes
});

// Apply Clerk middleware to all routes except public ones
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
