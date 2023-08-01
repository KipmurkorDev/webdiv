import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/Home/HomePage";
import Nav from "./Components/Nav/Nav";
import { Route, Routes } from "react-router";
import Services from "./Pages/Services/Services";
import './App.css'
import About from "./Pages/About/About";
import Deliver from "./Pages/Deliver/Deliver";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/deliver" element={<Deliver/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
