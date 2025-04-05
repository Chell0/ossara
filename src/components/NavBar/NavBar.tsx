"use client";

import Image from "next/image";
import Link from "next/link";

import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [showNav, setShowNav] = useState(true);

  // Toggle main menu and reset submenu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveSubMenu(null);
  };

  const toggleSubMenu = (menuName: string) => {
    setActiveSubMenu(activeSubMenu === menuName ? null : menuName);
  };

  // Hide the top navbar when scrolling down (unless the menu is open)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Split menu items into left and right columns
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
      name: "FÖRDERN & SPENDEN",
      href: "/fordern",
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
    { name: "LOBBY UND NETZWERKARBEIT", href: "/lobby", items: [] },
    {
      name: "DEKOLONIALE BILDUNGSARBEIT",
      href: "/bildungsarbeit",
      items: [
        { name: "Machtbewusst-Hamburg", href: "#machtbewusst" },
        {
          name: "Eine Welt-Promotorinnen Programm",
          href: "/eine_welt_promotorinnen",
        },
        { name: "Dekoloniale Bildungsreisen", href: "/bildungsreisen" },
        { name: "KoRaBi", href: "/korabi" },
      ],
    },
    { name: "ANTI-SCHWARZER RASSISMUS", href: "/rassismus", items: [] },
    {
      name: "DEKOLONIALE INTERNATIONALE ZUSAMMENARBEIT",
      href: "/dekoloniale",
      items: [
        { name: "Projekte", href: "/projects" },
        { name: "Partner", href: "/projekt_partners" },
      ],
    },
  ];

  // Render the top navbar only if at the very top or when the menu is open
  if (!showNav && !menuOpen) return null;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div
          className="container mx-auto 
      px-2 xs:px-3 sm:px-4 md:px-6 md2:px-8 
      tab:px-10 tab-xl:px-12 lg:px-14 xl:px-16 
      2xl:px-18 3xl:px-20 land-xs:px-4 land-sm:px-6 
      pt-1 xs:pt-2 sm:pt-3 md:pt-4 tab:pt-5"
        >
          <div
            className="flex justify-between items-center 
      h-12 xs:h-14 sm:h-16 md:h-18 md2:h-20 
      tab:h-24 tab-xl:h-28 lg:h-30 xl:h-32 
      2xl:h-36 3xl:h-40 land-xs:h-12 land-sm:h-16"
          >
            {/* Menu Button */}
            <div className="flex items-center gap-1 xs:gap-2 sm:gap-3 md:gap-4">
              <button
                className="text-black focus:outline-none"
                onClick={toggleMenu}
              >
                {menuOpen ? (
                  <XIcon
                    className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 md2:w-9 md2:h-9 
                    tab:w-10 tab:h-10 tab-xl:w-11 tab-xl:h-11 lg:w-12 lg:h-12 xl:w-13 xl:h-13 
                    2xl:w-14 2xl:h-14 3xl:w-16 3xl:h-16 land-xs:w-6 land-xs:h-6 land-sm:w-8 land-sm:h-8"
                  />
                ) : (
                  <MenuIcon
                    className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 md2:w-9 md2:h-9 
                    tab:w-10 tab:h-10 tab-xl:w-11 tab-xl:h-11 lg:w-12 lg:h-12 xl:w-13 xl:h-13 
                    2xl:w-14 2xl:h-14 3xl:w-16 3xl:h-16 land-xs:w-6 land-xs:h-6 land-sm:w-8 land-sm:h-8"
                  />
                )}
              </button>
              <span
                className="font-medium text-base xs:text-lg sm:text-xl md:text-2xl md2:text-3xl 
                tab:text-3xl tab-xl:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl 3xl:text-5xl 
                land-xs:text-lg land-sm:text-xl"
              >
                Menü
              </span>
            </div>

            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logos/ossara_logo.png"
                  alt="Ossara Logo"
                  width={160}
                  height={60}
                  className="w-auto 
                  h-8 xs:h-9 sm:h-10 md:h-12 md2:h-14 tab:h-16 tab-xl:h-18 
                  lg:h-20 xl:h-22 2xl:h-24 3xl:h-26 land-xs:h-8 land-sm:h-10 
                  object-contain"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-[#fef5db] overflow-y-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
              <div className="flex justify-between items-center mb-6 md:mb-10">
                <Link
                  href="/"
                  className="text-4xl md:text-7xl font-bold text-[#f7cc55] hover:text-[#e6b845] uppercase"
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

              <div className="flex flex-col md:flex-row md:mt-10 space-y-6 md:space-y-0 md:space-x-8">
                {/* Left Column */}
                <ul className="w-full pr-0 space-y-4 md:space-y-6 md:w-1/2 md:pr-8">
                  {leftMenuItems.map((menu, index) => (
                    <li key={index}>
                      <div className="flex justify-between items-center">
                        <Link
                          href={menu.href}
                          className="text-2xl md:text-4xl font-bold text-[#f7cc55] hover:text-[#e6b845]"
                          onClick={toggleMenu}
                        >
                          {menu.name}
                        </Link>
                        {menu.items.length > 0 && (
                          <button
                            onClick={() => toggleSubMenu(menu.name)}
                            className="text-[#f7cc55] hover:text-[#e6b845] ml-2 md:ml-4 text-xl md:text-3xl w-6 h-6 md:w-8 md:h-8 flex items-center justify-center"
                          >
                            {activeSubMenu === menu.name ? "−" : "+"}
                          </button>
                        )}
                      </div>
                      {activeSubMenu === menu.name && menu.items.length > 0 && (
                        <ul className="pl-4 mt-1 md:mt-2 text-lg md:text-xl font-medium">
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
                <ul className="w-full pl-0 space-y-4 md:space-y-6 md:w-1/2 md:pl-4">
                  {rightMenuItems.map((menu, index) => (
                    <li key={index}>
                      <div className="flex justify-between items-center">
                        <Link
                          href={menu.href}
                          className="text-2xl md:text-4xl font-bold text-[#f7cc55] hover:text-[#e6b845]"
                          onClick={toggleMenu}
                        >
                          {menu.name}
                        </Link>
                        {menu.items.length > 0 && (
                          <button
                            onClick={() => toggleSubMenu(menu.name)}
                            className="text-[#f7cc55] hover:text-[#e6b845] ml-2 md:ml-4 text-xl md:text-3xl w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
                          >
                            {activeSubMenu === menu.name ? "−" : "+"}
                          </button>
                        )}
                      </div>
                      {activeSubMenu === menu.name && menu.items.length > 0 && (
                        <ul className="pl-4 mt-1 md:mt-2 text-lg md:text-xl font-medium">
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
    </>
  );
}
