import UserDropDown from "../ui/user/UserDropdown";
import { useNavbar } from "../../store/NavbarContext.jsx";

const Navbar = ({username, image}) => {
 const {isOpen , setIsOpen} = useNavbar()

 const handleIsOpen = () => {
  setIsOpen(!isOpen)
 }

  return (
    <div className="flex justify-between py-[19px] px-[24px]">
      <div className="bg-white gap-[31px] flex items-center">
        <div onClick={handleIsOpen} className=" py-2 px-3 rounded-lg outline outline-2 outline-[#008131] flex flex-col gap-[5px] cursor-pointer">
            <div className="w-[15px] h-[3px] bg-[#008131]"/>
            <div className="w-[15px] h-[3px] bg-[#008131]"/>
            <div className="w-[15px] h-[3px] bg-[#008131]"/>
        </div>
        <img src="/logo1.png" alt="" className="h-[44px]"/>        
      </div>
      <UserDropDown username={username} image={image}/>
    </div>
  );
};

export default Navbar;
