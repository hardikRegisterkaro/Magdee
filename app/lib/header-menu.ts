export type ChildMenuItem = {
  title: string;
  url: string;
  sub_child_menu: false;
};

export type MainMenuItem = {
  title: string;
  url: string;
  child_menu: false | ChildMenuItem[];
};

export type HeaderMenu = {
  main_menu: MainMenuItem[];
};

const API_URL = process.env.BACKEND_API_URL;

export async function getHeaderMenu(): Promise<HeaderMenu | null> {
  if (!API_URL) {
    console.warn("BACKEND_API_URL is not set");
    return null;
  }

  try {
    const res = await fetch(`${API_URL}/api/header-menu`, {
      cache: "force-cache",
      next: { tags: ["header-menu"] },
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.headerMenu as HeaderMenu;
  } catch {
    return null;
  }
}
