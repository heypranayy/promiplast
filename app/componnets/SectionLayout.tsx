import React from "react";

type SectionType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

interface IProps extends SectionType {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLayout(props: IProps) {
  return (
    <section
    {...props}
      className={`size-full h-[90vh] max-h-[650px] px-[var(--padding-both)] ${props.className}`}
    >
      {props.children}
    </section>
  );
}
