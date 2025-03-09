"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/Logo.png";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn } = useUser();
  const pathName = usePathname();
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 z-1000 px-8">
      <div className="container flex h-16 items-center px-4 mx-auto justify-between">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 md:w-12 md:h-12 relative">
            <Image
              src={logo}
              alt="logo"
              className="object-contain group-hover:scale-105 transition-transform"
              fill
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            Features
          </Link>
          <Link
            href="#blog"
            className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            Blog
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            About
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            FAQ
          </Link>
          <Link
            href="#team"
            className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            Team
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="z-1000">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Auth */}
          {isSignedIn ? (
            <>
              {/* Dashboard Button - Visible when not on /dashboard */}
              {pathName !== "/dashboard" && (
                <Button
                  variant="default"
                  className="bg-gradient-to-r from-primary cursor-pointer to-blue-600 hover:opacity-90 transition-opacity"
                >
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              )}
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              />
            </>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="default"
                  className="bg-gradient-to-r from-primary cursor-pointer to-blue-600 hover:opacity-90 transition-opacity"
                >
                  Get Started
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 z-1000">
                <DropdownMenuItem
                  onClick={() => {router.push("/sign-up?role=Student")
                    console.log("hello");
                    
                  }}
                  className="hover:bg-muted"
                >
                  Student
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => router.push("/sign-up?role=Instructor")}
                  className="hover:bg-muted cursor-pointer"
                >
                  Instructor
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20"
            />
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              className="absolute top-16 left-0 right-0 bg-background border-b z-30"
            >
              <div className="flex flex-col space-y-4 p-4">
                <Link
                  href="#features"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 hover:bg-muted rounded-lg"
                >
                  Features
                </Link>
                <Link
                  href="#blog"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 hover:bg-muted rounded-lg"
                >
                  Blog
                </Link>
                <Link
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 hover:bg-muted rounded-lg"
                >
                  About
                </Link>
                <Link
                  href="#faq"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 hover:bg-muted rounded-lg"
                >
                  FAQ
                </Link>
                <Link
                  href="#team"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 hover:bg-muted rounded-lg"
                >
                  Team
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
