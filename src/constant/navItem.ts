export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  {
    name: "Главная",
    href: "/",
  },
  {
    name: "Портфолио",
    href: "#portfolio",
  },
  {
    name: "Услуги",
    href: "#services",
  },
  {
    name: "Обо мне",
    href: "#about",
  },
  {
    name: "Контакты",
    href: "#contacts",
  },
];