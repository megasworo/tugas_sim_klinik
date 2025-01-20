const SidebarButton = ({icon, tittle, href}) => {
  return (
    <a href={href} className="flex items-center gap-[10px] hover:bg-[rgb(0,110,30)] px-3 py-3 cursor-pointer rounded-lg">
      <div>{icon}</div>
      <div className="text-white">{tittle}</div>
    </a>
  );
};

export default SidebarButton;
