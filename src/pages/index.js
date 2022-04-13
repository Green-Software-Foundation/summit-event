import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import GlobalCard from "../components/global-event-card"
import EventCard from "../components/event-card"
import SubscribeCard from "../components/subscribe-card"

import heroImageDesktop from "../assets/heroImageDesktop.svg"
import heroImageTablet from "../assets/heroImageTablet.svg"
import heroImageMobile from "../assets/heroImageMobile.svg"
import greenGlobal from "../assets/green-global-summit.svg"
import section3Item1Img from "../assets/section3-item1-img.svg"
import section3Item2Img from "../assets/section3-item2-img.svg"
import subscribe from "../assets/subscribe.svg"
import grass from "../assets/grass.svg"
import host1 from "../assets/host1.svg"
import host2 from "../assets/host2.svg"
import host3 from "../assets/host3.svg"
import host4 from "../assets/host4.svg"
import host5 from "../assets/host5.svg"
import host6 from "../assets/host6.svg"
import host7 from "../assets/host7.svg"
import host8 from "../assets/host8.svg"

// Regional Events
import regionalEventsData from "../regional-events.yaml"
import closingEventsData from "../closing-events.yaml"

const Section1 = () => (
  <section className="lg:mt-0 mt-24">
    <div>
      <h1 className="text-xl md:text-2xl font-semibold text-secondary-lightest tracking-widest text-center mb-6">
        Green Software Foundation
      </h1>
    </div>

    <div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-secondary-lightest tracking-semigap text-center uppercase mb-6">
        Global Summit
      </h1>
    </div>

    <div>
      <h1 className="text-2xl md:text-3xl font-semibold text-secondary-default tracking-gap text-center uppercase">
        June 2022
      </h1>
    </div>

    <div className="-mt-72 hidden lg:block">
      <img src={heroImageDesktop} alt="Green Software Foundation" />
    </div>
    <div className=" hidden md:block lg:hidden">
      <img
        className="mx-auto"
        src={heroImageTablet}
        alt="Green Software Foundation"
      />
    </div>
    <div className="block md:hidden">
      <img
        className="mx-auto w-full"
        src={heroImageMobile}
        alt="Green Software Foundation"
      />
    </div>
  </section>
)

const Section2 = () => (
  <section className="flex-1 text-center md:flex md:text-left md:justify-between md:items-center md:mt-48 mt-24">
    <div className="md:w-7/12">
      <p className="font-extrabold text-5xl md:text-6xl lg:text-8xl text-secondary-default">
        Green <br></br>
        <span className="text-secondary-lightest">Global Summit</span>
      </p>
      <p className="text-lg lg:text-xl text-primary-light mt-8 md:mr-4 max-w-md mx-auto lg:max-w-none lg:mx-0">
        The Green Software Foundation Global Summit 2022 is a series of free
        events organized by Green Software Foundation members all around the
        globe that are passionate about sustainable software development,
        maintenance, and improvement.
      </p>
    </div>

    <div className="w-7/12 m-auto lg:w-12/12 mt-10 lg:mt-0 lg:ml-16 hidden md:block">
      <img src={greenGlobal} alt="Green Global Summit" />
    </div>
  </section>
)

const section3Data = [
  {
    title: "Event for Everybody",
    description:
      "No matter your location, time zone, Green Software Foundation membership status, or level of sustainable expertise, all are welcome to join. Regional events will be held between June 6 – 17, 2022 with in-person and online venues all around the globe. The closing ceremonies will bring all of us together in a virtual setting to celebrate this year’s Green Software Foundation Global Summit.",
    img: section3Item1Img,
  },
  {
    title: "Join Us",
    description:
      "Feel free to sign up for multiple events if they align with your schedule and make sure to register for the Closing Ceremony as well! Gain valuable insight, learn new skills, meet passionate community members, launch or join Green Software Foundation Meetup groups, and share information with your friends and colleagues.",
    img: section3Item2Img,
  },
]

const Section3 = () => (
  <section className="mt-32 lg:mt-52 ">
    {section3Data.map((item, i) => {
      const isEven = i % 2 === 0
      const [firstWord, ...restWordsArr] = item.title.split(" ")
      const restWords = restWordsArr.join(" ")
      return (
        <div
          key={item.title}
          className={` items-center lg:text-left lg:flex lg:justify-between ${
            i === section3Data.length - 1 ? "" : "mb-24 lg:mb-44"
          }`}
        >
          <div className={`${isEven ? "order-1" : "order-2"}`}>
            <img
              className="mt-4 lg:mt-0 w-7/12 mx-auto max-h-72 lg:max-h-full lg:mx-0 lg:w-full lg:max-w-none"
              src={item.img}
              alt={item.title}
            />
          </div>
          <div
            className={`${
              isEven ? "order-2" : "order-1"
            } lg:w-5/12 text-center lg:text-left`}
          >
            <h1 className="text-secondary-lightest font-extrabold text-4xl lg:text-6xl mt-6 lg:mt-0">
              <span className="text-secondary-default">{firstWord}</span>{" "}
              {restWords}
            </h1>
            <p className="text-primary-light text-base lg:text-xl mt-8 lg:mt-12 max-w-md mx-auto lg:max-w-none lg:mx-0">
              {item.description}
            </p>
          </div>
        </div>
      )
    })}
  </section>
)

const Section4 = () => (
  <section className="flex mt-28 lg:mt-12 justify-center">
    <div>
      <div>
        <img className="mx-auto w-36" src={grass} alt="Grass" />
      </div>
      <div className="m-8">
        <p className="text-2xl text-primary-light text-center font-bold">
          Join one or more of the following events below!
        </p>
      </div>
    </div>
  </section>
)

const Section5 = () => (
  <section className="mt-16 lg:mt-32" id="events">
    <h1 className="text-secondary-default text-4xl lg:text-5xl font-extrabold mb-8">
      Global{" "}
      <span className="text-secondary-lightest text-4xl lg:text-5xl font-extrabold">
        Events
      </span>
    </h1>
    {/* Card component */}
    <div className="grid gap-6 grid-cols-2">
      {closingEventsData.map(item => (
        <a
          key={`${item.time} ${item.date}`}
          href={item.eventLink}
          target="_blank"
          rel="noreferrer"
        >
          <GlobalCard date={item.date} time={item.time} />
        </a>
      ))}
    </div>
  </section>
)

const Section6 = () => (
  <section className="mt-16">
    <h1 className="text-secondary-default text-4xl lg:text-5xl font-extrabold mb-8">
      Regional{" "}
      <span className="text-secondary-lightest text-4xl lg:text-5xl font-extrabold">
        Events
      </span>
    </h1>
    {/* Card component */}
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {regionalEventsData
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map(item => (
          <a
            key={`${item.time} ${item.date}`}
            href={item.eventLink}
            target="_blank"
            rel="noreferrer"
          >
            <EventCard
              address={item.address}
              country={item.country}
              countryCode={item.countryCode}
              date={item.date}
              time={item.time}
              eventType={item.eventType}
            />
          </a>
        ))}
    </div>
  </section>
)

const Section7 = () => (
  <section className="mt-32 lg:mt-52">
    <div className="flex justify-center md:justify-between md:flex-none md:relative">
      <img
        className="md:absolute lg:bottom-full lg:top-full hidden md:block md:w-52 lg:w-64 md:top-16"
        src={subscribe}
        alt="Subscribe"
      />
    </div>
    <SubscribeCard />
  </section>
)

const hosts = [
  { logo: host1, name: "Accenture" },
  { logo: host2, name: "Avanade" },
  { logo: host3, name: "BCG" },
  { logo: host6, name: "Goldman Sachs" },
  { logo: host4, name: "Microsoft" },
  { logo: host7, name: "NTT Data" },
  { logo: host5, name: "Shell" },
  { logo: host8, name: "thoughtworks" },
]
const Section8 = () => (
  <section className="mt-32 lg:mt-52">
    <h1 className="text-secondary-default text-4xl lg:text-5xl font-extrabold tracking-wide text-center mb-4">
      Thanks{" "}
      <span className="text-secondary-lightest text-4xl lg:text-5xl font-extrabold tracking-wide">
        to our hosts
      </span>
    </h1>
    <div className="flex justify-center flex-wrap items-center">
      {hosts.map(host => (
        <div key={host.name} className="m-10 opacity-60">
          <img src={host.logo} alt={host.name} />
        </div>
      ))}
    </div>
  </section>
)

const IndexPage = () => (
  <Layout>
    <Seo />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
    <Section8 />
  </Layout>
)

export default IndexPage
