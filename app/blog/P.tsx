import React from "react";

type PType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

interface IProps extends PType {
  isLinkPresent?: boolean;
}

export default function P(params: IProps) {
  return params.isLinkPresent ? (
    <p
      dangerouslySetInnerHTML={{ __html: `${params.children}` }}
      className={`text-gray-600 leading-7 tracking-wide text-[15px] text-justify ${params.className}`}
    ></p>
  ) : (
    <p
      className={`text-gray-600 leading-7 tracking-wide text-[15px] text-justify ${params.className}`}
    >
      {params.children}
    </p>
  );
}
