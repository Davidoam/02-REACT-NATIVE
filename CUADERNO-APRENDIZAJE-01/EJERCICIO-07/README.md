# Ejercicio 07 - Feed de noticias

## Qué he aprendido

He aprendido a usar `ScrollView` para permitir el desplazamiento vertical cuando el contenido supera el tamaño de la pantalla. También he aprendido a crear y reutilizar un componente mediante props.

## Respuesta a la pregunta de comprensión

¿Qué parte debe cambiar entre una noticia y otra y qué parte debería permanecer igual?

Respuesta:

Entre una noticia y otra deben cambiar los datos, como la categoría, el título y, si fuera necesario, la fecha. Debe permanecer igual la estructura visual de la tarjeta y sus estilos, porque todas las noticias se muestran con el componente reutilizable `NewsCard`.

## Qué he modificado

- He usado `ScrollView` como contenedor principal de la pantalla.
- He creado el componente reutilizable `NewsCard`.
- He definido las props `category` y `title` para mostrar contenido distinto en cada tarjeta.
- He reutilizado el mismo componente para mostrar cuatro noticias diferentes.
- He completado el reto añadiendo una cuarta noticia sin duplicar la definición de `NewsCard`.

## Resultado

La interfaz muestra un encabezado y cuatro tarjetas de noticias. Cada tarjeta tiene una categoría, un título y una fecha, y la pantalla permite desplazarse si el contenido no cabe.
