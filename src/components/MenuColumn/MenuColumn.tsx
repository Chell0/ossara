import Link from "next/link";

type SubItem = {
  name: string;
  href: string;
};

type MenuItem = {
  name: string;
  href: string;
  items: SubItem[];
};

type MenuColumnProps = {
  items: MenuItem[];
  activeSubMenu: string | null;
  toggleMenu: () => void;
  toggleSubMenu: (name: string) => void;
};

const MenuColumn = ({
  items,
  activeSubMenu,
  toggleMenu,
  toggleSubMenu
}: MenuColumnProps) => (
  <ul className="space-y-4 md:space-y-6">
    {items.map(menu => (
      <li key={menu.name}>
        <div className="flex items-center justify-between">
          <Link
            href={menu.href}
            className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#f7cc55] hover:text-[#e6b845] transition-colors duration-200"
            onClick={toggleMenu}
          >
            {menu.name}
          </Link>
          {menu.items.length > 0 && (
            <button
              type="button"
              onClick={() => toggleSubMenu(menu.name)}
              className={`ml-4 text-3xl text-[#f7cc55] hover:text-[#e6b845]`}
            >
              {activeSubMenu === menu.name ? "−" : "+"}
            </button>
          )}
        </div>
        {activeSubMenu === menu.name && (
          <ul className="mt-2 space-y-2 pl-4 text-2xl">
            {menu.items.map(item => (
              <li key={`${menu.name}-${item.name}`}>
                <Link
                  href={item.href.startsWith("#") ? `${menu.href}${item.href}` : item.href}
                  className={`font-medium text-2xl text-[#f7cc55] hover:text-[#e6b845]`}
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
);

export default MenuColumn;
