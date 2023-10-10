import React from "react";

interface NavbarProps {
  handle: any;
  handleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ handle, handleSidebar }) => {
  return <div>this is navbar</div>;
};

export default Navbar;
