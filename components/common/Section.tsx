import React, { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SectionProps {
  className?: string;
  title?: string;
  children: ReactNode;
}

const Section = ({ title = "", className, children }: SectionProps) => {
  return (
    <section className={cn("w-full mt-8", className)}>
      <div className="flex justify-center my-4">
        <h2 className="text-2xl">{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default Section;
