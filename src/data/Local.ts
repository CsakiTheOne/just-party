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
        return localStorage.getItem('Theme.dayNightTheme') === 'light' ? 'light' : 'dark';
    }
    static setDayNightTheme(theme: DayNightTheme) {
        localStorage.setItem('Theme.dayNightTheme', theme);
    }

    static getPrimaryOptions(): string[] {
        return Object.values(colors.primaries);
    }
    static getPrimary(): string {
        return localStorage.getItem('Theme.primary') ? localStorage.getItem('Theme.primary')! : colors.primaries[0];
    }
    static setPrimary(color: string) {
        localStorage.setItem('Theme.primary', color);
    }
}