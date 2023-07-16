"use client"

import { motion } from "framer-motion";
import React from "react";

const ContactForm = () => {
  return (
    <motion.div initial={{opacity:0}}  animate={{opacity:1}} className="bg-white px-6 shadow-md space-y-3 rounded-2xl  py-10">
      <h2 className="font-bold text-xl text-center ">Leave a message</h2>
      <form action="" className="flex  flex-col gap-3">
        <input
          type="text"
          name="username"
          required
          id=""
          placeholder="Enter name"
          className="w-full py-3 outline-none rounded-sm bg-slate-50  border-b-2 border-b-gray-200 focus:border-b-gray-500 px-2"
        />
        <input
          type="email"
          name="email"
          required
          id=""
          placeholder="Enter Subject"
          className="w-full py-3 outline-none rounded-sm bg-slate-50  border-b-2 border-b-gray-200 focus:border-b-gray-500 px-2"
        />
        <textarea
          placeholder="Message"
          name="message"
          required
          className="w-full py-3 outline-none rounded-sm bg-slate-50  border-b-2 border-b-gray-200 focus:border-b-gray-500 px-2"
        />

        <button className="bg-black w-fit text-white px-8  py-2 rounded-md mt-10">
          send
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
