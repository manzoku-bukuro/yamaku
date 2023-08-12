import React from "react";

const Section = () => {
  return (
    <section id="access">
      <h2 className="title">アクセス</h2>
      <div className="mx-auto max-w-[800px] px-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.882904561125!2d139.54793434454794!3d35.8301912061518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018c3fa18e26519%3A0xbca2b8bb66b2b4c5!2z5qCq5byP5Lya56S-5bGx56m6!5e0!3m2!1sja!2sjp!4v1691852127218!5m2!1sja!2sjp"
          title="Google Maps"
          width={"100%"}
          height={450}
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Section;
