import React, { useState } from "react";
import burger from '@/assets/img/burger.svg';
import '@/assets/scss/header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="fixed top-0 w-full md:h-20 h-10 bg-transparent flex items-center justify-between px-8 z-10">
      <span className="md:text-3xl text-xl">株式会社 山空</span>
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
