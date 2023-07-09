import React from "react";
import Section from "./Section";
import Home from "@/components/Main/Section/Home";

const Main = () => {
  return (
    <main>
      <Home />
      <Section id="business" bg="bg-yellow-500" />
      <Section id="company" bg="bg-green-500" />
      <Section id="greeting" bg="bg-blue-500" />
      <Section id="access" bg="bg-indigo-500" />
    </main>
  );
};

export default Main;
