import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import {motion} from 'motion/react'

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (e) => {
      e.preventDefault();
      setResult("Sending....");
      const formData = new FormData(e.target);

      formData.append("access_key", "23cf47c0-00b4-45e0-8f7b-3994abbb2b9a");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        e.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 font-Ovo text-lg"
      >
        Connect With Me
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mb-2 font-Ovo text-5xl"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center font-Ovo max-w-2xl mx-auto mt-5 mb-12 "
      >
        I am always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Feel free to reach out through
        any of the platforms below, and I will get back to you as soon as
        possible.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8 ">
          <motion.input
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            type="text"
            placeholder="Enter Your Name"
            required
            name="name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          />
          <motion.input
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          />
        </div>
        <motion.textarea
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9}}
          rows="6"
          name="message"
          placeholder="Enter Your Message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-500 rounded-md bg-white mb-6  dark:bg-darkHover/30 dark:border-white/90 "
        ></motion.textarea>
        <motion.button
          whileHover={{ scale:1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover mx-auto hover:bg-black duration-500 "
        >
          Submit{" "}
          <Image src={assets.right_arrow_white} alt="icon" className="w-4" />
        </motion.button>

        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
}

export default Contact