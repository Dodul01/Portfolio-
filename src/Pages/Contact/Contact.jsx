import { useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mtd4y5f",
        "template_0u19nf4",
        formRef.current,
        "48YTEyINtlKmAGp3c"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className="min-h-screen px-6 text-white max-w-xl mx-auto">
      <SectionTitle title="Contact Me" />
      <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full p-3 bg-transparent border-b border-white outline-none text-white"
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="w-full p-3 text-white bg-transparent border-b border-white outline-none"
        />

        <input type="hidden" name="to_name" value="Dodul" />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="6"
          className="w-full p-3  text-white  bg-transparent border-b border-white outline-none"
        ></textarea>

        <button
          type="submit"
          className="bg-white hover:bg-opacity-90 text-black transition px-5 py-2  font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
