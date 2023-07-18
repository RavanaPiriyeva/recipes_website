import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Categories />} path="/categories"/>
          <Route element={<About/>} path="/about"/>
          <Route element={<Contact/>} path="/contact"/>
          
      </Routes>
    </div>
  );
}

export default App;
