"use client";

import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [showNav, setShowNav] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveSubMenu(null);
  };

  const toggleSubMenu = (menuName: string) => {
    setActiveSubMenu(activeSubMenu === menuName ? null : menuName);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY <= 0 || menuOpen);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const leftMenuItems = [
    { name: "NEUIGKEITEN", href: "/neuigkeiten", items: [] },
    { name: "VERANSTALTUNGEN", href: "/veranstaltungen", items: [] },
    {
      name: "ÜBER UNS",
      href: "/uber",
      items: [
        { name: "Verein", href: "#verein" },
        { name: "Team", href: "#team" },
        { name: "Geschichte", href: "#geschichte" },
      ],
    },
    {
      name: "ENGAGIEREN",
      href: "/engagieren",
      items: [
        { name: "Stellenausschreibungen", href: "#stellenausschreibungen" },
        { name: "Mitglied Werden", href: "#mitglied-werden" },
        { name: "Ehrenamtliches Engagement", href: "#ehrenamt" },
      ],
    },
    {
      name: "SPENDEN",
      href: "/spenden",
      items: [],
    },
    { name: "DOWNLOADS", href: "/downloads", items: [] },
  ];

  const rightMenuItems = [
    {
      name: "INTEGRATIVE STADTTEILARBEIT",
      href: "/stadtteilarbeit",
      items: [
        { name: "Stadtteilarbeit", href: "#stadtteilarbeit" },
        { name: "Bewerbungstraining", href: "#bewerbungstraining" },
        { name: "Sprachförderung", href: "#sprachförderung" },
      ],
    },
    { name: "LOKAL VERNETZT", href: "/lokal", items: [] },
    {
      name: "DEKOLONIALE BILDUNGSARBEIT",
      href: "/bildungsarbeit",
      items: [
        { name: "Machtbewusst-Hamburg", href: "#machtbewusst" },
        {
          name: "Eine Welt-Promotorinnen Programm",
          href: "/eine_welt_promotorinnen",
        },
        { name: "Dekoloniale Bildungsreisen", href: "#bildungsreisen" },
        { name: "KoRaBi", href: "/korabi" },
      ],
    },
    { name: "ANTI-SCHWARZER RASSISMUS", href: "/rassismus", items: [] },
    {
      name: "DEKOLONIAL GLOBAL",
      href: "/dekoloniale",
      items: [
        { name: "Projekte", href: "/projects" },
        { name: "Partner", href: "/projekt_partners" },
      ],
    },
  ];

  if (!showNav) return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-0">
        <div className="flex justify-between items-center h-header">
          {/* Menu Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {menuOpen ? (
                <XIcon className="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10" />
              ) : (
                <MenuIcon className="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10" />
              )}
            </button>
            <span className="font-medium text-base md:text-lg lg:text-xl xl:text-2xl">
              Menü
            </span>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logos/ossara_logo.png"
                alt="Ossara Logo"
                width={1280}
                height={445}
                className="h-8 md:h-10 xl:h-14 2xl:h-18 w-auto object-contain"
                priority
              />
            </Link>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#fef5db] overflow-y-auto">
          <div className="container mx-auto px-4 py-section">
            <div className="flex justify-between items-center mb-8">
              <Link
                href="/"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f7cc55] hover:text-[#e6b845] uppercase"
              >
                Ossara
              </Link>
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-800"
              >
                <XIcon className="w-8 h-8 md:w-10 md:h-10" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <ul className="space-y-4 md:space-y-6">
                {leftMenuItems.map((menu, index) => (
                  <li key={index}>
                    <div className="flex justify-between items-center">
                      <Link
                        href={menu.href}
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#f7cc55] hover:text-[#e6b845]"
                        onClick={toggleMenu}
                      >
                        {menu.name}
                      </Link>
                      {menu.items.length > 0 && (
                        <button
                          onClick={() => toggleSubMenu(menu.name)}
                          className="text-[#f7cc55] hover:text-[#e6b845] ml-4 text-xl md:text-2xl"
                        >
                          {activeSubMenu === menu.name ? "−" : "+"}
                        </button>
                      )}
                    </div>
                    {activeSubMenu === menu.name && (
                      <ul className="pl-4 mt-2 space-y-2 text-lg md:text-xl">
                        {menu.items.map((item, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={
                                item.href.startsWith("#")
                                  ? `${menu.href}${item.href}`
                                  : item.href
                              }
                              className="text-[#f7cc55] hover:text-[#e6b845]"
                              onClick={toggleMenu}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              {/* Right Column */}
              <ul className="space-y-4 md:space-y-6">
                {rightMenuItems.map((menu, index) => (
                  <li key={index}>
                    <div className="flex justify-between items-center">
                      <Link
                        href={menu.href}
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#f7cc55] hover:text-[#e6b845]"
                        onClick={toggleMenu}
                      >
                        {menu.name}
                      </Link>
                      {menu.items.length > 0 && (
                        <button
                          onClick={() => toggleSubMenu(menu.name)}
                          className="text-[#f7cc55] hover:text-[#e6b845] ml-4 text-xl md:text-2xl"
                        >
                          {activeSubMenu === menu.name ? "−" : "+"}
                        </button>
                      )}
                    </div>
                    {activeSubMenu === menu.name && (
                      <ul className="pl-4 mt-2 space-y-2 text-lg md:text-xl">
                        {menu.items.map((item, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={
                                item.href.startsWith("#")
                                  ? `${menu.href}${item.href}`
                                  : item.href
                              }
                              className="text-[#f7cc55] hover:text-[#e6b845]"
                              onClick={toggleMenu}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
