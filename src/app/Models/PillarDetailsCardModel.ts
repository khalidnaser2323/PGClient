export class Card {
    constructor(
        public title: string,
        public description: string,
        public imgUrl: string,
        public buttons: Array<{ buttonName: string, buttonTemplate: string }>,
    ) {

    }
}