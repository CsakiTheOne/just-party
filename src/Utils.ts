export default class Utils {
    static getOS() {
        console.log(window.navigator.platform);
        const os = ['Windows', 'Mac', 'Android', 'iOS'];
        return os.find(v => (navigator.platform.indexOf(v) >= 0));
    }
}