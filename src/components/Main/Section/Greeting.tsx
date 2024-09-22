import React from "react";
import '@/assets/scss/greeting.scss';

const Section= () => {
  return (
    <section id="greeting">
      <h2 className="title">ごあいさつ</h2>
      <div className="greeting-text-area">
        <div className="text-lg">
          <p className="mt-6">弊社は2004年の創業以来、空調換気設備工事、給排水衛生設備工事を通してお客さまにとっての最適空間を提供してまいりました。</p>
          <p className="mt-6">近年ではSDGsへの取り組みのため、地球環境にやさしい設備や省エネシステムを取り入れる企業や店舗が増えています。</p>
          <p className="mt-6">多様化するニーズにお応えすべく社員一人一人が常に知識を深め、技術の向上に努めております。</p>
          <p className="mt-6">弊社の手がけた設備工事が皆様の生活をブラッシュアップすることを心より祈念しております。</p>
          <p className="mt-6">何卒より一層のご支援ご鞭撻を賜りますようお願い申し上げます。</p>
        </div>
        <div className="text-right text-xl font-bold mt-6">
          代表取締役　山崎 一夫
        </div>
      </div>
    </section>
  );
};

export default Section;
