# Conversor de unidades

## Descripción
Mini-proyecto del Módulo I de Fundamentos de JavaScript. Permite convertir temperaturas y longitudes desde un menú de consola.

## Requisitos
- Node.js instalado.
- No utiliza librerías externas; `readline/promises` es un módulo integrado de Node.js.

## Cómo ejecutar
1. Abre una terminal dentro de la carpeta del proyecto.
2. Ejecuta:

```bash
node app.js
```

3. Selecciona una opción del menú del 1 al 5.
4. Ingresa el valor cuando el programa lo solicite. Para salir, selecciona `5`.

## Conversiones disponibles
1. Celsius a Fahrenheit: `F = (C × 9 / 5) + 32`
2. Fahrenheit a Celsius: `C = (F - 32) × 5 / 9`
3. Metros a kilómetros: `km = m / 1000`
4. Kilómetros a metros: `m = km × 1000`

## Validaciones
- Rechaza entradas vacías.
- Rechaza entradas no numéricas y valores no finitos.
- Permite temperaturas negativas.
- Rechaza longitudes negativas.
- Informa cuando se selecciona una opción inválida.
- Permite repetir conversiones hasta seleccionar la opción de salida.

## Registro de pruebas

| Entrada / acción | Resultado esperado | Resultado obtenido | Estado |
|---|---|---|---|
| 0 °C a °F | 32 °F | Pendiente de ejecutar | Pendiente |
| 100 °C a °F | 212 °F | Pendiente de ejecutar | Pendiente |
| 32 °F a °C | 0 °C | Pendiente de ejecutar | Pendiente |
| 1500 m a km | 1,5 km | Pendiente de ejecutar | Pendiente |
| 2,5 km a m | 2500 m | Pendiente de ejecutar | Pendiente |
| -10 °C a °F | 14 °F | Pendiente de ejecutar | Pendiente |
| -5 m a km | Error: longitud negativa | Pendiente de ejecutar | Pendiente |
| `abc` | Error: valor no numérico | Pendiente de ejecutar | Pendiente |
| Entrada vacía | Solicitar valor válido | Pendiente de ejecutar | Pendiente |
| Opción inexistente | Avisar opción inválida y mostrar menú | Pendiente de ejecutar | Pendiente |

**Importante:** ejecuta cada prueba y actualiza las columnas “Resultado obtenido” y “Estado” con lo que observes realmente.

## Conceptos de JavaScript utilizados
- Variables y tipos de datos.
- Operadores aritméticos.
- Funciones reutilizables.
- Condicionales y `switch`.
- Ciclo `do...while`.
- Validación con `Number.isFinite`.
- Entrada de datos por consola con Node.js.
