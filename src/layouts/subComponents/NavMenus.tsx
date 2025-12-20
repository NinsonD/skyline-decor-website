"use client";
import { useState } from "react";
import menuItemsTwo from "@/data/header-menu/menuItemTwo";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavMenus() {
  const pathname = usePathname();
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  return (
    <ul>
      {menuItemsTwo.map((item, index) => {
        const isActive = pathname === item.href;
        const isHovered = hoveredMenu === index;
        return ( 
          <li
            key={`nav-menu-${index}`}
            className={`${isActive || isHovered ? 'active' : ''}`}
            onMouseEnter={() => setHoveredMenu(index)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <Link href={item.href} className={isActive || isHovered ? 'active' : ''}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
