import React, { useEffect, useState } from "react";
// import Navbar from './Navbar';
// import { Outlet } from 'react-router-dom';
import Hero from "../Hero/Hero";
import LatestCards from "../LastestCard/LatestCards";
import Support from "../Extra/Support";
import Simpol from "../Extra/Simpol";
import Meet from "../MeetSection/Meet";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css"; // Ensure DaisyUI is included

const Home = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Hero></Hero>
      <section className="py-10">
        <LatestCards></LatestCards>
      </section>

      <section className="py-10">
        <Simpol></Simpol>
      </section>
      <section className="py-10">
        <Meet></Meet>
      </section>
      <Support></Support>
    </div>
  );
};

export default Home;
