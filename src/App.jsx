import { Fragment } from "react";
import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Nav from "./components/nav/Nav"
import Experience from "./components/experience/Experience"
import Portfolio from "./components/portfolio/Portfolio"
import Footer from "./components/footer/Footer"


function App() {
  return (
    <Fragment>
      <Header />
      <Nav/>
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
