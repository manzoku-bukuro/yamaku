import React from "react";
import '@/assets/scss/company.scss';

const Section= () => {
  return (
    <section id="company">
      <h2 className="title">会社概要</h2>
      <div className="overview">
        <table>
          <tbody>
            <tr>
              <th>称号</th>
              <td>株式会社 山空</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>〒354-0017　埼玉県富士見市針ケ谷2-19-18</td>
            </tr>
            <tr>
              <th>連絡先</th>
              <td>
                <dl>TEL：049-275-7000</dl>
                <dl>FAX：049-275-7005</dl>
              </td>
            </tr>
            <tr>
              <th>代表者</th>
              <td>代表取締役　山崎 一夫</td>
            </tr>
            <tr>
              <th>設立日</th>
              <td>平成16年4月27日</td>
            </tr>
            <tr>
              <th>資本金</th>
              <td>500万円</td>
            </tr>
            <tr>
              <th>建設業許可番号</th>
              <td>埼玉県知事　許可（般-３）第60771号</td>
            </tr>
            <tr>
              <th>有資格者数</th>
              <td>
                <dl>1級管工事施工管理技士：3名</dl>
                <dl>建築設備士：1名</dl>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Section;
