import React from "react";
import '@/assets/scss/home.scss';

interface SectionProps {
  id: string;
  bg: string;
}

const Section = () => {
  return (
    <section id="home">
      <div className="text-center py-40">
        <h1 className="text-7xl">株式会社　山空</h1>
        <h2 className="text-3xl mt-8 flex justify-center flex-wrap">
          <span>空調・換気・衛生設備の</span>
          <span>トータルエンジニア</span>
        </h2>
      </div>
      <div className="concept py-32 text-center">
        <div className="main text-5xl">人が繋ぐ未来へ</div>
        <div className="sub text-2xl mt-4 flex justify-center flex-wrap italic">
          <span>Pioneer of technology and</span> 
          <span>environmental equipment</span>
        </div>
      </div>
    </section>
  );
};

export default Section;
