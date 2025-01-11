import React from "react";
import bgImage from "../../assets/Update Photo/contact.jpg";

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className="bg-cover container mx-auto bg-center bg-no-repeat bg-fixed py-16 px-4 min-h-screen"
    >
      <div className="bg-black/50 py-16 px-4 container mx-auto">
        <div className="container mx-auto text-center">
          <h3 className="text-[#d1a36e] text-sm uppercase border-l-2 border-b-2 w-36 mx-auto border-[#d1a36e] font-semibold mb-2">
            Have a Question?
          </h3>
          <h2 className="text-4xl font-bold text-white mb-4">Email Us</h2>
          <p className="text-[#fdf6ef] max-w-xl mx-auto mb-8">
            Each tour we do is bespoke to fit your needs, so if you have any
            questions at all drop us an email, we'd love to hear from you!
          </p>

          <form className="space-y-6">
            {/* Name and Email */}
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="bg-[#302E2F] w-full md:w-1/2 rounded-full px-6 py-3 text-white font-style outline-none focus:ring-2 focus:ring-[#d1a36e]"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-[#302E2F] w-full md:w-1/2 rounded-full px-6 py-3 text-white font-style outline-none focus:ring-2 focus:ring-[#d1a36e]"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder="Enter Your Message"
                className="bg-[#302E2F] font-style text-white w-full rounded-xl px-6 py-4  outline-none focus:ring-2 focus:ring-[#d1a36e] h-40"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#c28d55] text-white uppercase font-semibold py-3 px-8 rounded-full hover:bg-[#a5723e] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
