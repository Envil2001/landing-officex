import React, { useState, useEffect } from "react";
import ClientTestimonialsSection from "./components/ClientTestimonialsSection/ClientTestimonialsSection";
import FlexibleOfficeOptionsSection from "./components/FlexibleOfficeOptionsSection";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import NextGenCoworkingSection from "./components/NextGenCoworkingSection/NextGenCoworkingSection";
import OfficeFinderSection from "./components/OfficeFinderSection";
import VisitCoworkingSpacesSection from "./components/VisitCoworkingSpacesSection";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      document.body.classList.add("loaded");
    }
  }, [isLoading]);

  return (
    <div className={`App ${!isLoading ? "loading" : ""}`}>
      <div className="preloader">
        <h2 className="preloader-text uppercase">Officex</h2>
      </div>
      <Header />
      <main>
        <ClientTestimonialsSection />
        <FlexibleOfficeOptionsSection />
        <NextGenCoworkingSection />
        <OfficeFinderSection />
        <VisitCoworkingSpacesSection />
        <section className="px-10 py-10">
          <div className="container text-center">
            <h1 className="text-8xl lg:text-[200px] font-semibold text-[#2f2f2f]">
              Officex
            </h1>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
