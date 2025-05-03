import { Link } from "react-router-dom";
import profilePic from "../../Assets/profilePicture.png";
import { BiMailSend } from "react-icons/bi";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const About = () => {
  return (
    <div id="about" className="min-h-screen py-16 px-6 lg:px-24">
      <SectionTitle title="About Me" />
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        <div
          className="flex-1"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">Hi there 👋</h3>
          <p className="text-base lg:text-lg text-[#CACACA] font-medium leading-relaxed">
            I’m{" "}
            <span className="font-semibold text-white">
              Mozammel Hoque Dodul
            </span>
            , a passionate MERN Stack Developer based in Bangladesh, currently
            working at{" "}
            <a
              className="font-semibold text-blue-400 hover:underline"
              href="https://visionreality.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vision Reality
            </a>
            .
            <br />
            I specialize in transforming business logic into scalable and
            user-centric digital solutions. My expertise spans full-stack
            development, UI/UX thinking, and product engineering.
            <br />
            With almost 2 years in the web industry, I&apos;m committed to
            building high-performance web applications that solve real-world
            problems.
          </p>
          <Link to="/contact">
            <button className="mt-6 flex items-center gap-3 bg-white text-black px-5 py-3 font-semibold hover:bg-opacity-90 transition">
              <BiMailSend className="text-xl" />
              Send me a message
            </button>
          </Link>
        </div>

        {/* Image & Section Title */}
        <div
          className="flex-1 flex flex-col items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
        >
          <img
            src={profilePic}
            alt="Mozammel Hoque Dodul"
            className="rounded-2xl w-full max-w-[350px] lg:max-w-[380px] object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
