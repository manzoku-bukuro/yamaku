import React from "react";
import Section from "./Section";
import Home from "@/components/Main/Section/Home";
import Business from "@/components/Main/Section/Business";
import Greeting from "@/components/Main/Section/Greeting";

const Main = () => {
  return (
    <main>
      <Home />
      <Business />
      <Greeting />
      <Section id="access" bg="bg-indigo-500" />
    </main>
  );
};

export default Main;
