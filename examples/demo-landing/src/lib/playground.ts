import { notFound } from "next/navigation";

/** Playground pages are dev only. A production build serves them only when built with PLAYGROUND=1. */
export function guardPlayground() {
  if (process.env.NODE_ENV === "production" && process.env.PLAYGROUND !== "1") notFound();
}
