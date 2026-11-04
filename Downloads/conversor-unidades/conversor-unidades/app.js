const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

// Funciones independientes para cada conversión
function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function metrosAKilometros(metros) {
    return metros / 1000;
}

function kilometrosAMetros(kilometros) {
    return kilometros * 1000;
}

// Convierte el resultado a un máximo de 4 decimales sin ceros innecesarios.
function formatearNumero(numero) {
    return Number(numero.toFixed(4)).toLocaleString("es-CO");
}

async function solicitarValor(mensaje, esLongitud = false) {
    while (true) {
        const entrada = (await rl.question(mensaje)).trim();

        if (entrada === "") {
            console.log("Error: debes ingresar un valor. Inténtalo nuevamente.");
            continue;
        }

        // Permite ingresar decimales con punto o con coma.
        const valor = Number(entrada.replace(",", "."));

        if (!Number.isFinite(valor)) {
            console.log("Error: valor no numérico o no finito. Inténtalo nuevamente.");
            continue;
        }

        if (esLongitud && valor < 0) {
            console.log("Error: la longitud no puede ser negativa.");
            continue;
        }

        return valor;
    }
}

async function ejecutarConversor() {
    let opcion = "";

    do {
        console.log("\n===== CONVERSOR DE UNIDADES =====");
        console.log("1. Celsius a Fahrenheit");
        console.log("2. Fahrenheit a Celsius");
        console.log("3. Metros a kilómetros");
        console.log("4. Kilómetros a metros");
        console.log("5. Salir");

        opcion = (await rl.question("Selecciona una opción (1-5): ")).trim();

        switch (opcion) {
            case "1": {
                const valor = await solicitarValor("Ingresa los grados Celsius: ");
                const resultado = celsiusAFahrenheit(valor);
                console.log(`${formatearNumero(valor)} °C = ${formatearNumero(resultado)} °F`);
                break;
            }
            case "2": {
                const valor = await solicitarValor("Ingresa los grados Fahrenheit: ");
                const resultado = fahrenheitACelsius(valor);
                console.log(`${formatearNumero(valor)} °F = ${formatearNumero(resultado)} °C`);
                break;
            }
            case "3": {
                const valor = await solicitarValor("Ingresa los metros: ", true);
                const resultado = metrosAKilometros(valor);
                console.log(`${formatearNumero(valor)} m = ${formatearNumero(resultado)} km`);
                break;
            }
            case "4": {
                const valor = await solicitarValor("Ingresa los kilómetros: ", true);
                const resultado = kilometrosAMetros(valor);
                console.log(`${formatearNumero(valor)} km = ${formatearNumero(resultado)} m`);
                break;
            }
            case "5":
                console.log("Gracias por usar el conversor. ¡Hasta pronto!");
                break;
            default:
                console.log("Opción inválida. Selecciona una opción del 1 al 5.");
        }
    } while (opcion !== "5");

    rl.close();
}

ejecutarConversor().catch((error) => {
    console.error("Ocurrió un error inesperado:", error.message);
    rl.close();
});
