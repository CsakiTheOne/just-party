export default class Party {
    id: string | undefined;
    title: string;

    constructor(
        title: string,
    ) {
        this.title = title;
    }
}