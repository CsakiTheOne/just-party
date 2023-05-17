import colors from "./colors";

export type DayNightTheme = 'light' | 'dark';

export default class Theme {
    static colorPrimary = this.getPrimary();
    static colorOnPrimary = '#eee';
    static colorBackground = this.getDayNightTheme() === 'light' ? '#eee' : '#121212';
    static colorOnBackground = this.getDayNightTheme() === 'light' ? '#121212' : '#eee';
    static colorSurface = this.getDayNightTheme() === 'light' ? this.getPrimary() + '22' : this.getPrimary() + '05';
    static colorOnSurface = this.colorOnBackground;

    static dimSpacing = 20;
    static dimBorderRadius = 16;

    // Don't change these functions
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
        return localStorage.getItem('Theme.primary') ? localStorage.getItem('Theme.primary')! : colors.primaries.jdBlue;
    }
    static setPrimary(color: string) {
        localStorage.setItem('Theme.primary', color);
    }

}
