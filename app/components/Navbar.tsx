import { getHeaderMenu } from "../lib/header-menu";
import NavbarClient from "./NavbarClient";

const FALLBACK_MENU = [
  { title: "Products", url: "/products", child_menu: false as const },
  { title: "How it works", url: "#how-it-works", child_menu: false as const },
  { title: "Vision", url: "#vision", child_menu: false as const },
  { title: "Roadmap", url: "#roadmap", child_menu: false as const },
];

export default async function Navbar() {
  const headerMenu = await getHeaderMenu();
  const menu = headerMenu?.main_menu ?? FALLBACK_MENU;

  return <NavbarClient menu={menu} />;
}
