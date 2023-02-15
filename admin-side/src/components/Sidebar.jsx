import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="Sidebar h-screen sticky top-0">
      <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6">
          <img src="" alt="" />
        </div>
        <nav className="text-white text-base font-semibold pt-3">
          <NavLink to={"/"} className="active-nav-link">
            <a href="index.html" className="flex items-center text-white py-4 pl-6 nav-item">
              <i className="fas fa-tachometer-alt mr-3"></i>
              Dashboard
            </a>
          </NavLink>
          <NavLink to={"categories"} className="active-nav-link">
            <a href="blank.html" className="flex items-center text-white hover:opacity-100 py-4 pl-6 nav-item">
              <i className="fas fa-sticky-note mr-3"></i>
              Categories
            </a>
          </NavLink>
          <a href="tables.html" className="flex items-center text-white hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-table mr-3"></i>
            Register Admin
          </a>
          <a href="forms.html" className="flex items-center text-white hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-align-left mr-3"></i>
            Sign Out
          </a>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;
