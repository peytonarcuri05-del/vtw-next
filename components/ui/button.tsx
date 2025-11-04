import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "ghost";
  size?: "default" | "lg" | "icon";
};

const base = "rounded-2xl px-4 py-2 text-sm font-medium transition border";
const variants = {
  default: "bg-white text-zinc-900 border-zinc-200 hover:opacity-90",
  secondary: "bg-zinc-900 text-zinc-100 border-zinc-700 hover:bg-zinc-800",
  ghost: "bg-transparent text-zinc-100 border-zinc-800 hover:bg-zinc-900/40"
};
const sizes = {
  default: "",
  lg: "text-base px-6 py-3",
  icon: "p-2 aspect-square"
};

export function Button({ variant = "default", size = "default", className = "", ...props }: Props) {
  return <button className={[base, variants[variant], sizes[size], className].join(" ")} {...props} />;
}
