import React from 'react'
import {FiSearch} from 'react-icons/fi'
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className="bg-slate-200  shadow-md">
      <div className="flex items-center justify-between max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">D</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form
          action=""
          className="flex items-center bg-slate-100 p-3 rounded-lg"
        >
          <input
            type="text"
            name=""
            id=""
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            placeholder="Search..."
          />
          <FiSearch className="text-slate-400 text-xl" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className=" text-slate-700 hover:underline cursor-pointer">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
