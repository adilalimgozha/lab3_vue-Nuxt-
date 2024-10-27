<template>
<Header :menuBarOpen="menuBarOpen"></Header> 
<ProfileComp :isUserFollowing="isUserFollowing" :id="id" :isMyProfile="isMyProfile" :PersonName="PersonName" :Age="Age" :Location="Location" :Avatar="Avatar" :Rating="Rating" :posts="posts"></ProfileComp>

</template>

<script setup>

import ProfileComp from '~/components/ProfileComp.vue'
import { useRoute } from 'vue-router'
import Menu from '~/components/Menu.vue';

const isMyProfile = ref(false)

const route = useRoute()
const id = route.query.id
const PersonName = route.query.PersonName || 'Unknown User'
const Age = route.query.Age ? Number(route.query.Age) : null; 
const Location = route.query.Location 
const Avatar = route.query.Avatar
const Rating = route.query.Rating ? Number(route.query.Rating) : 0;
const isUserFollowing = route.query.isUserFollowing

const postsQuery = route.query.posts;

let posts = [];
if (postsQuery) {
    try {
        // Only parse if it's a string and valid
        posts = JSON.parse(postsQuery);
    } catch (e) {
        console.error("Failed to parse posts:", e);
    }
}

</script>

<style scoped>

</style>