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
          "md:min-w-[210mm] md:w-[210mm] sm:w-[100mm] lg:w-[210mm] w-[100mm] xl:w-[310mm] 2xl:w-[510mm] md:h-[297mm] lg:h-[297mm] sm:h-fit h-fit md:m-1 ":
            variant === "A4",
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Page;
