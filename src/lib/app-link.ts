/** Public deployment URLs for the SkillUp Educational Suite */
export const getCobeBase = () => {
  if (typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")) {
    return "http://localhost:5173";
  }
  return import.meta.env.VITE_IHELP_APP_URL?.replace(/\/$/, "") || "https://cobe.skillup-edu.org";
};

const engBase = import.meta.env.VITE_SKILLUP_ENG_URL?.replace(/\/$/, "") || "https://amirnet.skillup-edu.org";
const hebBase = import.meta.env.VITE_SKILLUP_HEB_URL?.replace(/\/$/, "") || "https://yael.skillup-edu.org";

export const appLink = (path: string) => `${getCobeBase()}${path.startsWith("/") ? path : `/${path}`}`;
export const cobeLink = (path = "") => `${getCobeBase()}${path && !path.startsWith("/") ? `/${path}` : path}`;
export const amirnetLink = (path = "") => `${engBase}${path}`;
export const yaelLink = (path = "") => `${hebBase}${path}`;
