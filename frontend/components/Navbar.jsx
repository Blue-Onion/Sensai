import React from "react";
import { Button } from "./ui/button";
import { SignInButton, SignUpButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarIcon } from "lucide-react";
import { checkuser } from "@/lib/checkUser";

const Navbar = async () => {
    await checkuser()
    return (
        <>
            <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
                <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/">
                        <Image src='/logo.png' alt="logo" width={200} height={60} className="h-12 w-auto py-1 object-contain" />
                    </Link>
                    <div className="flex items-center space-x-2 md:space-x-4">
                        <SignedIn>
                            <Link href="/dashboard">
                                <Button variant="outline">
                                    <LayoutDashboard className="h-4 w-4" />
                                    <span className="hidden md:block">Industry Insights</span>
                                </Button>
                            </Link>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button>
                                        <StarIcon className="h-4 w-4" />
                                        <span className="hidden md:block">Growth Tool</span>
                                        <ChevronDown className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        <Link href={"/resume"} className="flex items-center gap-2">
                                            <FileText className="h-4 w-4" />
                                            <span className="hidden md:block">Build Resume</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link href={"/interview"} className="flex items-center gap-2">
                                            <GraduationCap className="h-4 w-4" />
                                            <span className="hidden md:block">Interview Preparation</span>
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SignedIn>
                        <div className="flex items-center gap-4">
                            <SignedOut>
                                <SignInButton>
                                    <Button variant="outline">Sign In</Button>
                                </SignInButton>
                            </SignedOut>
                            <SignedIn>
                                <UserButton appearance={{
                                    elements: {
                                        avatarBox: "w-10 h-10",
                                        userButtonPopoverCard: "shadow-xl",
                                        userPreviewMainIdentifier: "font-bold"
                                    }
                                }} afterSignInUrl="/onboarding" />
                            </SignedIn>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
