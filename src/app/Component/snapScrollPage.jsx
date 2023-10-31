import React from "react";
import Hero from "../Component/HomePageComponent/Hero";
import Counter from "../Component/HomePageComponent/Counter";
import OurClient from "../Component/HomePageComponent/Ourclient";
import Slider from "../Component/HomePageComponent/twoCarousel";
import OurServiceAcordian from "./HomePageComponent/OurServiceAcordian";
import Testing from "./HomePageComponent/Testing";
import NavBars from "./NavBar/Navbar";
import "../Style/SnapScroolPage.css";
function SnapScrollPage() {
  return (
    <div>
      <div class="card-scroll">
        <section class="card card-1">
          {/* <NavBars /> */}
          <Testing />
          <Hero />


        </section>

        <section class="card card-2">
        <OurServiceAcordian />

        </section>

        <section class="card card-3 CounerSection">
        <OurClient />

        </section>

        <section class="card card-4">
          <Slider />
        </section>

        <section class="card card-5">
        <Counter />


        </section>
      </div>
    </div>
  );
}

export default SnapScrollPage;
