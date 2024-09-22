import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import logo from "@/assets/img/logo.png";

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>
          株式会社 山空
        </title>
        </Helmet>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
