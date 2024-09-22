import React from "react";
import '@/assets/scss/home.scss';

const Section = () => {
  return (
    <section id="home" className="md:pt-40 md:pb-32 pt-20 pb-16">
      <h2 className="md:text-5xl text-4xl text-shadow-bold">人が繋ぐ未来へ</h2>
      <div className="md:text-2xl text-xl text-shadow-default font-bold text-orange mt-4 flex justify-center flex-wrap italic">
        <span>Pioneer of technology and</span> 
        <span>environmental equipment</span>
      </div>
      <div className="mt-6 text-red-800 font-bold md:text-xl text-lg">弊社は環境に優しい設備、経済的な企業運営をサポートするエンジニア企業です</div>
      <div className="mt-4">新築工事はもちろんの事、更新工事（リノベーション）においても</div>
      <div className="mt-2">オフィス・飲食店・工場・商店など各施設に合わせた最適な空間をお届けいたします</div>
    </section>
  );
};

export default Section;
