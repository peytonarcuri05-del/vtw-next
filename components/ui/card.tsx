import React from "react";

export function Card({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={["rounded-2xl border border-zinc-800 bg-zinc-900/60", className].join(" ")}>{children}</div>;
}
export function CardHeader({ children }: React.PropsWithChildren) {
  return <div className="p-4">{children}</div>;
}
export function CardTitle({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return <h3 className={["font-semibold", className].join(" ")}>{children}</h3>;
}
export function CardContent({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={["p-4 pt-0", className].join(" ")}>{children}</div>;
}
