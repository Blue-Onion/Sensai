"use client";

import { SignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSignUp } from "@clerk/nextjs";

const Page = () => {
  const router = useRouter();
  const { isLoaded, signUp } = useSignUp();

  useEffect(() => {
    if (isLoaded && signUp?.status === "complete") {
      router.replace("/onboarding");
    }
  }, [isLoaded, signUp, router]);

  return <SignUp />;
};

export default Page;
