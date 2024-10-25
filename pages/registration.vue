<template>
    <div>
        <Header :menuBarOpen="menuBarOpen"></Header> 
        <RegistrationForm :confirmation="comfirmation"></RegistrationForm>
    </div>
</template>

<script setup>
import Header from '~/components/Header.vue';
import RegistrationForm from '~/components/RegistrationForm.vue';
import { ref } from 'vue';

const comfirmation = ref(false)

</script>

<style scoped>

</style>