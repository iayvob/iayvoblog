import { Github, Linkedin, WholeWord } from "lucide-react";
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
            <Link href={''}>
                <Github />
            </Link>
            <Link href={''}>
                <Linkedin />
            </Link>
            <Link href={''}>
                <WholeWord />
            </Link>
        </div>
        </footer>
    )
}