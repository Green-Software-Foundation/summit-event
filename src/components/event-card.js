import React from "react"
import {
  EventArrow,
  Community,
  Virtual,
  Calendar,
  Time,
} from "../resources/icons.js"
import AUFlag from "../assets/flags/AU.inline.svg"
import DEFlag from "../assets/flags/DE.inline.svg"
import DKFlag from "../assets/flags/DK.inline.svg"
import ESFlag from "../assets/flags/ES.inline.svg"
import FRFlag from "../assets/flags/FR.inline.svg"
import GBFlag from "../assets/flags/GB.inline.svg"
import ILFlag from "../assets/flags/IL.inline.svg"
import INFlag from "../assets/flags/IN.inline.svg"
import ITFlag from "../assets/flags/IT.inline.svg"
import JPFlag from "../assets/flags/JP.inline.svg"
import SEFlag from "../assets/flags/SE.inline.svg"
import USFlag from "../assets/flags/US.inline.svg"
import EUFlag from "../assets/flags/EU.inline.svg"
import CNFlag from "../assets/flags/CN.inline.svg"

const countryFlags = {
  AU: <AUFlag />,
  DE: <DEFlag />,
  DK: <DKFlag />,
  ES: <ESFlag />,
  FR: <FRFlag />,
  GB: <GBFlag />,
  IL: <ILFlag />,
  IN: <INFlag />,
  IT: <ITFlag />,
  JP: <JPFlag />,
  SE: <SEFlag />,
  US: <USFlag />,
  EU: <EUFlag />,
  CN: <CNFlag />,
}

function EventCard({
  address,
  country,
  countryCode,
  date,
  time,
  eventType,
  day,
}) {
  return (
    <div className="flex flex-col items-center w-full sm:max-w-sm bg-primary-dark rounded-lg hover:-translate-y-2 transition-transform group">
      <div className="py-4 px-4 mb-2 text-xs font-bold text-white bg-primary-default w-full rounded-t-lg flex justify-between">
        <div className="flex items-center">
          <Calendar />
          <h5>{date}</h5>
        </div>
        <div className="flex items-center">
          <Time />
          <h5> {time}</h5>
        </div>
      </div>
      {countryCode && (
        <div className="mt-6 mb-3">
          <div className="w-9 border-2 rounded-sm drop-shadow-md flag-wrapper">
            {countryFlags[countryCode]}
          </div>
        </div>
      )}
      {address && (
        <h5 className="text-lg font-extrabold text-secondary-default text-center">
          {address} {day && <small>(Day {day})</small>}
        </h5>
      )}

      {country && (
        <h5 className="text-base font-extrabold text-white text-center">
          {country}
        </h5>
      )}
      <div className="flex items-center">
        {(eventType === "In-person" || eventType === "Hybrid") && (
          <span className="text-secondary-default mr-2">
            <Community />
          </span>
        )}
        {(eventType === "Virtual" || eventType === "Hybrid") && (
          <span className="text-secondary-default mr-2">
            <Virtual />
          </span>
        )}

        <p className="my-6 text-base font-normal text-white text-center">
          {eventType} event
        </p>
      </div>
      <div className="inline-flex text-primary-lighter rounded-lg pb-4 group-hover:translate-x-1 transition-transform">
        <EventArrow />
      </div>
    </div>
  )
}

export default EventCard
