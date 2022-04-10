import React from "react"
import { EventArrow, Virtual } from "../resources/icons.js"

function EventCard({ date, time }) {
  return (
    <div className="flex flex-col items-center bg-primary-dark rounded-lg hover:-translate-y-2 transition-transform group">
      <div className="flex items-center">
        <span className="text-secondary-default mr-2">
          <Virtual />
        </span>
        <p class="my-6 text-base font-normal text-white text-center">
          Virtual event
        </p>
      </div>
      <div className="py-4 px-4 mb-2 text-xs text-center">
        <h5 className="text-3xl text-secondary-default uppercase font-bold">
          {date}
        </h5>
        <h5 className="text-lg text-white"> {time}</h5>
      </div>
      <div className="inline-flex text-primary-lighter rounded-lg pb-4 group-hover:translate-x-1 transition-transform">
        <EventArrow />
      </div>
    </div>
  )
}

export default EventCard
