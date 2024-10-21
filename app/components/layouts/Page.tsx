import { FC, ReactNode } from "react";
import { cn } from "../../lib/utils";

type PageProps = {
  children?: ReactNode;
  variant?: PageVariant;
  className?: string;
};

type PageVariant = "A4";

export const Page: FC<PageProps> = ({ children, variant, className }) => {
  return (
    <div
      className={cn(
        `relative bg-gray-900 z-30 overflow-hidden`,
        {
          "min-w-[210mm] w-[210mm] h-[297mm]": variant === "A4",
        },
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Page;
