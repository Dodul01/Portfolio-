import { Tab } from "@headlessui/react";
import { useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import imageOne from "../../Assets/projectOne.png";
import imageTwo from "../../Assets/projectTwo.png";
import imageThree from "../../Assets/projectThree.png";
import blogImg from "../../Assets/coverOne.png";

const projects = {
  Frontend: [
    // {
    //   _id: "01",
    //   name: "Portfolio",
    //   description: "Personal portfolio site using React",
    //   technologia: ["React JS", "Tailwind CSS", "Vite"],
    //   link: "#",
    //   image:
    //     "https://mir-s3-cdn-cf.behance.net/projects/404/2eee0f219141193.Y3JvcCwxNTM1LDEyMDEsMzQsMA.png",
    // },
    {
      _id: "03",
      name: "BookEase",
      description: "Hotel Booking Website",
      technologia: ["React", "Tailwind"],
      link: "#",
      image: imageThree,
    },
  ],
  Backend: [
    {
      _id: "04",
      name: "PH University",
      description: "Ph University REST API using Express & MongoDB",
      technologia: ["Node.js", "Express", "MongoDB", "TypeScript"],
      link: "#",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQHUtfE_NZiYBQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1681155201571?e=2147483647&v=beta&t=JUX6w6bHjKdvebGy4DC7GVyrIYMBHi7FR4MwkfTuThM",
    },
    {
      _id: "05",
      name: "Blog REST API",
      description: "JWT & OAuth2.0 Auth",
      technologia: ["Node.js", "JWT", "OAuth2.0"],
      link: "#",
      image: blogImg,
    },
  ],
  Fullstack: [
    {
      _id: "01",
      name: "MealBox",
      description:
        "MealBox is a personalized meal planning and delivery service.",
      technologia: ["Next JS", "MongoDB", "Express", "Node.js"],
      link: "https://mealbox-client-red.vercel.app",
      image: imageOne,
    },
    {
      _id: "02",
      name: "AutoNest",
      description: "AutoNest is a sleek, high-performance Car rental platform.",
      technologia: ["Next JS", "MongoDB", "Express", "Node.js"],
      link: "https://assignment-four-orpin.vercel.app ",
      image: imageTwo,
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AllProjects = () => {
  const allProjectsArray = Object.values(projects).flat();
  const [categories] = useState(["All", ...Object.keys(projects)]);

  const getProjectsByCategory = (category) =>
    category === "All" ? allProjectsArray : projects[category];

  return (
    <div className="w-full max-w-6xl px-4 mx-auto">
      <SectionTitle title="All Projects" />
      <Tab.Group>
        <Tab.List className="flex flex-wrap justify-start gap-3 mb-10">
          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "px-4 py-2 text-sm font-medium transition",
                  selected
                    ? "bg-white text-black"
                    : "bg-gray-200 hover:bg-opacity-20 bg-opacity-10 text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          {categories.map((category) => (
            <Tab.Panel
              key={category}
              className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
              {getProjectsByCategory(category).map((proj) => (
                <div
                  key={proj._id}
                  className="rounded-lg overflow-hidden border hover:shadow-xl transition"
                >
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-1">{proj.name}</h3>
                    <p className="text-gray-300 mb-3">{proj.description}</p>

                    {proj.technologia?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {proj.technologia.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-white text-black text-xs px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link
                      to={`/project/${proj._id}`}
                      className="text-white hover:underline font-medium"
                    >
                      View Project →
                    </Link>
                  </div>
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default AllProjects;
