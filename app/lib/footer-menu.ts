export type ContactSubChild = {
  title: string;
  type?: string;
  value?: string;
  url?: string;
  image?: string;
};

export type ContactDetail = {
  title: string;
  type?: string;
  value?: string;
  url?: string;
  image?: string;
  sub_child: false | ContactSubChild[];
  has_sub_child?: boolean;
};

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

export type FooterMenu = {
  main_menu: MainMenuItem[];
  contact_details: ContactDetail[];
};

const API_URL = process.env.BACKEND_API_URL;

export async function getFooterMenu(): Promise<FooterMenu | null> {
  if (!API_URL) {
    console.warn("BACKEND_API_URL is not set");
    return null;
  }

  try {
    const res = await fetch(`${API_URL}/api/footer-menu`, {
      cache: "force-cache",
      next: { tags: ["footer-menu"] },
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.footerMenu as FooterMenu;
  } catch {
    return null;
  }
}
