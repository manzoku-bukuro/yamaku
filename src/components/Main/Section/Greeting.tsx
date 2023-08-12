import React from "react";
import '@/assets/scss/greeting.scss';

const Section= () => {
  return (
    <section id="greeting">
      <h2 className="title">ご挨拶</h2>
      <div className="greeting-text-area">
        <h3 className="text-3xl tracking-widest">
          ごあいさつ
        </h3>
        <div className="text-lg mt-6">
          <p>弊社は創業以来、さまざまな建築物の空調換気設備工事や給排水衛生設備工事に携わってまいりました。</p>
          <p>社員一人一人が常に技術の向上に努めるとともに</p>
          <p>各分野において、豊富な経験と多くの実績をもつ協力会社ネットワークを築き</p>
          <p>多様化する時代のニーズにお応えすべく万全の体制を整えております。</p>
        </div>
        <div className="text-lg mt-6">
          <p>近年環境問題への関心も高まり、よりエネルギー効率が良く柔軟性のある設備が求められています。</p>
          <p>私共は空調換気設備・給排水設備の専門家として</p>
          <p>最も省エネルギー性に優れた設備の設計から管理業務まで</p>
          <p>トータルな技術提供をいたします。</p>
        </div>
        <div className="text-lg mt-6">
          <p>また、環境に配慮した最高基準のサービスを提供することで地域社会の発展にも貢献していけるものと考えております。</p>
        </div>
        <div className="text-lg mt-6">
          <p>弊社の手がけた設備工事が、皆様の生活をより良くすることを心より念願しております。</p>
          <p>何卒より一層のご支援ご鞭撻を賜りますようお願い申し上げます。</p>
        </div>
        <div className="text-right text-xl font-bold mt-6">
          代表取締役 山崎一夫
        </div>
      </div>
    </section>
  );
};

export default Section;
