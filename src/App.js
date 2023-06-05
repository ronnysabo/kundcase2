import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Products from "./components/Products";
import { ContextProvider } from "./MyContext";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Career from "./components/Career";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<ContactForm />} />
          <Route path="/Career" element={<Career />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
