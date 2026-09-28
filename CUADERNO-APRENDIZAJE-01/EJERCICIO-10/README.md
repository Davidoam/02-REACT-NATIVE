# Ejercicio 10 - Proyecto final: Fitness

## Qué he aprendido

He aprendido a dividir una interfaz compleja en secciones, combinar componentes reutilizables y aplicar jerarquía visual, Flexbox, tarjetas, barras de progreso y desplazamiento dentro de una misma pantalla.

## Respuesta a la pregunta de comprensión

¿Qué decisiones visuales has tomado por tu cuenta y qué conceptos de ejercicios anteriores has recuperado?

Respuesta:

He elegido una paleta violeta con un acento turquesa para diferenciar la tarjeta principal y el progreso del fondo general. También he colocado las actividades recientes en una fila de dos tarjetas para cambiar la distribución original y aprovechar mejor el ancho de la pantalla.

He recuperado el uso de `ScrollView` para permitir desplazamiento, Flexbox con `row` y `wrap` para crear cuadrículas, el modelo de caja para construir tarjetas, componentes con props para reutilizar diseños y dos componentes `View` anidados para representar la barra de progreso.

## Qué he modificado

- He personalizado el saludo y el nombre de la persona usuaria.
- He cambiado completamente la paleta a tonos violeta y turquesa.
- He actualizado el objetivo diario a 8.200 de 10.000 pasos y la barra al 82%.
- He cambiado los valores y textos de las cuatro métricas.
- He hecho más flexible el grid mediante `flexBasis` y `flexGrow`.
- He cambiado la distribución de las actividades recientes a una fila de dos tarjetas.
- He añadido iconos y nuevos contenidos a las actividades.
- He añadido espacio inferior al contenido para que el final sea legible al desplazarse.

## Resultado

La interfaz muestra un dashboard fitness personalizado, coherente y adaptable a una pantalla móvil. Incluye una tarjeta destacada con el objetivo diario, una barra de progreso, cuatro métricas reutilizando `StatCard` y dos actividades recientes distribuidas horizontalmente.
