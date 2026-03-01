import React from "react";
import { MdSwipeDownAlt } from "react-icons/md";

function ListOptions({
  className,
  type,
  options,
}: {
  className ? : string;
  type?: "H2" | "H3" | "H4";
  options: string[];
}) {
  const ComponentToLoad = ({ text }: { text: string }) => {
    if (type === "H2")
      return (
        <h2 dangerouslySetInnerHTML={{__html : text}} className="josefin-sans-400 text-gray-600 text-justify"></h2>
      );
    if (type === "H3")
      return (
        <h3 dangerouslySetInnerHTML={{__html : text}}  className="josefin-sans-400 text-gray-600 text-justify"></h3>
      );
    if (type === "H4")
      return (
        <h4 dangerouslySetInnerHTML={{__html : text}}  className="josefin-sans-400 text-gray-600 text-justify"></h4>
      );

    return (
      <span dangerouslySetInnerHTML={{__html : text}} className="josefin-sans-400 text-gray-600 text-justify">
      
      </span>
    );
  };

  return (
    <ul className={`w-full py-9 space-y-7 ${className}`}>
      {options.map((item, key) => (
        <li key={key} className="flex items-center gap-4">
          <div className="flexCenter">
            {/* <div className="h-7 w-7 bg-[#9283EA] rounded mt-1 flexCenter text-white something font-tex"> */}
              {/* {key + 1} */}
            {/* </div> */}
            {/* <SiNextra /> */}
            <MdSwipeDownAlt className="rotate-[270deg]" />
          </div>

          {<ComponentToLoad text={item} />}
        </li>
      ))}
    </ul>
  );
}

export default ListOptions;
