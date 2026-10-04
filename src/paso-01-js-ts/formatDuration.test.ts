import {formatDuration} from "./formatDuration";

describe("formatDuration", () => {
    //TESTS NORMALES
    test("cero segundos", () => {
        expect(formatDuration(0)).toBe("00:00");
    });

    test("menos de un minuto", () =>{
        expect(formatDuration(5)).toBe("00:05");
    });

    test("exactamente un minuto", () => {
        expect(formatDuration(60)).toBe("01:00");
    });

    test("minutos y segundos", () =>{
        expect(formatDuration(125)).toBe("02:05");
    });

    test("más de una hora sigue contando minutos", () =>{
        expect(formatDuration(3725)).toBe("62:05");
    });

    //TESTS CASOS LÍMITES
    test("tiempo con decimales", () =>{
        expect(formatDuration(90.7)).toBe("");
    });

    test("tiempo negativo", () =>{
        expect(formatDuration(-5)).toBe("");
    });

});
