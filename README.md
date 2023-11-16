# vue-guess-who

Vamos a implementar el juego quien es quien con Vue.
![Guess Who](https://m.media-amazon.com/images/I/A10mO0i6UmL.jpg)

## Iteración 1 - Componente Card estático

Crea un componente carta en la carpeta `components`, de nombre `Card.vue`.
Este componente va albergar la estructura de una tarjeta o carta con el personaje en questión y su nombre.


Asegúrate que puedes crear la misma carta en tu App.vue varias veces.

## Iteración 2 - Componente Card 

Modifica el componente `Card.vue` para poder establecer las siguientes propiedades

- Especificar la URL de la imagen a cargar
- El nombre de la persona

Modifica el `<template>` de `Card.vue` para usar estas dos nuevas propiedades, y prueba de crear unas cuantas cartas diferentes.

Puedes obtener diferentes fotos de personas _random_ de esta Web:  https://randomuser.me/  
O si lo prefieres, puedes hacer una versión con fotos imágenes de pokemon: https://randompokemon.com/  

## Iteración 3 - Iterar Array de personas

Ahora, queremos usar v-for para generar tantas Card como elementos hay en un array.

0. Importa el fichero _people.json_ en una variable dentro de App.vue
1. Coloca todos estos objetos en una variable de estado en **App.vue**. Dicha variable podría llamarse _allPeople_
2. Usa adecuadamente v-for para generar tantos Card como elementos hay en el array
3. Fíjate que vas a tener que proporcionar un identificador único para cada Card.

## Iteración 4 - Descartar persona

Queremos que al hacer clic en cualquier tarjeta, esta sea eliminada del array.

1. Usa la directiva @click para que, al hacer clic encima de una de las tarjetas, esta ejecuta una función que se encargue de eliminarla del array
2. El manejador de eventos (función) debe recibir como parámetro el id de la persona para poderla identificar en el array y eliminarla mediante el método _filter_

## Iteración 5 - Si solo queda una persona...debe ser la persona que buscábamos!

Cuando solo quede una persona, debemos dar el juego por acabado
Muestra un mensaje con esta información cuando solo quede un sospechoso!



## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
