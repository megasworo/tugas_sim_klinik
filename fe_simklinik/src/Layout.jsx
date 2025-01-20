import Navbar from "./Components/partials/Navbar";
import Sidebar from "./Components/partials/Sidebar";

const layout = ({children}) => {
    return (
        <>
        <div>
      <Navbar
        username="username"
        image="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
      />

      <div className="fixed w-screen bg-[#F5F5F5]">
        <div className={`flex`}>
          <Sidebar />
          <div className=" w-full h-screen bg-slate-100 p-10">
            {children}
            <input type="text" className="w-full"/>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default layout;