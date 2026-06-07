'use client'

import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface TitleProps {
    children: React.ReactNode;
    className?: string;
}

export default function Title({ children, className = "" }: TitleProps) {
    return (
        <h1
            className={twMerge(
                clsx(
                    "font-light text-xl uppercase tracking-widest text-[#b4947a]",
                    className
                )
            )}
        >
            {children}
        </h1>
    );
}