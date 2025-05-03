import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";

function App() {
  // DONE: Nav bar have issue.
  // TODO: project details page need to be responsive.
  // TODO: Email need to be done.
  // TODO: Contact page need to be responsive
  
  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-white selection:text-black">
      <Nav />
      <div className="lg:pl-32 pt-10 pr-10 md:pl-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
