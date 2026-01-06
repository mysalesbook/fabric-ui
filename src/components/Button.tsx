// src/components/Button/Button.tsx
import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = "primary", ...props }: ButtonProps) {
  const base = "px-4 py-2 rounded font-medium";
  const variants = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-200",
    danger: "bg-red-600 text-white",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props} />
  );
}
