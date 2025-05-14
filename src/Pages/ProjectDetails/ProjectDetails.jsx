import { FaArrowRight, FaGithub } from "react-icons/fa";
import imageThree from "../../Assets/projectThree.png";

import imageOne from "../../Assets/projectOne.png";
import imageTwo from "../../Assets/projectTwo.png";
import blogImg from "../../Assets/coverOne.png";
import { Link, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const projects = [
    {
      _id: "01",
      name: "MealBox",
      description:
        "MealBox is a personalized meal planning and delivery service that brings delicious, chef-prepared meals straight to your door. MealBox offers a variety of meal plans tailored to individual tastes and dietary preferences.",
      image: imageOne,
      live_url: "https://mealbox-client-red.vercel.app",
      git_url: "https://github.com/Dodul01/BitePlan-Client",
      htmlDescription: `<div class="space-y-4">
  <h2 class="text-2xl font-bold">MealBox Overview</h2>
  <p>MealBox is a full-stack meal ordering platform that offers personalized meal planning and delivery. Users can browse chef-prepared meals, manage orders, and update their preferences with ease. The application is designed with scalability, clean UI, and secure authentication in mind.</p>

  <h3 class="text-xl font-semibold">Client Features</h3>
  <ul class="list-disc list-inside space-y-1">
    <li>User authentication with JWT</li>
    <li>Responsive design for all devices</li>
    <li>Meal browsing with images and details</li>
    <li>Search and category-based filtering</li>
    <li>Cart management with persistence</li>
    <li>Order placement and order history</li>
    <li>User profile management</li>
    <li>Robust error handling and loading states</li>
  </ul>

  <h3 class="text-xl font-semibold">Technologies (Client)</h3>
  <ul class="list-disc list-inside space-y-1">
    <li>Next.js + TypeScript</li>
    <li>Tailwind CSS</li>
    <li>Context API</li>
    <li>Vite</li>
    <li>JWT Authentication</li>
    <li>Stripe</li>
  </ul>

  <h3 class="text-xl font-semibold">Server Features</h3>
  <ul class="list-disc list-inside space-y-1">
    <li>User registration and login with JWT</li>
    <li>CRUD for meals (Meal Providers)</li>
    <li>Secure RESTful API endpoints</li>
    <li>Order placement and status tracking</li>
    <li>Preference management</li>
  </ul>

  <h3 class="text-xl font-semibold">Key API Routes</h3>
  <ul class="list-disc list-inside space-y-1">
    <li><code class="bg-gray-600 px-1 py-0.5 rounded">POST /api/users/create-user</code> – Register a new user</li>
    <li><code class="bg-gray-600 px-1 py-0.5 rounded">GET /api/get-user/:email</code> – Get user details</li>
    <li><code class="bg-gray-600 px-1 py-0.5 rounded">POST /api/auth/sign-in</code> – User login</li>
    <li><code class="bg-gray-600 px-1 py-0.5 rounded">POST /api/create-meal</code> – Add a meal (Provider only)</li>
    <li><code class="bg-gray-600 px-1 py-0.5 rounded">GET /api/meals</code> – List all meals</li>
    <li><code class="bg-gray-600 px-1 py-0.5 rounded">POST /api/order-meal</code> – Place an order</li>
    <li><code class="bg-gray-600 px-1 py-0.5 rounded">GET /api/get-orders/:email</code> – View user orders</li>
  </ul>

  <h3 class="text-xl font-semibold">Challenges Faced</h3>
  <ul class="list-disc list-inside space-y-1">
    <li>Role-based access control for customers and providers</li>
    <li>Synchronizing client-server state for orders and cart updates</li>
    <li>Securely managing authentication across frontend and backend</li>
    <li>Designing scalable API structure and clean code architecture</li>
    <li>Ensuring responsiveness and performance across devices</li>
  </ul>

  <h3 class="text-xl font-semibold">Future Plans</h3>
  <ul class="list-disc list-inside space-y-1">
    <li>AI-powered customer support for instant help and inquiries</li>
    <li>Agent mode for managing orders and customer service</li>
    <li>Improve accessibility and add test coverage</li>
    <li>Implement user behavior analytics</li>
  </ul>

  <p class="pt-2">MealBox follows modern full-stack development practices with a focus on clean, maintainable, and scalable architecture.</p>
</div>
`,
    },
    {
      _id: "02",
      name: "AutoNest",
      description:
        "AutoNest is a sleek, high-performance Car rental platform designed for showcasing and selling cars. Built with a modern UI, it focuses on clean aesthetics, intuitive navigation, and fast loading times to enhance user experience and drive conversions.",
      image: imageTwo,
      live_url: "https://assignment-four-orpin.vercel.app",
      git_url: "https://github.com/Dodul01/Car-Store-Frontend",
      htmlDescription: `<div class="space-y-6 text-sm leading-relaxed text-gray-300">
  <h2 class="text-2xl font-bold text-white">AutoNest - Car Rental Platform</h2>

  <section>
    <h3 class="text-lg font-semibold text-white">🚀 Project Goal</h3>
    <p>
      Build a sleek, high-performance car rental platform with a modern UI and full-stack functionality for managing cars, users, and orders. The goal was to deliver a professional UX for customers and a powerful admin dashboard for internal operations.
    </p>
  </section>

  <section>
    <h3 class="text-lg font-semibold text-white">🧠 Project Approach</h3>
    <p>
      The frontend was developed using React.js and Ant Design for consistent UI, along with Redux for state management. The backend used Node.js, Express, MongoDB, and TypeScript. JWT was implemented for secure authentication, and Stripe handled payment processing.
    </p>
  </section>

  <section>
    <h3 class="text-lg font-semibold text-white">✨ Key Features</h3>
    <ul class="list-disc list-inside">
      <li>User registration, login, JWT-based auth</li>
      <li>Admin & user role-based dashboards</li>
      <li>Car inventory: add, edit, delete cars</li>
      <li>Order system with Stripe payment</li>
      <li>Responsive design with Ant Design</li>
    </ul>
  </section>

  <section>
    <h3 class="text-lg font-semibold text-white">🛠️ Project Obstacles & Solutions</h3>
    <ul class="list-disc list-inside">
      <li><strong>Challenge:</strong> Role-based route protection</li>
      <li><strong>Solution:</strong> Implemented custom PrivateRoute and AdminRoute components using JWT decoding.</li>
      <li><strong>Challenge:</strong> Validating dynamic order price calculations</li>
      <li><strong>Solution:</strong> Used Zod schema in backend to ensure price × quantity math is server-side validated.</li>
      <li><strong>Challenge:</strong> Stripe integration with secure payment flow</li>
      <li><strong>Solution:</strong> Followed Stripe best practices with tokenized payment and server-side confirmation.</li>
      <li><strong>Challenge:</strong> Dashboard performance with large data sets</li>
      <li><strong>Solution:</strong> Added pagination and optimized MongoDB queries with proper indexing.</li>
    </ul>
  </section>

  <section>
    <h3 class="text-lg font-semibold text-white">📡 REST API Endpoints (Selected)</h3>
    <ul class="list-disc list-inside">
      <li><strong>GET /api/cars</strong> – View all cars (public)</li>
      <li><strong>POST /api/cars</strong> – Add new car (admin)</li>
      <li><strong>POST /api/orders</strong> – Place new order (user)</li>
      <li><strong>GET /api/orders/revenue</strong> – Get total revenue (admin)</li>
      <li><strong>POST /api/auth/login</strong> – User login (JWT issued)</li>
    </ul>
    <p>
      The backend was secured and validated with Zod schemas to ensure type-safe, reliable input handling.
    </p>
  </section>

  <section>
    <h3 class="text-lg font-semibold text-white">🔮 Planned Enhancements</h3>
    <ul class="list-disc list-inside">
      <li>Introduce a real-time booking calendar</li>
      <li>AI-powered assistant for car suggestions</li>
      <li>Agent mode for managing orders and customer service</li>
      <li>In-app notifications and email reminders</li>
      <li>Performance dashboards for admins with visual insights</li>
    </ul>
  </section>
</div>
`,
    },
    {
      _id: "03",
      name: "BookEase",
      description:
        "DailyDo is a task management app for organizing daily activities.",
      image: imageThree,
      live_url: "https://bookease-537ed.web.app/",
      git_url: "https://github.com/Dodul01/BookEase-Client",
      htmlDescription: `<div class="space-y-6 text-sm leading-relaxed text-gray-300">
  <h2 class="text-2xl font-bold text-white">📚 BookEase – Online Book Store</h2>

  <section>
    <h3 class="text-lg font-semibold text-white">🎯 Project Overview</h3>
    <p>
      BookEase is a fully responsive, modern online bookstore built with the MERN stack. It allows users to browse, search, add, update, and delete books while providing a user-friendly interface for efficient book management.
    </p>
  </section>

  <section>
    <h3 class="text-lg font-semibold text-white">🧠 Features</h3>
    <ul class="list-disc list-inside">
      <li>Browse a collection of books by category or title</li>
      <li>Add, edit, or delete books (CRUD functionality)</li>
      <li>View detailed book descriptions and images</li>
      <li>Responsive design for desktop and mobile users</li>
      <li>Login and register functionality (Firebase Auth)</li>
    </ul>
  </section>

  <section>
    <h3 class="text-lg font-semibold text-white">⚙️ Technologies Used</h3>
    <ul class="list-disc list-inside">
      <li>React.js (Vite)</li>
      <li>Tailwind CSS for modern styling</li>
      <li>MongoDB, Express.js, Node.js (Backend)</li>
      <li>Firebase Authentication</li>
    </ul>
  </section>

  <section>
    <h3 class="text-lg font-semibold text-white">🛠️ Challenges Faced</h3>
    <ul class="list-disc list-inside">
      <li><strong>Authentication complexity:</strong> Managing Firebase auth state consistently across routes</li>
      <li><strong>Form validation:</strong> Ensuring reliable client/server-side validation during book creation/edit</li>
      <li><strong>Backend pagination:</strong> Handling performance while scaling book listing with search/filter</li>
    </ul>
  </section>

  <section>
    <h3 class="text-lg font-semibold text-white">🚧 Future Plans</h3>
    <ul class="list-disc list-inside">
      <li>Improve reviews and ratings for books</li>
      <li>Implement Stripe payment integration</li>
      <li>Admin dashboard for booking and inventory management</li>
      <li>AI-powered book recommendation engine</li>
      <li>Email notifications for order status and promotions</li>
    </ul>
  </section>

  <section>
    <h3 class="text-lg font-semibold text-white">🔗 Links</h3>
    <ul class="list-disc list-inside">
      <li><strong>Live Site:</strong> <a href="https://bookease-537ed.web.app/" class="text-blue-400 hover:underline">bookease-537ed.web.app</a></li>
      <li><strong>GitHub Repo:</strong> <a href="https://github.com/Dodul01/BookEase-Client" class="text-blue-400 hover:underline">BookEase Client</a></li>
    </ul>
  </section>
</div>
`,
    },
    {
      _id: "04",
      name: "PH University",
      description: "PH University E-Learning Platform",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQHUtfE_NZiYBQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1681155201571?e=2147483647&v=beta&t=JUX6w6bHjKdvebGy4DC7GVyrIYMBHi7FR4MwkfTuThM",
      live_url: "",
      git_url: "https://github.com/Dodul01/PH-University-Backend",
      htmlDescription: `<div class="space-y-6 text-sm leading-relaxed text-gray-300">
  <h2 class="text-2xl font-bold text-white">🎓 PH University – Backend API</h2>

  <section>
    <h3 class="text-lg font-semibold text-white">🧩 Project Overview</h3>
    <p>
      PH University Backend is a robust RESTful API built for managing an educational platform. It handles student registrations, course management, and secure role-based access for administrators and users.
    </p>
  </section>

  <section>
    <h3 class="text-lg font-semibold text-white">🔐 Key Features</h3>
    <ul class="list-disc list-inside">
      <li>JWT-based authentication and role authorization</li>
      <li>CRUD operations for users, courses, and enrollments</li>
      <li>Admin-protected routes with middleware</li>
      <li>Input validation and error handling</li>
      <li>RESTful API structure for scalable frontend integration</li>
    </ul>
  </section>

  <section>
    <h3 class="text-lg font-semibold text-white">⚙️ Technologies Used</h3>
    <ul class="list-disc list-inside">
      <li>Node.js, Express.js</li>
      <li>MongoDB with Mongoose ODM</li>
      <li>JWT for authentication</li>
      <li>CORS, dotenv, helmet for security & environment config</li>
    </ul>
  </section>

  <section>
    <h3 class="text-lg font-semibold text-white">🛠️ Challenges Faced</h3>
    <ul class="list-disc list-inside">
      <li><strong>Complex Role Management:</strong> Ensuring proper permissions for admins, instructors, and students using layered middleware</li>
      <li><strong>Input Validation:</strong> Maintaining strict validation rules across user and course schemas</li>
      <li><strong>Secure API Access:</strong> Protecting sensitive routes using token verification and error handling strategies</li>
    </ul>
  </section>

  <section>
    <h3 class="text-lg font-semibold text-white">🚧 Future Plans</h3>
    <ul class="list-disc list-inside">
      <li>Implement instructor-specific dashboards and APIs</li>
      <li>Add payment processing for course enrollments</li>
      <li>Integrate caching with Redis for performance improvement</li>
      <li>Build a GraphQL version for enhanced client-side querying</li>
      <li>Integrate email notification system for enrollment updates</li>
    </ul>
  </section>
</div>
`,
    },
    {
      _id: "05",
      name: "Blog REST API",
      description: "Blog REST API - Bloging platform",
      image: blogImg,
      live_url: "https://assignment-three-tau.vercel.app",
      git_url: "https://github.com/Dodul01/Blogs-Backend",
      htmlDescription: `<div class="space-y-6 text-sm leading-relaxed text-gray-300">
  <h2 class="text-2xl font-bold text-white">📝 Blog REST API – Backend for a Blogging Platform</h2>

  <section>
    <h3 class="text-lg font-semibold text-white">📌 Project Overview</h3>
    <p>
      The Blog REST API is a secure and scalable backend service for a blogging platform, designed to handle blog post creation, editing, deletion, and user management. It follows RESTful principles and supports both public and admin-level operations.
    </p>
  </section>

  <section>
    <h3 class="text-lg font-semibold text-white">🚀 Features</h3>
    <ul class="list-disc list-inside">
      <li>Create, read, update, and delete blog posts (CRUD)</li>
      <li>User registration, login, and JWT authentication</li>
      <li>Role-based access control (Admin, Author, Reader)</li>
      <li>Commenting system with user association</li>
      <li>RESTful architecture for frontend integration</li>
    </ul>
  </section>

  <section>
    <h3 class="text-lg font-semibold text-white">🛠️ Tech Stack</h3>
    <ul class="list-disc list-inside">
      <li>Node.js + Express.js</li>
      <li>MongoDB with Mongoose</li>
      <li>JWT for authentication</li>
      <li>Zod or custom validation (if used)</li>
    </ul>
  </section>

  <section>
    <h3 class="text-lg font-semibold text-white">📡 Selected API Endpoints</h3>
    <ul class="list-disc list-inside">
      <li><strong>GET /api/posts</strong> – List all posts</li>
      <li><strong>POST /api/posts</strong> – Create a new post (auth)</li>
      <li><strong>PUT /api/posts/:id</strong> – Update a post (author only)</li>
      <li><strong>DELETE /api/posts/:id</strong> – Delete a post (admin)</li>
      <li><strong>POST /api/auth/login</strong> – User login</li>
    </ul>
  </section>

  <section>
    <h3 class="text-lg font-semibold text-white">🛠️ Challenges Faced</h3>
    <ul class="list-disc list-inside">
      <li><strong>Role-Based Restrictions:</strong> Designing middleware to distinguish access rights between admins, authors, and readers</li>
      <li><strong>Comment Association:</strong> Ensuring comments are correctly tied to users and posts</li>
      <li><strong>Validation & Security:</strong> Managing strong validation and route protection with JWT and schemas</li>
    </ul>
  </section>

  <section>
    <h3 class="text-lg font-semibold text-white">🚧 Future Plans</h3>
    <ul class="list-disc list-inside">
      <li>Add post likes and user reaction features</li>
      <li>Enable post categorization and search filters</li>
      <li>Integrate email notifications for comments and replies</li>
      <li>Build a rate-limiting feature to prevent abuse</li>
      <li>Offer GraphQL version for optimized client querying</li>
    </ul>
  </section>

  <section>
    <h3 class="text-lg font-semibold text-white">🔗 Repository & Live</h3>
    <ul class="list-disc list-inside">
      <li><a href="https://assignment-three-tau.vercel.app" class="text-blue-400 hover:underline">Live Client</a></li>
      <li><a href="https://github.com/Dodul01/Blogs-Backend" class="text-blue-400 hover:underline">GitHub – Backend</a></li>
    </ul>
  </section>
</div>
`,
    },
  ];
  const project = projects.find((item) => item._id === id);

  return (
    <div>
      <div className="lg:block hidden">
        <header className="relative rounded-lg overflow-hidden">
          {/* Background Image */}
          <img
            className="h-[60vh] w-full object-cover"
            src={project?.image}
            alt="project background"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/90 z-10" />

          {/* Content */}
          <div className="absolute top-1/2 left-1/2 z-20 w-full max-w-7xl px-6 -translate-x-1/2 -translate-y-1/2 transform text-white flex flex-col md:flex-row gap-8 items-center">
            {/* Side Image */}
            <div className="max-w-xs w-full">
              <img
                className="w-full h-auto rounded-lg border border-white/20"
                src={project.image}
                alt={project.name}
              />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold">
                {project?.name}
              </h1>
              <p className="text-lg text-gray-300 mt-2">
                {project?.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mt-4">
                {["React JS", "Node JS", "Express JS", "MongoDB"].map(
                  (tech, i) => (
                    <span
                      key={i}
                      className="text-sm md:text-base text-white bg-white/10 px-4 py-1 rounded-full border border-gray-500"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-5">
                <Link to={project.live_url} target="_blank">
                  <button className="flex items-center gap-2 bg-white text-black hover:text-white px-5 py-2 rounded-full hover:bg-opacity-10 hover:bg-white transition-all">
                    <FaArrowRight /> Visit Website
                  </button>
                </Link>
                <Link to={project.git_url} target="_blank">
                  <button className="flex items-center gap-2 bg-gray-800 text-white px-5 py-2 rounded-full hover:bg-gray-700 transition-all">
                    <FaGithub /> GitHub Repository
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Project HTML Description */}
        <div className="w-[89%] mx-auto mt-12">
          <div
            className="text-sm text-[#CACACA] mt-4"
            dangerouslySetInnerHTML={{ __html: project?.htmlDescription }}
          />
        </div>
      </div>

      {/* Mobile Project Details Page */}
      <div className="lg:hidden block text-white min-h-screen py-12">
        {/* Image Section */}
        <div className="w-full px-5">
          <img
            src={project?.image}
            alt="Project"
            className="w-full h-60 object-cover rounded-b-lg"
          />
        </div>

        {/* Content Section */}
        <div className="px-5 mt-6">
          <h1 className="text-2xl font-bold mb-3">{project?.name}</h1>
          <p className="text-base text-[#CACACA] mb-5">
            {project?.description}
          </p>

          {/* Tech Stack */}
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {["React JS", "Node JS", "Express JS", "MongoDB"].map((tech, i) => (
              <span
                key={i}
                className="text-sm bg-gray-800 py-2 px-3 rounded text-center"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            <Link to={project?.live_url}>
              <button className="w-full bg-white hover:bg-opacity-20 text-white py-3 rounded-full flex justify-center items-center gap-3 text-base font-medium">
                <FaArrowRight /> Visit Website
              </button>
            </Link>
            <Link to={project?.git_url}>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-full flex justify-center items-center gap-3 text-base font-medium">
                <FaGithub /> GitHub Repository
              </button>
            </Link>
          </div>

          {/* HTML Description */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-2">HTML Description</h2>
            <div
              className="text-sm text-[#CACACA] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: project?.htmlDescription }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
