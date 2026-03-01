import React from "react";

interface IProps {
  isLinkPresent?: boolean;
  type?: "H1" | "H2" | "H3" | "H4";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ComponentToRender = ({
  type,
  children,
  className,
  style,
  isLinkPresent,
}: IProps) => {
  const default_class = "font-semibold tracking-wider text-xl text-gray-700";

  switch (type) {
    case "H1":
      return isLinkPresent ? (
        <h1
          style={style}
          dangerouslySetInnerHTML={{ __html: `${children}` }}
          className={`${default_class} ${className}`}
        ></h1>
      ) : (
        <h1 style={style} className={`${default_class} ${className}`}>
          {children}
        </h1>
      );
    case "H4":
      return isLinkPresent ? (
        <h4
          style={style}
          dangerouslySetInnerHTML={{ __html: `${children}` }}
          className={`${default_class} ${className}`}
        ></h4>
      ) : (
        <h4 style={style} className={`${default_class} ${className}`}>
          {children}
        </h4>
      );
    case "H3":
      return isLinkPresent ? (
        <h3
          style={style}
          dangerouslySetInnerHTML={{ __html: `${children}` }}
          className={`${default_class} ${className}`}
        ></h3>
      ) : (
        <h3 style={style} className={`${default_class} ${className}`}>
          {children}
        </h3>
      );
    default:
      return isLinkPresent ? (
        <h2
          style={style}
          dangerouslySetInnerHTML={{ __html: `${children}` }}
          className={`${default_class} ${className}`}
        ></h2>
      ) : (
        <h2 style={style} className={`${default_class} ${className}`}>
          {children}
        </h2>
      );
  }
};

export default function Heading({ type, children, className, style }: IProps) {
  return (
    <>
      <div className="font-semibold tracking-wider text-xl text-gray-700 hidden">
        This is for tailwind needed class
      </div>
      <ComponentToRender type={type} className={className} style={style}>
        {children}
      </ComponentToRender>
    </>
  );
}
