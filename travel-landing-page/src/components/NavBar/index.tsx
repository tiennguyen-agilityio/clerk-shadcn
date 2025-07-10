import Link from "next/link";
import clsx from "clsx";

interface NavItem {
  name: string;
  href: string;
}

interface NavBarProps {
  list: NavItem[];
  href?: string;
}

const NavBar = ({ list, href = "" }: NavBarProps) => {
  return (
    <nav className="flex flex-wrap justify-center p-4">
      {list.map((item) => {
        const isActive = href === item.href;

        return (
          <Link key={item.name} href={item.href} className="flex flex-col items-center mx-4 group">
            <span
              className={clsx(
                "font-acme text-[13px]",
                isActive ? "text-orange-500" : "text-white-500"
              )}
            >
              {item.name}
            </span>
            <span
              className={`w-2 h-2 rounded-full transition-opacity ${
                isActive ? "opacity-100 bg-orange-500" : "opacity-0"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
