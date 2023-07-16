import { content } from "@/api/content";
import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="py-[87px] px-3 bg-slate-50 min-h-screen lg:flex lg:justify-center">
      <div className="relative  lg:w-3/4">
        <div className="lg:absolute  lg:w-[600px]  ">
          <ContactCard image={content[2].image} />
        </div>
        <div className="mt-10 lg:mt-56 lg:w-3/4 lg:ml-36 pt-8 ">
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
