import React from "react"

function SubscribeCard() {
  return (
    <div className="bg-subscribe-card-color p-12 rounded-xl lg:w-9/12 m-auto">
      <h1 className="text-white font-bold text-3xl text-center">
        <span className="text-secondary-default mr-2">Subscribe</span>
        to the GSF Newsletter
      </h1>
      <input
        type="email"
        placeholder="example@domain.com"
        className="opacity-70 rounded-lg p-3 text-white bg-subscribe-input-color flex mx-auto mt-6 lg:w-6/12"
      />
      <button className="bg-secondary-default text-gray-darkest text-sm font-bold rounded-lg flex mx-auto mt-6 py-3.5 px-8">
        Sign Up
      </button>
    </div>
  )
}

export default SubscribeCard
