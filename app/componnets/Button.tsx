import React from "react";
import { GoArrowUpRight } from "react-icons/go";

type ButtonTypes = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface IProps extends ButtonTypes {
  children: React.ReactNode;
  animation?: boolean;
  icon?: any;
}

export default function Button(props: IProps) {
  return (
    <button
      {...props}
      className={`bg-[#edb932] text-xs py-[12px] relative flex-center gap-3 overflow-hidden px-[45px] group/readmore tracking-wider font-light ${props.className}`}
    >

      {props.animation ? (
        <>
          <div className="z-0 size-full bg-[#7c007c8a] absolute right-0 -left-full group-hover/readmore:left-0 transition-all duration-500"></div>
          <span className="z-10 group-hover/readmore:text-white transition-all duration-300">
            {props.children}
          </span>
          {props.icon ? (
            props.icon
          ) : (
            <GoArrowUpRight
              className="z-10 group-hover/readmore:rotate-45 group-hover/readmore:text-white transition-all duration-500"
              size={16}
            />
          )}
        </>
      ) : (
        <span>{props.children}</span>
      )}

      {/* </Button> */}
    </button>
  );
}
