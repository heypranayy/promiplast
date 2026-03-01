import { IList } from "@/types";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { useDispatch } from "react-redux";
import { setMobileSliderStateVisibility } from "../redux/slice/mobileSliderSlice";

interface IProps {
  itemInfo: IList;
  index: number;
  fontSize?: string;
}

export const CreateMobileMenu = ({ itemInfo, index, fontSize }: IProps) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleNavItemOnClick = () => {
    router.push(itemInfo.link);
    dispatch(setMobileSliderStateVisibility(false));
  }

  return (
    <>
      <div onClick={() => setIsProductsOpen(!isProductsOpen)} className="flex items-center justify-between">
        <button
          onClick={handleNavItemOnClick}
          style={{ fontSize: fontSize }}
          className="block"
          
        >
          {itemInfo.text.toUpperCase()}
        </button>
        <FaChevronDown
          size={12}
          className={`text-gray-600 ${isProductsOpen ? "rotate-180" : ""} ${itemInfo.submenu ? "block" : "hidden"} transition-all duration-500`}
        />
      </div>
      <div
        style={{ paddingLeft: `${index + 8}px` }}
        className={`w-full overflow-hidden space-y-2 ${
          itemInfo.submenu && isProductsOpen ? "max-h-[500px]" : "max-h-0"
        } transition-all duration-500`}
      >
        {itemInfo.submenu?.map((item) => (
          <CreateMobileMenu key={item.id} itemInfo={item} fontSize={`${index + 12}px`} index={index} />
        ))}
      </div>
    </>
  );
};
