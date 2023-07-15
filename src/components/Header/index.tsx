import React from "react";
import logo from '@/assets/img/logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 w-full h-20 bg-transparent flex items-center justify-between px-8 z-10">
      <img className="w-60" src={logo} alt="株式会社山空" />
      <nav>
        <ul className="flex space-x-4 font-bold text-lg ">
          <li><a href="#home">ホーム</a></li>
          <li><a href="#business">事業内容</a></li>
          <li><a href="#company">会社情報</a></li>
          <li><a href="#greeting">ごあいさつ</a></li>
          <li><a href="#access">アクセス</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
