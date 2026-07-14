"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/onboarding");
    }
  }, [isSignedIn, router]);

  return <SignIn afterSignInUrl="/onboarding" />;
};

export default SignInPage;
