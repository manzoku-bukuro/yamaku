import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>
          株式会社 山空
        </title>
        <meta name="description" content="埼玉県富士見市にあるエンジニア企業の株式会社山空の公式サイトです。新築工事はもちろんの事、更新工事（リノベーション）においてもオフィス・飲食店・工場・商店など各施設に合わせた最適な空間をお届けいたします" />
        <meta name="google-site-verification" content="5WNc2EJRhCKsRGBNjhtG55Db7ZXTaMdBgaYHVpXAFic" />
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
