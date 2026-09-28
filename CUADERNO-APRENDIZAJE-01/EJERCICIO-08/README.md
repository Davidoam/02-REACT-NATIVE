# Ejercicio 08 - Catálogo con FlatList

## Qué he aprendido

He aprendido a separar los datos de su representación visual utilizando un array y `FlatList`. También he aprendido que `renderItem` define cómo se muestra cada elemento y que `keyExtractor` proporciona una clave estable para identificarlo.

## Respuesta a la pregunta de comprensión

¿Qué ventaja tiene cambiar un producto en el array en lugar de buscar su tarjeta manualmente dentro del JSX?

Respuesta:

Modificar el producto en el array permite actualizar sus datos desde un único lugar. `FlatList` vuelve a utilizar `renderItem` para representar la colección, por lo que no es necesario buscar ni modificar manualmente una tarjeta concreta dentro del JSX. Esto reduce la duplicación y facilita mantener o ampliar el catálogo.

## Qué hay que modificar

El ejemplo base ya contiene seis productos y cumple las condiciones principales. Para completar el reto hay que añadir dos objetos nuevos al array `products`, cada uno con un `id` único, un icono, un nombre y un precio.

No es necesario añadir nuevas tarjetas dentro del JSX: `FlatList` las generará automáticamente a partir del array.

## Resultado actual

La interfaz muestra seis productos en una cuadrícula de dos columnas. Cada tarjeta contiene un icono, el nombre del producto y su precio.

## Reto pendiente

Añadir dos productos al array y comprobar que aparecen automáticamente en la cuadrícula sin escribir JSX adicional.