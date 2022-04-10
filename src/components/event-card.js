import React from "react"
import {
  EventArrow,
  Community,
  Virtual,
  Calendar,
  Time,
} from "../resources/icons.js"
import AUFlag from "../assets/flags/AU.svg"
import DEFlag from "../assets/flags/DE.svg"
import DKFlag from "../assets/flags/DK.svg"
import ESFlag from "../assets/flags/ES.svg"
import FRFlag from "../assets/flags/FR.svg"
import GBFlag from "../assets/flags/GB.svg"
import ILFlag from "../assets/flags/IL.svg"
import INFlag from "../assets/flags/IN.svg"
import ITFlag from "../assets/flags/IT.svg"
import JPFlag from "../assets/flags/JP.svg"
import SEFlag from "../assets/flags/SE.svg"
import USFlag from "../assets/flags/US.svg"
import EUFlag from "../assets/flags/EU.svg"

const countryFlags = {
  AU: AUFlag,
  DE: DEFlag,
  DK: DKFlag,
  ES: ESFlag,
  FR: FRFlag,
  GB: GBFlag,
  IL: ILFlag,
  IN: INFlag,
  IT: ITFlag,
  JP: JPFlag,
  SE: SEFlag,
  US: USFlag,
  EU: EUFlag,
}

function EventCard({ address, country, countryCode, date, time, eventType }) {
  return (
    <div className="flex flex-col items-center max-w-sm bg-primary-dark rounded-lg hover:-translate-y-2 transition-transform group">
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
          <img
            className="w-9 border-2 rounded-sm drop-shadow-md"
            src={countryFlags[countryCode]}
            alt={`${countryCode} Flag`}
          ></img>
        </div>
      )}
      {address && (
        <h5 className="text-lg font-extrabold text-secondary-default text-center">
          {address}
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
