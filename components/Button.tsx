import { ButtonHTMLAttributes, ReactNode } from "react";
import classes from "@/utils/classes";

type buttonVariant = "regular" | "alt" | "dark" | "outline" | "link";
type buttonSize = "xs" | "sm" | "md" | "lg" | "xl";
type fullWidth = Boolean;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: buttonSize;
  variant?: buttonVariant;
  fullWidth?: fullWidth;
  children: ReactNode;
}

export default function Button({
  size = "md",
  fullWidth,
  variant = "regular",
  disabled,
  children,
  ...props
}: Props) {
  return (
    <button
      className={classes(
        "w-fit h-fit px-5 py-2.5 rounded-lg font-medium transition-all",
        "disabled:cursor-not-allowed disabled:opacity-50",
        fullWidth && "w-full",
        size === "xs" && "px-3 py-2 text-xs",
        size === "sm" && "px-3 py-2 text-sm",
        size === "md" && "px-5 py-2.5 text-sm",
        size === "lg" && "px-5 py-3 text-base",
        size === "xl" && "px-6 py-3.5 text-base",
        variant === "regular" &&
          "text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800",

        variant === "alt" &&
          "text-gray-900 focus:outline-none bg-white  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",

        variant === "dark" &&
          " bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",

        variant === "outline" &&
          "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800",

        variant === "link" &&
          "text-brand hover:underline disabled:no-underline",
        disabled && "text-primary-900 border-primary-950 hover:bg-inherit"
      )}
      {...props}
    >
      {children}
    </button>
  );
}
