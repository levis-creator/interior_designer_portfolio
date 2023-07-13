import { AiOutlineCopyright } from "react-icons/ai"; 
import { contactData } from "@/api/contactData";
import React from "react";

const Footer = ({className, className1, className2}) => {
  return (
    <footer className={`bg-black text-white px-3 py-2 ${className}`}>
      <div className={className1}>
        <ul className="flex gap-2 text-2xl">
          {contactData.map((items,i) => (
            <li key={i}><a href={items.link}>{items.icon}</a></li>
          ))}
        </ul>
        <div className={`inline-flex items-center gap-2 ${className2}`}>
            <span>Copyright </span> <AiOutlineCopyright />{new Date().getFullYear()}
             <span> 
             by Alliya concepts
                </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
