import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export default function classes(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
