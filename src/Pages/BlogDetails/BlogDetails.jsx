import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Understanding React Suspense",
    date: "April 30, 2025",
    image:
      "https://eu-central-1-shared-euc1-02.graphassets.com/AvHQ3RDvFSousA8iwElOKz/yGIcpoghRUyyMn211Yjt",
    htmlDescription: `<div class="space-y-6 text-sm leading-relaxed text-gray-300">

      <p>React Suspense lets components "wait" for something before rendering. It improves UX by showing fallback content during lazy-loading of components or data fetching.</p>

      <section>
        <h3 class="text-lg font-semibold text-white">🔍 Key Concepts</h3>
        <ul class="list-disc list-inside">
          <li>Code-splitting with <code>React.lazy()</code></li>
          <li>Fallback UI with <code>&lt;Suspense fallback=...&gt;</code></li>
          <li>Future support for data fetching</li>
        </ul>
      </section>

      <section>
        <h3 class="text-lg font-semibold text-white">💡 Example</h3>
        <pre><code>&lt;Suspense fallback=&lt;div&gt;Loading...&lt;/div&gt;&gt;
  &lt;LazyComponent /&gt;
&lt;/Suspense&gt;</code></pre>
      </section>

      <section>
        <h3 class="text-lg font-semibold text-white">🚧 Limitations</h3>
        <ul class="list-disc list-inside">
          <li>Still evolving for data fetching (React 18+)</li>
          <li>Requires error boundaries for robustness</li>
        </ul>
      </section>
    </div>`,
  },
  {
    id: 2,
    title: "Optimizing Performance in MERN Stack Apps",
    date: "April 15, 2025",
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQGU57JUIpPl6g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721202795078?e=2147483647&v=beta&t=VL_RPnG48KJCnOI5MWI8M5-5gMeMssOjUkVyT7nu70U",
    htmlDescription: `<div class="space-y-6 text-sm leading-relaxed text-gray-300">
      <section>
        <h3 class="text-lg font-semibold text-white">🚀 Frontend Optimization</h3>
        <ul class="list-disc list-inside">
          <li>Code splitting with React.lazy</li>
          <li>Image lazy loading and compression</li>
          <li>Memoization using React.memo and useMemo</li>
        </ul>
      </section>
      <section>
        <h3 class="text-lg font-semibold text-white">⚙️ Backend & Database</h3>
        <ul class="list-disc list-inside">
          <li>Efficient MongoDB indexing</li>
          <li>Using pagination to limit query size</li>
          <li>Caching with Redis</li>
        </ul>
      </section>
      <section>
        <h3 class="text-lg font-semibold text-white">🧪 Testing & Monitoring</h3>
        <p>
          Use tools like Lighthouse, Postman, and MongoDB Atlas metrics to monitor and test performance regularly.
        </p>
      </section>
    </div>`,
  },
  {
    id: 3,
    title: "Tailwind CSS vs. Traditional CSS",
    date: "March 20, 2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7mAV9e0uoUxTh_oBqePmz4CC4UGrmXthMA&shttps://i.imgur.com/SSgNSLm.jpeg",
    htmlDescription: `<div class="space-y-6 text-sm leading-relaxed text-gray-300">
      <section>
        <h3 class="text-lg font-semibold text-white">🎯 Purpose & Philosophy</h3>
        <p>
          Traditional CSS separates concerns via class names and external stylesheets. Tailwind promotes utility-first styling, reducing context-switching and keeping styles close to markup.
        </p>
      </section>
      <section>
        <h3 class="text-lg font-semibold text-white">💡 Pros of Tailwind</h3>
        <ul class="list-disc list-inside">
          <li>Faster prototyping and fewer context switches</li>
          <li>Highly customizable with config</li>
          <li>Responsive out-of-the-box</li>
        </ul>
      </section>
      <section>
        <h3 class="text-lg font-semibold text-white">⚖️ When to Use Which?</h3>
        <p>
          Tailwind is great for startups, design systems, and speed. Traditional CSS fits large-scale projects with strict design patterns and BEM-style semantics.
        </p>
      </section>
    </div>`,
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const found = blogs.find((b) => b.id === parseInt(id));
    setBlog(found);
  }, [id]);

  if (!blog) {
    return <div className="text-white text-center py-20">Blog not found.</div>;
  }

  return (
    <div className="min-h-screen px-6 py-12 text-white max-w-4xl mx-auto">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-400 mb-6">{blog.date}</p>
      <article
        className="text-gray-200 leading-relaxed blog-html space-y-4"
        dangerouslySetInnerHTML={{ __html: blog.htmlDescription }}
      />
    </div>
  );
};

export default BlogDetails;
