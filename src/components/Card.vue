<script setup>

const props = defineProps(['picture', 'name'])

</script>

<template>
    <div>
        <h2>{{ name }}</h2>
        <img :src="picture" alt="">
    </div>
</template>

<style scoped>
div {
    cursor: pointer;
    padding: 1rem;
    border: 1px solid black;
    user-select: none;

}
</style>