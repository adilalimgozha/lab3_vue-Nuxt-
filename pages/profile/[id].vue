<template>
<Header :menuBarOpen="menuBarOpen"></Header> 
<ProfileComp :isMyProfile="isMyProfile" :PersonName="PersonName" :Age="Age" :Location="Location" :Avatar="Avatar" :Rating="Rating" :persons="persons"></ProfileComp>

</template>

<script setup>

import ProfileComp from '~/components/ProfileComp.vue'
import { useRoute } from 'vue-router'
import Menu from '~/components/Menu.vue';

const isMyProfile = ref(false)

const route = useRoute()
const PersonName = route.query.PersonName || 'Unknown User'
const Age = route.query.Age ? Number(route.query.Age) : null; 
const Location = route.query.Location 
const Avatar = route.query.Avatar
const Rating = route.query.Rating ? Number(route.query.Rating) : 0;

const personsQuery = route.query.persons;

let persons = [];
if (personsQuery) {
    try {
        // Only parse if it's a string and valid
        persons = JSON.parse(personsQuery);
    } catch (e) {
        console.error("Failed to parse persons:", e);
    }
}

</script>

<style scoped>

</style>