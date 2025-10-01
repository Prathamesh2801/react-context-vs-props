import React from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext1"; // ✅

export default function Profile() {
  const { logout } = useUser(); // ✅ Direct access

  return (
    <div className="dropdown text-end">
      <a
        href="#"
        className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          className="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
          />
        </svg>
      </a>
      <ul className="dropdown-menu text-small">
        <li>
          <NavLink className="dropdown-item" to="/profilePage">
            Profile
          </NavLink>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button className="dropdown-item" onClick={logout}> {/* ✅ Better than <a> */}
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
}