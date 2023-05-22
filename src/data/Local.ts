import { DayNightTheme } from "../theme/Theme";
import colors from "../theme/colors";

export default class LocalStorage {
    static getCountry(): string | null {
        return localStorage.getItem('user_country');
    }
    static setCountry(country: string) {
        localStorage.setItem('user_country', country);
    }

    static getDayNightTheme(): DayNightTheme {
        return localStorage.getItem('theme_dayNightTheme') === 'light' ? 'light' : 'dark';
    }
    static setDayNightTheme(theme: DayNightTheme) {
        localStorage.setItem('theme_dayNightTheme', theme);
    }

    static getPrimaryOptions(): string[] {
        return Object.values(colors.primaries);
    }
    static getPrimary(): string {
        return localStorage.getItem('theme_primary') && localStorage.getItem('theme_primary')?.length! > 2 ? localStorage.getItem('theme_primary')! : colors.primaries.jdBlue;
    }
    static setPrimary(color: string) {
        localStorage.setItem('theme_primary', color);
    }
}