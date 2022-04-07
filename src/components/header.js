import React from "react"

import logo from "../assets/logo.svg"

function Header() {
  return (
    <nav className="lg:flex lg:flex-wrap lg:items-center lg:justify-between lg:py-16 lg:mb-40">
      <div className="h-300 w-300 flex items-center justify-center lg:pt-0 pt-10">
        <img className="h-54 w-278" src={logo} alt="GSF Global Summit logo" />
      </div>
      <div className="flex items-center justify-center lg:mt-0 mt-6">
        <button className="text-primary-light text-sm font-bold py-3.5 px-8 mr-4">
          Learn more
        </button>
        <button className="bg-secondary-default text-gray-darkest text-sm font-bold py-3.5 px-8 rounded-lg">
          Register
        </button>
      </div>
    </nav>
  )
}

export default Header
