"use client";

import Link from "next/link";
import {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string; // if provided, renders as a Link
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  className?: string;
} & (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

export default function Button({
  href,
  variant = "primary",
  size = "md",
  loading = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center disabled:cursor-not-allowed";

  let sizeClasses = "";
  switch (size) {
    case "sm":
      sizeClasses = "px-3 py-1 text-sm";
      break;
    case "md":
      sizeClasses = "px-6 py-2 text-base";
      break;
    case "lg":
      sizeClasses = "px-8 py-3 text-lg";
      break;
  }

  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses =
        "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400";
      break;
    case "secondary":
      variantClasses =
        "bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-400";
      break;
    case "outline":
      variantClasses =
        "border border-gray-400 text-gray-700 hover:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300";
      break;
  }

  const finalClass = `${base} ${sizeClasses} ${variantClasses} ${className}`;

  const spinner = (
    <svg
      className="animate-spin h-4 w-4 mr-2 text-current"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={finalClass}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {loading && spinner}
        {children}
      </Link>
    );
  }

  return (
    <button
      className={finalClass}
      disabled={loading}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {loading && spinner}
      {children}
    </button>
  );
}
