import { navItems } from "@/constant/navItem";
import Link from "next/link";

export default function Navigation({
  className,
}: {
  className?: string;
}) {
  return (
    <nav className={className}>
      {navItems.map((item) => (
        <Link className="hover:text-gray-300" key={item.name} href={item.href}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
}