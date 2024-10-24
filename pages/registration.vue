<template>
    <div>
        <Header :menuBarOpen="menuBarOpen"></Header> 
        <RegistrationForm></RegistrationForm>
    </div>
</template>

<script setup>
import Header from '~/components/Header.vue';
import RegistrationForm from '~/components/RegistrationForm.vue';

</script>

<style scoped>

</style>