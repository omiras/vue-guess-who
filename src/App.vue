<script setup>

import { ref } from "vue"

import people from './assets/people.json'
import Card from './components/Card.vue';

const allPeople = ref(people)

const removePicture = (event) => {
  console.log("🚀 ~ file: App.vue:7 ~ constremovePicture ~ event:", event.currentTarget.id)
  allPeople.value = allPeople.value.filter(p => p.id != event.currentTarget.id)

}

</script>

<template>
  <header>
    <h1>Guess Who?</h1>
  </header>

  <main v-if="allPeople.length != 1">
    <Card @dblclick="removePicture($event)" v-for="p in allPeople" :key="p.id" :id="p.id" :name="p.name.first"
      :picture="p.picture" />
  </main>
  <section v-else>
    <h3>¿El sospechoso/a era <span style="color:green">{{ allPeople[0].name.first }} <img :src="allPeople[0].picture"
          alt=""></span>?</h3>
  </section>
</template>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
