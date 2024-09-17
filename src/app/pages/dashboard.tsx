"use client"; // Add this directive to indicate that this is a client component

import { useState } from "react";
import Header from "../components/header";
import SideNavBar from "../components/sideNavbar";
const dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleSidebarToggle = (isOpen: boolean) => {
    setSidebarOpen(isOpen);
  };

  return (
    <div className="flex">
      <SideNavBar onToggle={handleSidebarToggle} />
      <div
        className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
          sidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <Header />
        {/* Main Content */}
        <h1 className="text-2xl font-semibold">Main Content</h1>
        <p>
          This is the main content area. Adjust the sidebar width and content
          accordingly.
        </p>
      </div>
    </div>
  );
};
export default dashboard;
