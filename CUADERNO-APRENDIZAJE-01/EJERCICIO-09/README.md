# Ejercicio 09 - Interfaz bancaria

## Qué he aprendido

He aprendido a construir una pantalla compleja mediante la composición de bloques visuales y componentes reutilizables. También he practicado la distribución horizontal con Flexbox y el uso de props para mostrar datos diferentes con una misma estructura.

## Respuesta a la pregunta de comprensión

¿Qué partes de esta pantalla convertirías en componentes y cuáles dejarías directamente en `App`? Justifica.

Respuesta:

Convertiría los movimientos en un componente `Movement` porque todos comparten la misma estructura y solo cambian el título, la fecha y el importe. También convertiría las acciones rápidas en un componente `QuickAction`, ya que repiten el icono y la etiqueta con el mismo diseño.

Dejaría en `App` el saludo, el nombre, la tarjeta de saldo y los títulos de sección porque organizan esta pantalla concreta y no se repiten dentro de ella. Si la tarjeta de saldo fuera a utilizarse en otras pantallas, también tendría sentido extraerla a un componente independiente.

## Qué he modificado

- He añadido tres acciones rápidas en una fila: Enviar, Recibir y Más.
- He creado el componente reutilizable `QuickAction`.
- He añadido un quinto movimiento positivo correspondiente a un reembolso.
- He hecho que `Movement` detecte los importes positivos y los muestre en color verde sin cambiar su estructura.

## Resultado

La interfaz muestra un saludo, el nombre de la persona usuaria, una tarjeta de saldo destacada, tres acciones rápidas y cinco movimientos. Los movimientos reutilizan una única estructura y los importes positivos se distinguen visualmente en verde.
