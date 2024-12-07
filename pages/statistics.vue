<template>
    <Header :menuBarOpen="menuBarOpen"></Header> 
    <div class="all">
        <div class="name">Statistics</div>
        <StatComp :isMyProfile="isMyProfile"></StatComp>
    </div>
</template>

<script setup>
import Header from '~/components/Header.vue';
import StatComp from '~/components/StatComp.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.query.id;
const isMyProfile = route.query.isMyProfile === 'true';

</script>

<style scoped>
.all{
    background: linear-gradient(180deg, #76C5E7 0%, #FBF3F3 100%);
    min-height:39em;
    color:white
}

.name{
    color: white;
    font-size: 3em;
    font-weight: bold;
    margin-left: 80%
}

   /* Mobile (up to 600px) */
   @media (max-width: 600px) {
        .name {
            font-size: 1.5em; /* Reduce font size for mobile */
            margin-left: 10%; /* Adjust position for better mobile visibility */
        }
    }

    /* Tablet (601px to 900px) */
    @media (max-width: 900px) {
        .name {
            font-size: 2.5em; /* Adjust font size for tablet screens */
            margin-left: 50%; /* Center name for tablet screens */
        }
    }

    /* Desktop (901px and above) */
    @media (min-width: 901px) {
        .name {
            font-size: 3em; /* Keep original font size for desktop */
            margin-left: 80%; /* Keep original margin for large screens */
        }
    }
</style>