import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Experience = () => {
  const experiences = [
    {
      company: "Vision Reality, London, UK",
      role: "MERN Stack Developer",
      website: "https://visionreality.co.uk",
      duration: "February 2024 - Present",
      description:
        "Building scalable web applications and delivering tailored solutions for real estate clients using modern JavaScript stacks.",
    },
    // {
    //   company: "PharmaPOS, Bangladesh",
    //   role: "Co-Founder",
    //   website: "http://pharmapos-bd.netlify.app",
    //   duration: "April 2025 - Present",
    //   description:
    //     "Leading the development of a POS system tailored for pharmacies, improving inventory, billing, and customer management.",
    // },
  ];

  return (
    <div id="experience" className="pb-16 px-6 md:px-16 lg:px-24">
      <SectionTitle title="Experience" />
      <div className="relative border-l border-gray-700 pl-6 max-w-6xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-12 relative"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1000"
            data-aos-once="true"
          >
            {/* Timeline marker */}
            <div className="absolute -left-[1.93rem] top-1 w-4 h-4 bg-white border-4 border-white rounded-full"></div>

            {/* Experience content */}
            <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:shadow-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
              <a
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:underline text-lg mt-1 inline-block"
              >
                {exp.company}
              </a>
              <p className="text-sm text-gray-400">{exp.duration}</p>
              <p className="text-gray-300 mt-3">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
