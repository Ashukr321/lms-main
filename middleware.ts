import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth(); 

  const url = new URL(req.url); 

  // Allow public access to the home page `/`
  if (url.pathname === "/") {
    return NextResponse.next();
  }

  // Redirect unauthenticated users trying to access /dashboard
  if (!userId && url.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
});

// Apply Clerk middleware to all routes, but protect only specific ones
export const config = {
  matcher: ["/((?!_next|api|static|.*\\..*).*)"], // Applies middleware to all non-static files
};
