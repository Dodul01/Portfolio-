import JSLogo from "../../Assets/JavaScript-logo.png";
import TSLogo from "../../Assets/typescript.webp";
import ReactLogo from "../../Assets/react.png";
import NodeLogo from "../../Assets/node.webp";
import ExpressLogo from "../../Assets/express-js.png";
import MongodbLogo from "../../Assets/mongodb-icon-1.svg";
import MongooseLogo from "../../Assets/mongoose.png";
import JWTLogo from "../../Assets/jwt.png";
import FirebaseLogo from "../../Assets/firebase.png";
import TailwindLogo from "../../Assets/tailwind.png";
import CSSLogo from "../../Assets/css.png";
import HTMLLogo from "../../Assets/html.png";
import GitHubLogo from "../../Assets/github.png";
import GitLogo from "../../Assets/git.png";
import PostManLogo from "../../Assets/postman.png";
import DevtoolsLogo from "../../Assets/devtools.jpg";
import VSLogo from "../../Assets/vscode.png";
import ReduxLogo from "../../Assets/redux-logo.png";
import NextLogo from "../../Assets/nextjs.webp";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const skills = [
  { title: "JavaScript", logo: JSLogo },
  { title: "TypeScript", logo: TSLogo },
  { title: "React JS", logo: ReactLogo },
  { title: "Next JS", logo: NextLogo },
  { title: "Redux", logo: ReduxLogo },
  { title: "Node JS", logo: NodeLogo },
  { title: "Express JS", logo: ExpressLogo },
  { title: "MongoDB", logo: MongodbLogo },
  { title: "Mongoose", logo: MongooseLogo },
  { title: "JWT", logo: JWTLogo },
  { title: "Firebase", logo: FirebaseLogo },
  { title: "Tailwind CSS", logo: TailwindLogo },
  { title: "CSS3", logo: CSSLogo },
  { title: "HTML5", logo: HTMLLogo },
  { title: "Github", logo: GitHubLogo },
  { title: "Git", logo: GitLogo },
  { title: "Postman", logo: PostManLogo },
  { title: "Devtools", logo: DevtoolsLogo },
  { title: "VS Code", logo: VSLogo },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 text-white">
      <SectionTitle title={"Skills"} />
      <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center justify-center rounded-lg p-4 hover:shadow-xl transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 50}
          >
            <img
              src={skill.logo}
              alt={skill.title}
              className="w-16 h-16 object-contain"
            />
            <span className="absolute bottom-3 opacity-0 group-hover:opacity-100 text-sm text-white bg-gray-800 px-2 py-1 rounded mt-2 transition duration-200">
              {skill.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
