/** Public deployment URLs for the SkillUp Educational Suite */
const cobeBase = import.meta.env.VITE_IHELP_APP_URL?.replace(/\/$/, '') || 'https://cobe.skillup-edu.org';
const engBase = import.meta.env.VITE_SKILLUP_ENG_URL?.replace(/\/$/, '') || 'https://amirnet.skillup-edu.org';
const hebBase = import.meta.env.VITE_SKILLUP_HEB_URL?.replace(/\/$/, '') || 'https://yael.skillup-edu.org';

export const appLink = (path: string) => `${cobeBase}${path}`;
export const cobeLink = (path = '') => `${cobeBase}${path}`;
export const amirnetLink = (path = '') => `${engBase}${path}`;
export const yaelLink = (path = '') => `${hebBase}${path}`;
