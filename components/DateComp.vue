<script setup>

const props = defineProps({
    showDate: Function
})

</script>

<template>

    <div>{{ showDate() }}</div>

</template>

<style scoped>
    div{
        margin: 1em 2em;
        font-size: 3em;
        font-weight: 400;
        width: 25%;
        text-align: center;
        background: #5BB9CD;
        color: white;
        border-radius: 8px;
    }
    @media (max-width: 600px) {
        div {
            width: 80%; /* Increase width on smaller screens */
            font-size: 2em; /* Reduce font size on mobile */
        }
    }

    @media (max-width: 900px) {
        div {
            width: 80%; /* Increase width on smaller screens */
            font-size: 2em; /* Reduce font size on mobile */
        }
    }
    @media (min-width: 900px) {
        div {
            width: 80%; /* Increase width on smaller screens */
            font-size: 2em; /* Reduce font size on mobile */
        }
    }
</style>