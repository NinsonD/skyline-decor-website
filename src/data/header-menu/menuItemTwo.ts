// Define menu data
interface MenuItem {
    title: string;
    href: string;
    subItems?: MenuItem[];
};

const menuItemsTwo: MenuItem[] = [
    {
        title: "Home",
        href: "/architecture-hub",
    },
    {
        title: "About Us",
        href: "/about-us-light",
    },
    {
        title: "Service",
        href: "/blog-details-light",
    },
    {
        title: "Projects",
        href: "/portfolio-col-3-light",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];

export default menuItemsTwo;