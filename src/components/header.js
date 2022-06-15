import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import logo from "../assets/logo.svg"

function Header({ isLive }) {
  return (
    <nav
      className={`md:flex md:flex-wrap md:items-center md:justify-between lg:py-16 ${
        isLive ? "lg:mb-0" : "lg:mb-40"
      }`}
    >
      <div className="h-300 w-300 flex items-center justify-center lg:pt-0 pt-10">
        <img className="h-54 w-278" src={logo} alt="GSF Global Summit logo" />
      </div>
      <div className="flex items-center justify-center lg:mt-0 mt-6">
        <a
          href="https://greensoftware.foundation/"
          target="_blank"
          rel="noreferrer"
          className="text-primary-light text-sm font-bold py-3.5 px-8 mr-4 hover:text-primary-lighter transition-colors"
        >
          Learn more
        </a>
        <button
          onClick={() => scrollTo("#events")}
          className="bg-secondary-default text-gray-darkest text-sm font-bold py-3.5 px-8 rounded-lg hover:bg-btn-hover transition-colors"
        >
          Register
        </button>
      </div>
    </nav>
  )
}

export default Header
