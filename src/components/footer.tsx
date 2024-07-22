import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Earth, Linkedin, X } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer
            className="my-24 px-4 text-center text-gray-500"
        >
            <small 
                className="mb-2 block text-xs"
            >
                &copy; 2024 iayvob, All right reserved.
            </small>
            <p 
                className="text-xs"
            >
                <span
                    className="font-semibold"
                >About this website:</span> built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, shadcn, Framer Motion, React Email & Resend, Vercel hosting.
            </p>
        <div className="w-full flex justify-center gap-8 mt-6">
            <Link href={'https://github.com/iayvob'}>
                <GitHubLogoIcon className="size-6"/>
            </Link>
            <Link href={'https://www.linkedin.com/in/iayvob/'}>
                <Linkedin className="size-6"/>
            </Link>
            <Link href={'https://x.com/iayvob'}>
                <X className="size-6"/>
            </Link>
            <Link href={'https://iayvob.vercel.app'}>
                <Earth className="size-6"/>
            </Link>
        </div>
        </footer>
    )
}