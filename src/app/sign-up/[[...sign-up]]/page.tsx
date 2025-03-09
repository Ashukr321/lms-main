"use client";

import { SignUp } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function SignUpPage() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "Student"; 

  return (
    <div className="flex items-center justify-center h-screen lg:mt-16 md:mt-32 mt-40">
      <SignUp unsafeMetadata={{ role }} />
    </div>
  );
  
}
