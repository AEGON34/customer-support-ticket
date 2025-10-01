import React from "react";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white shadow-md z-50 border-gray-300">
      <Container>
        <nav className=" px-8 py-4 md:flex justify-between items-center ">
          <h1 className= "text-center text-black md:text-xl md:text-left text-sm font-bold ">
            CS — Ticket System
          </h1>
          <div className="md:flex hidden items-center gap-6">
            <a href="#" className="text-black">
              Home
            </a>
            <a href="#" className="text-black">
              FAQ
            </a>
            <a href="#" className="text-black">
              Changelog
            </a>

            <a href="#" className="text-black">
              Blog
            </a>
            <a href="#" className="text-black">
              Download
            </a>
            <a href="#" className="text-black">
              Contact
            </a>
            <button className="btn bg-[linear-gradient(#632EE3,#9F62F2)] text-white px-4 py-2 rounded-lg hover:cursor-pointer">
              + New Ticket
            </button>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
