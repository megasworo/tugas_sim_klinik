import { IoIosLogOut } from "react-icons/io";

const SelectUserDropDown = ({ image }) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex items-center gap-4 hover:bg-slate-50 px-5 py-3 rounded-md">
        <div className="w-7 h-7 rounded-full overflow-hidden">
          <img src={image} alt="" />
        </div>
        Profile
      </div>

      <div className="flex items-center gap-4 hover:bg-red-100 px-5 py-3 rounded-md">
      <IoIosLogOut />
        Logout
      </div>
    </div>
  );
};

export default SelectUserDropDown;
