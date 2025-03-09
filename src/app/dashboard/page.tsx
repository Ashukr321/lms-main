"use client";
import InstructorDashboard from "@/components/InstructorDashboard";
import StudentDashboard from "@/components/StudentDashboard";
import { useUser } from "@clerk/nextjs";

export default function Dashboard() {
  const { user } = useUser();

  // Add Loader
  if (!user) return <p className="mt-24">Loading...</p>;

  return user?.unsafeMetadata?.role === "Student" ? (
    <StudentDashboard user={user} />
  ) : (
    <InstructorDashboard user={user} />
  );
}
