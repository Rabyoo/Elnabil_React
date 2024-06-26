import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import FloatingBtn from "./Components/floating-button/FloatingBtn";
import ReassembleAndassemle from "./Pages/moreAboutServices/reassembleAndassemle/ReassembleAndassemle";
import Storage from "./Pages/moreAboutServices/storage/Storage";
import Transfer from "./Pages/moreAboutServices/transfer/Transfer";
import Wrapping from "./Pages/moreAboutServices/wrapping/Wrapping";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/contactUs" element={<ContactUs />}></Route>
        <Route path="/storage" element={<Storage />}></Route>
        <Route path="/transfer" element={<Transfer />}></Route>
        <Route path="/wrapping" element={<Wrapping />}></Route>
        <Route
          path="/reassembleAndassemle"
          element={<ReassembleAndassemle />}></Route>
      </Routes>
      
      <FloatingBtn />

      <Footer />
    </div>
  );
}

export default App;
