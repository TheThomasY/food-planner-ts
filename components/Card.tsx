import { ReactNode } from "react";
import classes from "@/utils/classes";

type Props = {
  className?: string;
  hover?: boolean;
  children: ReactNode;
};

export default function Card({ className, hover, children }: Props) {
  return (
    <div
      className={classes(
        "p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700  overflow-hidden",
        hover && "hover:bg-gray-100 dark:hover:bg-gray-700",
        className && className
      )}
    >
      {children}
    </div>
  );
}
