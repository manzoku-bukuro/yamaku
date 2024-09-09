import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import logo from "@/assets/images/logo.png";

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>
          株式会社 山空
        </title>
        <meta name="description" content="埼玉県富士見市にあるエンジニア企業の株式会社山空の公式サイトです。新築工事はもちろんの事、更新工事（リノベーション）においてもオフィス・飲食店・工場・商店など各施設に合わせた最適な空間をお届けいたします" />
        <meta name="keywords" content="山空,やまくう,埼玉,富士見市,エンジニア,メンテナンス, 設備点検, 設備清掃, 修理, 交換, 設備管理, 経費削減, 保守メンテナンス, 空調機メンテナンス, 空気清浄器メンテナンス, 空調換気設備, 給水配管, 排水配管, 高圧洗浄" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="株式会社 山空" />
        <meta property="og:title" content="株式会社 山空" />
        <meta property="og:description" content="埼玉県富士見市にあるエンジニア企業の株式会社山空の公式サイトです。" />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://yamaku.netlify.app" />
        <meta property="og:type" content="website" />
        </Helmet>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
