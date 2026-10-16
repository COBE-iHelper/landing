/** Public deployment URL only. Never put API credentials in a VITE_ variable. */
const configured = import.meta.env.VITE_IHELP_APP_URL?.replace(/\/$/, '');
export const appLink = (path: string) => `${configured || '/app'}${path}`;
