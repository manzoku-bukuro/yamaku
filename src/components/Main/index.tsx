import React from "react";
import Section from "./Section";
import Home from "@/components/Main/Section/Home";
import Business from "@/components/Main/Section/Business";
import Company from "@/components/Main/Section/Company";
import Greeting from "@/components/Main/Section/Greeting";
import Access from "@/components/Main/Section/Access";

const Main = () => {
  return (
    <main>
      <Home />
      <Business />
      <Company />
      <Greeting />
      <Access />
    </main>
  );
};

export default Main;
