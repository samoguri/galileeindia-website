import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Ministries from "./pages/Ministries";
import Sermons from "./pages/Sermons";
import Events from "./pages/Events";
import Pastors from "./pages/Pastors";
import Contact from "./pages/Contact";
import JoinUs from "./pages/JoinUs";   // <-- This line must exist
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/events" element={<Events />} />
        <Route path="/pastors" element={<Pastors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join-us" element={<JoinUs />} />   {/* <-- This route */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;