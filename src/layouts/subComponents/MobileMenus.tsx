import menuItemsTwo from '@/data/header-menu/menuItemTwo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileMenus = () => {
  const pathname = usePathname();

  return (
    <ul>
      {menuItemsTwo.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <li key={`menu-${index}`} className={`${isActive ? 'active' : ''}`}>
            <Link href={item.href}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MobileMenus;