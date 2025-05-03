

import { useState } from "react";
import { BiBook } from "react-icons/bi";
import {
  FaAddressCard,
  FaGithub,
  FaGraduationCap,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { GrProjects, GrTrophy } from "react-icons/gr";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";

const navItems = [
  { id: "projects", label: "Projects", icon: <GrProjects /> },
  { id: "experience", label: "Experience", icon: <GrTrophy /> },
  { id: "education", label: "Education", icon: <FaGraduationCap /> },
  { id: "about", label: "About", icon: <FaAddressCard /> },
  { id: "/blogs", label: "Blogs", icon: <BiBook /> },
  { id: "/contact", label: "Contact", icon: <FiMail /> },
];

const socialLinks = [
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/+8801640755737",
    label: "WhatsApp",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/mozammel-hoque-dodul-842272257",
    label: "LinkedIn",
  },
  {
    icon: <FaXTwitter />,
    href: "https://x.com/Dodul01",
    label: "Twitter",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/Dodul01",
    label: "GitHub",
  },
];

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (id) => {
    if (id.startsWith("/")) {
      window.location.href = id;
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden xl:flex fixed top-0 left-0 h-screen w-20 flex-col justify-between py-6 z-50">
        <Link to="/" className="text-white text-3xl font-bold text-center">
          D
        </Link>

        <div className="flex flex-col items-center gap-8 mt-8">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col items-center cursor-pointer"
              onClick={() => handleClick(item.id)}
            >
              <div className="text-gray-400 text-xl group-hover:text-white transition">
                {item.icon}
              </div>
              <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-white text-black text-sm font-semibold px-2 py-1 rounded opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-2 transition-all duration-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-5">
          {socialLinks.map(({ icon, href, label }, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center cursor-pointer"
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-xl group-hover:text-white transition"
              >
                {icon}
              </a>
              <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-white text-black text-sm font-semibold px-2 py-1 rounded opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-2 transition-all duration-300">
                {label}
              </span>
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Toggle Button */}
      <div className="xl:hidden fixed top-5 left-5 z-50">
        <BiMenuAltRight
          className="text-white text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        />
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center gap-8">
          <button
              onClick={() => handleClick('/')}
              className="text-white text-xl font-semibold hover:text-gray-300 transition"
            >
              Home
            </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="text-white text-xl font-semibold hover:text-gray-300 transition"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Sidebar;
