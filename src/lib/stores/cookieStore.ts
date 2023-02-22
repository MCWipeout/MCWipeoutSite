import createLocalStorageStore from './localStorageStore';

interface CookieSettings {
	statistics: boolean;
}
const COOKIE_KEY = 'cookies';
const defaultCookieSettings = {
	statistics: false
};
const allowCookies = createLocalStorageStore<CookieSettings>(COOKIE_KEY, defaultCookieSettings);

const SHOW_COOKIE_SETTINGS_KEY = 'showCookieNotice';
const showCookieNotice = createLocalStorageStore<boolean>(SHOW_COOKIE_SETTINGS_KEY, true);

export { allowCookies, showCookieNotice };
