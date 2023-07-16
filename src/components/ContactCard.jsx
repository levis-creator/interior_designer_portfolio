"use client";
import { AiOutlineLink } from "react-icons/ai";

import { contacts } from "@/api/contacts";
import { content } from "@/api/content";
import Image from "next/image";
import { contactData } from "@/api/contactData";
import { motion } from "framer-motion";

const ContactCard = ({ image, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className={`bg-white shadow-lg rounded-2xl p-6 relative mt-10  ml-12 w-3/4 sm:w-3/5 ${className}`}
    >
      <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg absolute -top-10 -left-10">
        <Image
          src={image.image}
          alt={image.title}
          width={0}
          height={0}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="pt-11 flex flex-col gap-4">
        <ul>
          {contacts.map((items, i) => (
            <li key={i}>
              {" "}
              <div className="flex items-center gap-2 ">
                <span className="text-slate-600">{items.icon}</span>
                <span className="font-light">{items.contact}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-right space-y-3">
          <div className="flex gap-2 items-center justify-end ">
            <h2>Social links </h2>
            <span>
              <AiOutlineLink />
            </span>
          </div>
          <ul className="flex gap-3 text-2xl text-slate-600 justify-end">
            {contactData.map((items, i) => (
              <motion.li
                whileHover={{
                  rotate: [0, 15, 0, -15, 0],
                  scale: 1.5,
                }}
                key={i}
              >
                <a href={items.link} className="hover:text-black">
                  {items.icon}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
