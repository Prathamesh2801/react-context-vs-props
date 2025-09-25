import React from "react";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Navbar() {
  const { user,toggleTheme ,theme } = useContext(UserContext);
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="currentColor"
              className="bi bi-infinity"
              viewBox="0 0 16 16"
            >
              <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916z" />
            </svg>
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink to="/" className="nav-link px-2 link-secondary">
              Home
            </NavLink>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              About
            </a>
          </li>
        </ul>

        <div className=" text-end">
          {user && user.un.trim() ? (
            <div className="d-flex gap-4">
              <span>Welcome {user.un}</span>
              <Profile />
            </div>
          ) : (
            <NavLink
              type="button"
              className="btn btn-outline-primary me-2"
              to="/login"
            >
              Sign-Up
            </NavLink>
          )}
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={toggleTheme}
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
           {theme ==="light" ? "🌑 Dark Mode":"☀ Light Mode"}
          </label>
        </div>
      </header>
    </div>
  );
}
