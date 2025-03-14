import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

interface NavbarLayoutProps {
  children?: ReactElement;
}

const NavbarLayout: React.FC<NavbarLayoutProps> = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex w-full h-16 md:h-14 border-b-4 border-b-emerald-950 bg-emerald-950 text-white items-center justify-center text-xl md:text-2xl font-bold">
        <p>AI Quiz Converter</p>
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default NavbarLayout;
