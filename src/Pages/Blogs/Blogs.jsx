import { Link } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const blogs = [
  {
    id: 1,
    title: "Understanding React Suspense",
    summary: "Learn how React Suspense improves UX and code splitting.",
    description: "",
    date: "April 30, 2025",
    image:
      "https://eu-central-1-shared-euc1-02.graphassets.com/AvHQ3RDvFSousA8iwElOKz/yGIcpoghRUyyMn211Yjt",
  },
  {
    id: 2,
    title: "Optimizing Performance in MERN Stack Apps",
    summary: "Tips and tools for boosting the speed of full-stack apps.",
    description: "",
    date: "April 15, 2025",
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQGU57JUIpPl6g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721202795078?e=2147483647&v=beta&t=VL_RPnG48KJCnOI5MWI8M5-5gMeMssOjUkVyT7nu70U",
  },
  {
    id: 3,
    title: "Tailwind CSS vs. Traditional CSS",
    summary: "A breakdown of why utility-first design might be worth it.",
    description: "",
    date: "March 20, 2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7mAV9e0uoUxTh_oBqePmz4CC4UGrmXthMA&shttps://i.imgur.com/SSgNSLm.jpeg",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen px-6  text-white">
      <SectionTitle title="All Blogs" />
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-sm text-gray-400 mb-2">{blog.date}</p>
            <p className="text-gray-300 mb-4">{blog.summary}</p>
            <Link
              to={`/blogs/${blog.id}`}
              className="text-white hover:underline font-semibold"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
