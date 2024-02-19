import { NavLink } from "react-router-dom";

import logo from "../../assets/iconWhealthHealth.png";

function Header() {
  return (
    <div className="nav-wrapper">
      <div className="logo-wrapper">
        <img
          src={logo}
          alt="Whealth Health log Logo"
          className="nav-logo vertical-center"
        />
        <h1>Wealth Health</h1>
      </div>
      <h2>HRnet</h2>
      <nav className="nav vertical-center">
        <NavLink
          className={({ isActive }) => (isActive ? "nav-active" : "nav-link")}
          to="/"
        >
          Create <br /> Employee
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-active" : "nav-link")}
          to={"/EmployeeList"}
        >
          Employee <br />
          List
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
