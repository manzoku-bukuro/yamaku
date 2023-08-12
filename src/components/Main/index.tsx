import React from "react";
import Section from "./Section";
import Home from "@/components/Main/Section/Home";
import Business from "@/components/Main/Section/Business";
import Company from "@/components/Main/Section/Company";
import Greeting from "@/components/Main/Section/Greeting";

const Main = () => {
  return (
    <main>
      <Home />
      <Business />
      <Company />
      <Greeting />
      <Section id="access" bg="bg-indigo-500" />
    </main>
  );
};

export default Main;
