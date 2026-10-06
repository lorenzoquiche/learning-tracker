import {formatDuration} from "./formatDuration";

describe("formatDuration", () => {
    //happy path - pruebas normales
    test("menos de un minuto", () =>{
        expect(formatDuration(5)).toBe("00:05");
    });

    test("minutos y segundos", () =>{
        expect(formatDuration(125)).toBe("02:05");
    });

        test("más de una hora sigue contando minutos", () =>{
        expect(formatDuration(3725)).toBe("01:02:05");
    });

    test("una hora con minutos y segundos", () =>{
        expect(formatDuration(3661)).toBe("01:01:01");
    });

    //boundary values - valores límite
    test("cero segundos", () => {
        expect(formatDuration(0)).toBe("00:00");
    });

    test("exactamente un minuto", () => {
        expect(formatDuration(60)).toBe("01:00");
    });

    test("un segundo antes del minuto", () =>{
        expect(formatDuration(59)).toBe("00:59");
    });

    test("un segundo después del minuto", () =>{
        expect(formatDuration(61)).toBe("01:01");
    });

        test("un segundo antes de la hora", () =>{
        expect(formatDuration(3599)).toBe("59:59");
    });

    test("una hora exacta", () =>{
        expect(formatDuration(3600)).toBe("01:00:00");
    });


    //edge cases - pruebas borde
    test("tiempo con decimales", () =>{
        expect(formatDuration(90.7)).toBe("01:30");
    });

    test("tiempo negativo", () =>{
        expect(formatDuration(-5)).toBe("00:00");
    });

    test("tiempo negativo con decimales", () =>{
        expect(formatDuration(-0.5)).toBe("00:00");
    });
    
    test("tiempo NaN", () =>{
        expect(formatDuration(NaN)).toBe("00:00");
    });


    test("tiempo infinito", () =>{
        expect(formatDuration(Infinity)).toBe("00:00");
    });
});
