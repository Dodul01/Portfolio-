// import { FaDownload } from "react-icons/fa";
// import { IoMdPaper } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { Typewriter } from "react-simple-typewriter";

// const Banner = () => {
//   return (
//     <div
//       data-aos="fade-in"
//       data-aos-duration="1000"
//       data-aos-easing="ease-in-out"
//       data-aos-mirror="true"
//       data-aos-once="false"
//       className="h-[96vh]"
//     >
//       <div className="flex items-center justify-center h-full w-full">
//         <div>
//           <div className="flex items-center gap-2 w-full">
//             <h4 className="lg:text-2xl md:text-xl text-[#919191] font-bold">
//               Hi, I&apos;m
//             </h4>
//             <div className="bg-[#919191] w-[70%] h-[1px]"></div>
//           </div>

//           <div>
//             <h1 className="lg:text-[4.25rem] md:text-[2rem] text-[1.1rem] text-white font-bold">
//               Mozammel Hoque Dodul
//             </h1>
//             <h4 className="lg:text-[3.5rem] md:text-[2rem] text-[1.1rem] text-white font-bold">
//               <Typewriter
//                 cursor
//                 cursorStyle="_"
//                 loop={false}
//                 words={[
//                   "MERN Stack Developer",
//                   "Frontend Developer",
//                   "Backend Developer",
//                   "Full Stack Developer",
//                 ]}
//               />
//             </h4>
//             <div className="flex items-center gap-2">
//               <Link
//                 to="https://drive.google.com/file/d/1yht2LoMgw_DoGxG8bBfbtMkIPSD6_GAW/view?usp=sharing"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button className="flex items-center gap-2 bg-white text-black px-5 py-2 font-bold text-base hover:bg-opacity-90 transition">
//                   <IoMdPaper /> View Resume
//                 </button>
//               </Link>

//               <Link
//                 to="https://drive.google.com/uc?export=download&id=1yht2LoMgw_DoGxG8bBfbtMkIPSD6_GAW"
//                 download
//               >
//                 <button className="flex items-center gap-2 border border-white text-white px-5 py-2 font-bold text-base  hover:bg-white hover:text-black transition">
//                   <FaDownload /> Download Resume
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import { FaDownload } from "react-icons/fa";
import { IoMdPaper } from "react-icons/io";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      className="h-screen flex items-center justify-center px-4 sm:px-6 md:px-10"
    >
      <div className="w-full max-w-5xl">
        <div className="flex items-center gap-2 w-full mb-4">
          <h4 className="text-sm md:text-xl text-[#919191] font-bold">
            Hi, I&apos;m
          </h4>
          <div className="bg-[#919191] flex-1 h-[1px] hidden sm:block"></div>
        </div>

        <div>
          <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[3.5rem] lg:text-[4.25rem] text-white font-bold">
            Mozammel Hoque Dodul
          </h1>
          <h4 className="text-[1.2rem] sm:text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] text-white font-bold">
            <Typewriter
              cursor
              cursorStyle="_"
              loop={false}
              words={[
                "MERN Stack Developer",
                "Frontend Developer",
                "Backend Developer",
                "Full Stack Developer",
              ]}
            />
          </h4>

          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              to="https://drive.google.com/file/d/1yht2LoMgw_DoGxG8bBfbtMkIPSD6_GAW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 bg-white text-black px-4 py-2 font-bold text-sm sm:text-base hover:bg-opacity-90 transition">
                <IoMdPaper /> View Resume
              </button>
            </Link>

            <Link
              to="https://drive.google.com/uc?export=download&id=1yht2LoMgw_DoGxG8bBfbtMkIPSD6_GAW"
              download
            >
              <button className="flex items-center gap-2 border border-white text-white px-4 py-2 font-bold text-sm sm:text-base hover:bg-white hover:text-black transition">
                <FaDownload /> Download Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
