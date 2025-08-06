import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Videos } from "../pages/Videos";
import { Contact } from "../pages/Contact";
import { Header } from "../components/layout/Header";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";


export const Rutas = () => {


return (
  <BrowserRouter>


    <Header />

    <Navbar />

    <main className="layout">
      <section className='content-nav'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </section>
    </main>

    <Footer />


  </BrowserRouter>
)
}
