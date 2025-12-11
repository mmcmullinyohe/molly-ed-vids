import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import About from "./pages/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Booking from "./pages/Booking";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />}/>
      </Routes>
    </div>
  );
}

export default App;
