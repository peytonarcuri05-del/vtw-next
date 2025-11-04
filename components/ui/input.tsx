import React from "react";
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={["rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none", props.className].join(" ")} />;
}
