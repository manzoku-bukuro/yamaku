import React, { useState } from "react";
import burger from '@/assets/img/burger.svg';
import '@/assets/scss/header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full md:h-20 h-10 ${isOpen ? 'bg-white md:bg-transparent' : 'bg-transparent'} flex items-center justify-between px-8 z-10`}>
      <span className="md:text-3xl text-xl">株式会社 山 空</span>
      <button className="md:hidden" onClick={toggleMenu}>
        <img className="w-8" src={burger} alt="メニュー" />
      </button>
      <nav className={`${isOpen ? 'block' : 'hidden'} md:block absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent`}>
        <ul className="flex flex-col md:flex-row font-bold md:text-lg text-sm">
          <li className="border-b md:border-none"><a href="#home" className="block py-2 px-4" onClick={handleLinkClick}>ホーム</a></li>
          <li className="border-b md:border-none"><a href="#business" className="block py-2 px-4" onClick={handleLinkClick}>事業内容</a></li>
          <li className="border-b md:border-none"><a href="#company" className="block py-2 px-4" onClick={handleLinkClick}>会社情報</a></li>
          <li className="border-b md:border-none"><a href="#greeting" className="block py-2 px-4" onClick={handleLinkClick}>ごあいさつ</a></li>
          <li className="border-b md:border-none"><a href="#access" className="block py-2 px-4" onClick={handleLinkClick}>アクセス</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;