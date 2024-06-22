import React, { useState } from "react";
import logo from '@/assets/img/logo.png';
import burger from '@/assets/img/burger.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="fixed top-0 w-full md:h-20 h-10 bg-transparent flex items-center justify-between px-8 z-10">
      <img className="md:w-60 w-40" src={logo} alt="株式会社 山空" />
      <button className="md:hidden" onClick={toggleMenu}>
        <img className="w-8" src={burger} alt="メニュー" />
      </button>
      <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex space-x-4 font-bold md:text-lg text-sm">
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
