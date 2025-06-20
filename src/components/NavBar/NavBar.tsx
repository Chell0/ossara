"use client";

import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = () => {
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
    <nav className="fixed top-0 left-0 z-50 w-full bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 xs2:h-10 xs:h-8 items-center justify-between sm:h-20 lg:h-header">
          {/* Menu Button */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">
            <button onClick={toggleMenu}>
              {menuOpen ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
            </button>
            <span className="pt-2 font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Menü
            </span>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/logos/ossara_logo.png" alt="Ossara Logo" width={200} height={200} />
            </Link>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#fef5db]">
          <div className="container mx-auto px-4 py-section">
            <div className="mb-8 flex items-center justify-between">
              <Link
                href="/"
                className="font-bold text-4xl text-[#f7cc55] uppercase hover:text-[#e6b845] md:text-5xl lg:text-6xl"
              >
                Ossara
              </Link>
              <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800">
                <XIcon className="h-8 w-8 md:h-10 md:w-10" />
              </button>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Left Column */}
              <ul className="space-y-4 md:space-y-6">
                {leftMenuItems.map((menu, index) => (
                  <li key={index}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={menu.href}
                        className="font-bold text-2xl text-[#f7cc55] hover:text-[#e6b845] md:text-3xl lg:text-4xl"
                        onClick={toggleMenu}
                      >
                        {menu.name}
                      </Link>
                      {menu.items.length > 0 && (
                        <button
                          onClick={() => toggleSubMenu(menu.name)}
                          className="ml-4 text-[#f7cc55] text-xl hover:text-[#e6b845] md:text-2xl"
                        >
                          {activeSubMenu === menu.name ? "−" : "+"}
                        </button>
                      )}
                    </div>
                    {activeSubMenu === menu.name && (
                      <ul className="mt-2 space-y-2 pl-4 text-lg md:text-xl">
                        {menu.items.map((item, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={
                                item.href.startsWith("#") ? `${menu.href}${item.href}` : item.href
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
                    <div className="flex items-center justify-between">
                      <Link
                        href={menu.href}
                        className="font-bold text-2xl text-[#f7cc55] hover:text-[#e6b845] md:text-3xl lg:text-4xl"
                        onClick={toggleMenu}
                      >
                        {menu.name}
                      </Link>
                      {menu.items.length > 0 && (
                        <button
                          onClick={() => toggleSubMenu(menu.name)}
                          className="ml-4 text-[#f7cc55] text-xl hover:text-[#e6b845] md:text-2xl"
                        >
                          {activeSubMenu === menu.name ? "−" : "+"}
                        </button>
                      )}
                    </div>
                    {activeSubMenu === menu.name && (
                      <ul className="mt-2 space-y-2 pl-4 text-lg md:text-xl">
                        {menu.items.map((item, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={
                                item.href.startsWith("#") ? `${menu.href}${item.href}` : item.href
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
};

export default NavBar;
