export class Constants {
    public static BASE_URL: string = "http://206.189.96.67:3000/api/v1/";

    public static guidGenerator(): string {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    };
}