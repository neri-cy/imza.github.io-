import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Billing from "./Components/Billing";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div style={{padding:"0px"}}>
       <Navbar />
      <div className="App">
      <Home />
      <About />
      <Work />
      <Billing/>
      <Contact />
      </div>
      <Footer />

     
    </div>
  );
}

export default App;
