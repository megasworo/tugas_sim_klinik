import SidebarButton from "../ui/button/SidebarButton";
import { useNavbar } from "../../store/NavbarContext.jsx";

const Sidebar = () => {
const {isOpen} = useNavbar()
    return (
        <div className={` bg-[#008131] w-[400px] h-screen flex flex-col gap-[28px] p-7  ${!isOpen ? "-motion-translate-x-out-100 fixed" : "-motion-translate-x-in-100" } `}>
            <SidebarButton icon={""} tittle="Register Pasien" href={"/register-pasien"}/>
            <SidebarButton icon={""} tittle="Rawat Jalan" href={"/rawat-jalan"}/>
            <SidebarButton icon={""} tittle="Farmasi" href={"/farmasi"}/>
            <SidebarButton icon={""} tittle="Manajemen Kepegawaian" href={"man-kepegawaian"}/>
            <SidebarButton icon={""} tittle="Manajemen Farmasi" href={"man-farmasi"}/>
            <SidebarButton icon={""} tittle="Manajemen inventori Non Medis" href={"man-inv"}/>
            <SidebarButton icon={""} tittle="Manajemen tarif" href={"man-tarif"}/>
            <SidebarButton icon={""} tittle="Dashboard klinik" href={"klinik"}/>
            <SidebarButton icon={""} tittle="Pengaturan Aplikasi" href={"settings"}/>
        </div>
    )
}

export default Sidebar;