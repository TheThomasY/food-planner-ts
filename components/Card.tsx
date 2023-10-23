import { ReactNode } from "react";
import classes from "@/utils/classes";

type Props = {
  className?: string;
  hover?: boolean;
  key?: any;
  children: ReactNode;
};

export default function Card({ className, hover, key, children }: Props) {
  return (
    <div
      key={key}
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
