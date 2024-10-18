import { FC, ReactNode } from "react";
import { cn } from "../../lib/utils";

type PageProps = {
  children?: ReactNode;
  variant?: PageVariant
}

type PageVariant = "A4";

export const Page: FC<PageProps> = ({ children, variant }) => {

  return (
    <div
      className={cn(`relative  bg-white border-t-2 border-r-2 border-b-2 border-l-2 overflow-hidden`, {
        'sm:w-full md:w-[210mm] md:h-[297mm] mb-2 mt-2 shadow-2xl': variant === 'A4'
      })}
    >
      {children}
    </div>
  );
}

export default Page;
