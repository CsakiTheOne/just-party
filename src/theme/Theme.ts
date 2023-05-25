import LocalStorage from "../data/Local";

export type DayNightTheme = 'light' | 'dark';

export default class Theme {
    static colorPrimary = LocalStorage.getPrimary();
    static colorOnPrimary = '#fff';
    static colorBackground = LocalStorage.getDayNightTheme() === 'light' ? '#eee' : '#121212';
    static colorOnBackground = LocalStorage.getDayNightTheme() === 'light' ? '#121212' : '#eee';
    static colorSurface = LocalStorage.getDayNightTheme() === 'light' ? LocalStorage.getPrimary() + '22' : LocalStorage.getPrimary() + '05';
    static colorOnSurface = this.colorOnBackground;
    static colorError = '#c00';
    static colorOnError = '#fff';

    static dimSpacing = 20;
    static dimBorderRadius = 16;
}
