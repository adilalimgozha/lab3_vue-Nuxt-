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
</style>