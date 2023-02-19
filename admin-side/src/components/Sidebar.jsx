import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../store/actions/actionCreator";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
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
            <a href="" className="flex items-center text-white hover:opacity-100 py-4 pl-6 nav-item">
              <i className="fas fa-sticky-note mr-3"></i>
              Categories
            </a>
          </NavLink>
          <NavLink to={"register-admin"}>
            <a href="" className="flex items-center text-white hover:opacity-100 py-4 pl-6 nav-item">
              <i className="fas fa-table mr-3"></i>
              Register Admin
            </a>
          </NavLink>
          <a onClick={logoutHandler} href="" className="flex items-center text-white hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-align-left mr-3"></i>
            Sign Out
          </a>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;
