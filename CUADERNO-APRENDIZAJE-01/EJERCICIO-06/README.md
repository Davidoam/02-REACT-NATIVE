# Ejercicio 06 - Dashboard de métricas

## Qué he aprendido

He aprendido a construir una cuadrícula flexible con `flexDirection: 'row'` y `flexWrap: 'wrap'`, a reutilizar un componente para mostrar varias métricas y a distinguir visualmente distintos tipos de variación.

## Respuesta a la pregunta de comprensión

¿Por qué un ancho del 48% puede ser más práctico que 50% cuando además existe separación entre tarjetas?

Respuesta:

Dos tarjetas con un ancho del 50% ocuparían por sí solas todo el ancho disponible. Si además añadimos un `gap`, el conjunto superaría el 100% y la segunda tarjeta podría saltar a otra fila. Usar aproximadamente un 48% reserva espacio para la separación y permite mantener dos tarjetas por fila.

## Qué he modificado

- He personalizado el encabezado y el periodo del dashboard.
- He cambiado las etiquetas y los valores de las cuatro métricas.
- He añadido una variación negativa para representar las devoluciones.
- He hecho que el componente `Metric` detecte automáticamente si una variación es positiva o negativa.
- Las variaciones positivas aparecen en verde y las negativas en rojo.

## Resultado

La interfaz presenta cuatro métricas distribuidas en dos columnas. Cada tarjeta contiene una etiqueta, un valor y una variación mensual claramente diferenciada por color.
