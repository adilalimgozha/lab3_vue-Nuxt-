<script setup>

    const props = defineProps({
        name: String
    })

</script>

<template>

    <div class="card">
        <div><img src="/assets/car.png" alt="blog_pic"></div>
        <div>{{ name }}</div>
    </div>

</template>

<style scoped>


</style>