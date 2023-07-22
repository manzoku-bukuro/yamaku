import React from "react";
import '@/assets/scss/business.scss';
import AirConditioning from '@/assets/img/air_conditioning.jpg';
import Hygiene from '@/assets/img/hygiene.jpg';
import Maintenance from '@/assets/img/maintenance.jpg';


const Section= () => {
  return (
    <section id="business">
      <h2 className="title">事業内容</h2>
      <div className="">
        <div className="flex mb-16">
          <div className="w-1/2 px-4 text-left">
            <div className="content-title">
              <h3 className="text-3xl text-primary">空調換気設備</h3>
            </div>
            <div className="mb-4">
              <p className="mb-1">快適な室内空間を作る上で欠かせない設備です。</p>
              <p className="mb-1">目に見えない空間を快適だと感じるためには、空気の温度・湿度・気流・清浄度を、その目的に応じて調整することが必要です。</p>
              <p className="mb-1">目的や設置条件を考慮し、経済性や省エネルギー性に優れ、CO2削減に役立つ空気調和設備をご提案いたします。</p>
            </div>
            <div className="mb-4">
              <div className="content-sub-title">空調換気設備のシステム改善</div>
              <ul>
                <li>補助金を活用した機器更新の提案</li>
                <li>省エネタイプ空調機器への更新</li>
                <li>省エネタイプ換気機器（全熱交換器）の設置</li>
              </ul>
              <div className="content-sub-title">喫煙室の新設（分煙対策) etc</div>
            </div>
          </div>
          <img className="w-1/2 px-4 object-contain" src={AirConditioning} alt="空調換気設備" />
        </div>

        <div className="flex mb-16">
          <img className="w-1/2 px-4 object-contain" src={Hygiene} alt="衛生設備" />
          <div className="w-1/2 px-4 text-left">
            <div className="content-title">
              <h3 className="text-3xl text-primary">衛生設備</h3>
            </div>
            <div className="mb-4">
              <p className="mb-1">日常生活に必要不可欠なトイレや水廻りなどの衛生設備、快適かつ環境に配慮した設備をご提案いたします。</p>
            </div>
            <div className="mb-4">
              <div className="content-sub-title">節水に特化した衛生器具への更新</div>
              <div className="content-sub-title">森林保護のためのペーパーレストイレへの更新</div>
              <div className="content-sub-title">和風便器から洋風便器への更新</div>
              <div className="content-sub-title">バリアフリー 多目的トイレの新設 etc</div>
            </div>
          </div>
        </div>

        <div className="flex mb-16">
          <div className="w-1/2 px-4 text-left">
            <div className="content-title">
              <h3 className="text-3xl text-primary">メンテナンス</h3>
            </div>
            <div className="mb-4">
              <p className="mb-1">設備の快適性を維持するためには、点検・清掃・必要に応じて修理・交換が必要です。適切な設備管理は経費の削減にも繋がります。</p>
              <p className="mb-1">年間契約に基づく保守メンテナンスや個別契約によるメンテナンスなど、お客様のニーズに沿ったサービスを提供いたします。</p>
            </div>
            <div className="mb-4">
              <div className="content-sub-title">空調機・空気清浄器のメンテナンス</div>
              <div className="content-sub-title">各種空調換気設備のオーバーホール</div>
              <div className="content-sub-title">給水・排水の配管内部の撮影診断</div>
              <div className="content-sub-title">給水管の更生、排水管の高圧洗浄</div>
            </div>
          </div>
          <img className="w-1/2 px-4 object-contain" src={Maintenance} alt="メンテナンス" />
        </div>
      </div>
    </section>
  );
};

export default Section;
