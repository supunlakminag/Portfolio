import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptcha = (value) => {
    setCaptchaValue(value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please complete the CAPTCHA verification.");
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email Sent:", result.text);
          alert("Message sent successfully!");
          setIsSending(false);
          formRef.current.reset();
          setCaptchaValue(null);
        },
        (error) => {
          console.log("Error:", error);
          alert("Failed to send message. Try again later.");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="w-full mt-auto px-4 sm:px-6 lg:px-8" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-4xl mx-auto mt-16 flex items-center justify-center flex-col gap-8 sm:gap-12"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-blue-400 text-center"
        >
          Contact Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-500 text-lg text-center max-w-2xl leading-relaxed"
        >
          Let's build your idea!! Just drop an email. ⚡️
        </motion.p>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4 w-full max-w-md">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* ReCAPTCHA */}
          <ReCAPTCHA sitekey="6LfCuf0qAAAAAI8YwWFEsIoPANiM2fKa5VFtx7Pn" onChange={handleCaptcha} />

          <button
            type="submit"
            disabled={isSending}
            className="bg-gradient-to-r from-blue-800 to-indigo-500 px-8 py-4 rounded-full text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      {/* Footer */}
      <footer className="w-full mt-16 border-t border-gray-800/30 p-10 text-center">
        <div className="text-gray-600 text-sm sm:text-base hover:text-gray-300 transition-colors">
          © 2024 Supun Gamage. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Contact;
