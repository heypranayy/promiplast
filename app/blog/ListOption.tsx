import React from "react";
import Heading from "./Heading";
import P from "./P";

interface IProps {
  list: {
    isLinkPresent?: boolean;
    heading?: string;
    description: string;
  }[];
}

export default function ListOption({ list }: IProps) {
  return (
    <ul className="w-full space-y-3">
      <p className="read-only:hidden text-[14.4px]"></p>
      {list.map((item, index) => (
        <li key={index}>
          {item.heading ? (
            <Heading
              isLinkPresent={item.isLinkPresent}
              style={{ fontSize: "14.4px" }}
              type="H4"
              className="float-left mr-2 text-[14.4px]"
            >
              {item.heading}
            </Heading>
          ) : null}
          <P isLinkPresent={item.isLinkPresent} className="text-[14.4px]">
            {item.description}
          </P>
        </li>
      ))}
    </ul>
  );
}
