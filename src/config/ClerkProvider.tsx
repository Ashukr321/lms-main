"use client";

import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <SignedIn>
        <UserButton />
        {children}
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </ClerkProvider>
  );
}
