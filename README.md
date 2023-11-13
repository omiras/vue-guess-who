# vue-guess-who

Vamos a implementar el juego quien es quien con Vue.
![Guess Who](https://m.media-amazon.com/images/I/A10mO0i6UmL.jpg)

## Iteración 1 - Componente Card estático

Crea un componente carta en la carpeta `components`, de nombre `Card.vue`.
Este componente va albergar la estructura de una tarjeta o carta con el personaje en questión y su nombre.


Asegúrate que puedes crear la misma carta en tu App.vue varias veces.

## Iteración 2 - Componente Card dinámico

Modifica el componente `Card.vue` para poder establecer las siguientes propiedades

- Especificar la URL de la imagen a cargar
- El nombre de la persona

Modifica el `<template>` de `Card.vue` para usar estas dos nuevas propiedades, y prueba de crear unas cuantas cartas diferentes.

Puedes obtener diferentes fotos de personas _random_ de esta Web:  https://randomuser.me/  
O si lo prefieres, puedes hacer una versión con fotos imágenes de pokemon: https://randompokemon.com/  

## Iteración 3 - Iterar Array de personas

Ahora, queremos usar v-for para generar tantas Card como elementos hay en un array.
Dado el array 

```
const people = [
    {
      name: { title: 'Mr', first: 'Karl', last: 'Johnson' },        
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/med/men/6.jpg', 
      id: '11122222'
    },
    {
      name: { title: 'Mr', first: 'Jezdimir', last: 'Popović' },    
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/med/men/64.jpg',
      id: '458558716'
    },
    {
      name: { title: 'Mrs', first: 'Elli', last: 'Hatala' },        
      gender: 'female',
      picture: 'https://randomuser.me/api/portraits/med/women/55.jpg',
      id: '458558799'
    },
    {
      name: { title: 'Ms', first: 'Deniz', last: 'Topçuoğlu' },
      gender: 'female',
      picture: 'https://randomuser.me/api/portraits/med/women/64.jpg',
      id: '45677777'
    },
    {
      name: { title: 'Madame', first: 'Margot', last: 'Roche' },
      gender: 'female',
      picture: 'https://randomuser.me/api/portraits/med/women/21.jpg',
      id: '48888999'
    },
    {
      name: { title: 'Mrs', first: 'Potishana', last: 'Buryak' },
      gender: 'female',
      picture: 'https://randomuser.me/api/portraits/med/women/88.jpg',
      id: '1234343243'
    },
    {
      name: { title: 'Mr', first: 'Çetin', last: 'Çağıran' },
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/med/men/69.jpg',
      id: '00324324324'
    },
    {
      name: { title: 'Mr', first: 'Peter', last: 'Thompson' },
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/med/men/25.jpg',
      id: '173-60-0652'
    },
    {
      name: { title: 'Ms', first: 'Caitlin', last: 'Garrett' },
      gender: 'female',
      picture: 'https://randomuser.me/api/portraits/med/women/60.jpg',
      id: '0594407T'
    },
    {
      name: { title: 'Ms', first: 'Radomira', last: 'Manuylenko' },
      gender: 'female',
      picture: 'https://randomuser.me/api/portraits/med/women/29.jpg',
      id: '3434234Y'
    }
  ]
```

1. Coloca todos estos objetos en una variable de estado en **App.vue**. Dicha variable podría llamarse _people_
2. Usa adecuadamente v-for para generar tantos Card como elementos hay en el array
3. Fíjate que vas a tener que proporcionar un identificador único para cada Card.

## Iteración 4 - Descartar persona

Queremos que al hacer clic en cualquier tarjeta, esta sea eliminada del array.

1. Usa la directiva @click para que, al hacer clic encima de una de las tarjetas, esta ejecuta una función que se encargue de eliminarla del array
2. El manejador de eventos (función) debe recibir como parámetro el id de la persona para poderla identificar en el array y eliminarla mediante el método _filter_





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
