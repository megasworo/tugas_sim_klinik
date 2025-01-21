import { FaCaretDown } from "react-icons/fa6";
import SelectUserDropDown from "../select/selectUserDropDown";
import { useState } from "react";

const userDropDown = ({ username, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="cursor-pointer px-[10px] py-[3px] ">
        <div onClick={handleIsOpen} className="flex items-center gap-5">
          <div
            className="w-7 h-7 rounded-full overflow-hidden">
            <img src={image} alt="" />
          </div>
          <p>{username}</p>
          <FaCaretDown />
        </div>

        <div
          className={`absolute z-[1] top-16 right-9 bg-white p-[10px] outline outline-1 outline-slate-200 rounded-md ${
            !isOpen ? "hidden" : ""
          }`}>
          <SelectUserDropDown image={image} />
        </div>
      </div>
    </>
  );
};

export default userDropDown;
