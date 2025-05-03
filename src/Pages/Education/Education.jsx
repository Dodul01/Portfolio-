import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const EducationSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const educationData = [
    {
      title: "Diploma in Electronic Technology",
      institution: "Chittagong Polytechnic Institute",
      duration: "2018 – 2023",
      details:
        "A 4-year technical diploma focused on analog/digital electronics, embedded systems, circuit design, microcontroller programming, and hands-on lab work.",
    },
    {
      title: "Complete Web Development",
      institution: "Programming Hero",
      duration: "Completed",
      achievement: "Black Belt Achiever",
      details:
        "Mastered HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. Built real-world full-stack projects with authentication and deployment.",
    },
    {
      title: "Next Level Web Development",
      institution: "Programming Hero",
      duration: "Completed",
      details:
        "Advanced topics including Next.js, TypeScript, Redux, Mongoose, performance optimization, Stripe integration, and production-grade architecture.",
    },
  ];

  return (
    <section className="bg-[#111111] text-white py-16 px-6">
      <div  id="education" className="max-w-6xl mx-auto">
        <SectionTitle title="Education" />
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold mb-1">{edu.title}</h3>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-sm text-[#888]">{edu.institution}</p>
                <p className="text-sm text-[#888]">
                  {edu.duration === "Completed" ? (
                    <span className="text-green-400 font-medium">
                      - Completed
                    </span>
                  ) : (
                    edu.duration
                  )}
                </p>
              </div>
              {edu.achievement && (
                <p className="text-sm text-green-400 font-medium mb-1">
                  {edu.achievement}
                </p>
              )}
              <p className="text-sm text-[#CACACA] leading-relaxed">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
