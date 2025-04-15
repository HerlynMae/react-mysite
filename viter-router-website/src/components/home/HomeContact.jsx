import React from "react";

const HomeContact = () => {
  return (
    <>
      <section className="contact py-5 min-h-[800px] bg-blue-700 grid place-content-center">
        <div className="container">
          <h2 className="text-4xl font-bold text-white text-center mb-7">
            Contact Us
          </h2>
          <form className="bg-white flex flex-col p-7 rounded-xl">
            <label>Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="text" />
            <label>Message</label>
            <textarea></textarea>
            <button className="inline-block p-4 bg-blue-500 text-white font-bold text-xl rounded-xl hover:bg-blue-600 transition duration-200">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default HomeContact;
