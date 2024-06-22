import React from "react";

const Section = () => {
  return (
    <section className={`mt-8 py-10 text-center bg-light`}>
      <h2 className="font-bold">株式会社 山空</h2>
      <div className="my-2">
        <div>〒354-0017</div>
        <div>埼玉県富士見市針ケ谷2-19-18</div>
      </div>
      <div>
        <div>
          TEL：<a className="underline" href="tel:049-275-7000">049-275-7000</a>
        </div>
        <div>
          FAX：<a className="underline" href="tel:049-275-7005">049-275-7005</a>
        </div>
      </div>
    </section>
  );
};

export default Section;
