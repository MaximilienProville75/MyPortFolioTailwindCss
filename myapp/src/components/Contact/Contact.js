import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <div
      className="bg-purple-900 pt-20 relative flex flex-row pb-20  custombp:p-0"
      id="Contact"
    >
      {/* Map System */}
      <div className="w-7/12 relative ring-8 ring-purple-500 h-auto ml-5 rounded-xl shadow-purple-300/80 shadow-2xl custombp:w-full custombp:p-5 custombp:hidden">
        <div className="w-screen">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0 rounded-xl"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Paris+&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="absolute flex bg-gray-900 w-auto m-2 p-5 rounded shadow-md bottom-0 shadow-purple-300/80 ">
            <div className="AddressInfos">
              <h2 className="text-gray-200 font-bold text-xl first-letter:text-purple-500 mb-2">
                ADDRESS
              </h2>
              <p className="AddressDesc">
                Claude Decaen St. <br />
                Paris, 75012
              </p>
            </div>
            <div className="ml-10">
              <h2 className="font-bold text-xl text-gray-200 first-letter:text-purple-500">
                EMAIL
              </h2>
              <a className="leading-relaxed text-purple-500">
                maximilien.proville77@gmail.com
              </a>
              <h2 className="font-bold text-xl text-gray-200 first-letter:text-purple-500 mt-5">
                PHONE
              </h2>
              <p className="text-gray-400">+33 7 68 55 02 14</p>
            </div>
          </div>
        </div>
      </div>
      {/* ContactForm */}
      <form
        netlify
        name="contact"
        className="ml-10 bg-zinc-900/80 p-10 w-full mr-5  flex flex-col ring-8 ring-purple-500 h-auto rounded-xl shadow-purple-300/80 shadow-2xl custombp:m-5 custombp:mb-10"
        onSubmit={handleSubmit}
      >
        <FontAwesomeIcon
          icon={faAddressCard}
          className="text-7xl text-purple-500 m-auto mb-5"
        />
        <h2 className="text-5xl font-bold text-purple-500 text-center">
          Hire Me
        </h2>
        <p className="text-lg mt-5 mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div className="mb-4">
          <label htmlFor="name" className="Name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-gray-500 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="Email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-500 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="FormInfos">
          <label htmlFor="message" className="Message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full bg-gray-500 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="mt-4 text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
