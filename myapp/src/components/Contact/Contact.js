import React from "react";

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
    <div className="bg-purple-900 pt-20 relative" id="Contact">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Rue+Claude+Decaen&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="Information">
            <div className="AddressInfos">
              <h2 className="AddressTitle">ADDRESS</h2>
              <p className="AddressDesc">
                Claude Decaen St. <br />
                Paris, 75012
              </p>
            </div>
            <div className="ContactsInfos">
              <h2 className="EmailTitle">EMAIL</h2>
              <a className="EmailDesc">maximilien.proville77@gmail.com</a>
              <h2 className="PhoneTitle">PHONE</h2>
              <p className="PhoneNb">+33 7 68 55 02 14</p>
            </div>
          </div>
        </div>
      </div>
      {/* ContactForm */}
      <form netlify name="contact" className="Contact" onSubmit={handleSubmit}>
        <h2>Hire Me</h2>
        <p>Short Motivational Speech</p>
        <div className="FormInfos">
          <label htmlFor="name" className="Name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="NameInp"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="FormInfos">
          <label htmlFor="email" className="Email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="EmailInp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="FormInfos">
          <label htmlFor="message" className="Message">
            Message
          </label>
          <textarea
            id="message"
            className="Message"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" className="SubmitForm">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
