import React from "react";
import '@/assets/scss/home.scss';

interface SectionProps {
  id: string;
  bg: string;
}

const Section = () => {
  return (
    <section id="home" className="pt-40 pb-32 text-center">
      <h3 className="main text-5xl">人が繋ぐ未来へ</h3>
      <h4 className="sub text-2xl mt-4 flex justify-center flex-wrap italic">
        <span>Pioneer of technology and</span> 
        <span>environmental equipment</span>
      </h4>
      <div className="mt-6 text-primary font-bold text-xl">弊社は環境に優しい設備、経済的な企業運営をサポートするエンジニア企業です</div>
      <div className="mt-4">新築工事はもちろんの事、更新工事（リノベーション）においても</div>
      <div className="mt-2">オフィス・飲食店・工場・商店など各施設に合わせた最適な空間をお届けいたします</div>
    </section>
  );
};

export default Section;
