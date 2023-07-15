import React from "react";
import '@/assets/scss/home.scss';

interface SectionProps {
  id: string;
  bg: string;
}

const Section = () => {
  return (
    <section id="home" className="pt-40 pb-32">
      <h2 className="text-5xl text-shadow-bold">人が繋ぐ未来へ</h2>
      <div className="text-2xl text-shadow-default font-bold text-orange mt-4 flex justify-center flex-wrap italic">
        <span>Pioneer of technology and</span> 
        <span>environmental equipment</span>
      </div>
      <div className="mt-6 text-primary font-bold text-xl">弊社は環境に優しい設備、経済的な企業運営をサポートするエンジニア企業です</div>
      <div className="mt-4">新築工事はもちろんの事、更新工事（リノベーション）においても</div>
      <div className="mt-2">オフィス・飲食店・工場・商店など各施設に合わせた最適な空間をお届けいたします</div>
    </section>
  );
};

export default Section;
