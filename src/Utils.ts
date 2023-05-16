export default class Utils {
    static getOS() {
        console.log(window.navigator.platform);
        const os = ['Windows', 'Mac', 'Android', 'iOS'];
        return os.find(v => ((global as any).window?.navigator.platform.indexOf(v) >= 0));
    }
}