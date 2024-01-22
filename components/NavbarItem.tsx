import React from "react";

interface NavbarItemProps {
  label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <div className="text-white text-sm cursor-pointer hover:text-gray-300">
      {label}
    </div>
  );
};

export default NavbarItem;
