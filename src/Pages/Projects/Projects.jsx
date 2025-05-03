import { FaArrowRight } from "react-icons/fa";
import imageOne from "../../Assets/projectOne.png";
import imageTwo from "../../Assets/projectTwo.png";
import imageThree from "../../Assets/projectThree.png";
import { Link } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const projects = [
  {
    _id: "01",
    name: "MealBox",
    description:
      "MealBox is a personalized meal planning and delivery service that brings delicious, chef-prepared meals straight to your door. MealBox offers a variety of meal plans tailored to individual tastes and dietary preferences.",
    image: imageOne,
  },
  {
    _id: "02",
    name: "AutoNest",
    description:
      "AutoNest is a sleek, high-performance Car rental platform designed for showcasing and selling cars. Built with a modern UI, it focuses on clean aesthetics, intuitive navigation, and fast loading times to enhance user experience and drive conversions.",
    image: imageTwo,
  },
  {
    _id: "03",
    name: "BookEase",
    description:
      "A productivity app designed to organize daily tasks and boost efficiency with a clean UI.",
    image: imageThree,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="text-white py-20 px-4">
      <SectionTitle title="Projects" />
      <div className="max-w-6xl mx-auto space-y-24">
        {projects.map((project, index) => (
          <div
            key={project._id}
            className={`flex flex-col lg:flex-row ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            } items-center gap-10`}
          >
            {/* Image */}
            <div
              className="w-full lg:w-1/2 "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto max-h-[500px] rounded-xl shadow-lg object-cover"
              />
            </div>

            {/* Text */}
            <div
              className="w-full lg:w-1/2 space-y-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="flex items-center gap-3 text-secondary font-bold">
                <span className="text-lg">{project._id}</span>
                <div className="w-16 h-[2px] bg-secondary"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold">
                {project.name}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.description}
              </p>
              <Link to={`/project/${project._id}`}>
                <button className="inline-flex items-center gap-3 mt-4 bg-white text-black px-5 py-2 font-semibold hover:bg-opacity-90 transition">
                  Project Details <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-7">
        <Link to={"/projects"}>
          <button className=" bg-white/10 hover:bg-white hover:text-black text-white px-5 py-2 text-lg font-semibold shadow-lg transition-all">
            View All Projects
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
