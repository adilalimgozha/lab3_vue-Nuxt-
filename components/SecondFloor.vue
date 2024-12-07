<script setup>

import { computed, ref } from 'vue';

const props = defineProps({
    page: Number,
    nextPage: Function,
    maxPage: Number,
    topic: String,
    filterBy: String,
    isFilterClicked: Boolean,
    filterClickChange: Function,
    toRating: Function,
    toDate: Function,
    filterDecision: Function,
    prevPage: Function
})

</script>

<template>
    <div class="second-fl">
        <div class="arrow">
            <img @click="prevPage()" class="img arrow-img back" src="/assets/arrow_back.png" alt="arrow">
            <div class="number">{{page}}/{{maxPage}}</div>
        </div>
        <div class="blogName">
            <div class="name-word">{{topic}}</div>
        </div>
        <div class="grid-container1">
            <div class="rating">
                <span><img class="filter-img" src="/assets/filter.png" alt="filter"></span>
                <span class="rating-word">{{filterBy}}</span>
                <span><img @click="filterClickChange()" class="img filter-btn-img" src="/assets/filter_btn.png" alt="filter_btn"></span>
            </div>
            <div class="grid-container2">
                <button v-if="isFilterClicked == true" @click="filterClickChange(), toRating(), filterDecision()" class="pickFilter">Rating</button>
                <button v-if="isFilterClicked == true" @click="filterClickChange(), toDate(), filterDecision()" class="pickFilter">DateTime</button>
            </div>
        </div>
        <div class="arrow">
            <img @click="nextPage()" class="img arrow-img next" src="/assets/arrow.png" alt="arrow">
            <div class="number">{{page}}/{{maxPage}}</div>
        </div>
    </div>
</template>

<style scoped>

    .filter-btn-img{
        float: right;
    }

    button{
        border: none;
        background-color: beige;
        border: white solid;
    }

    .pickFilter{
        font-size: 2em;
        text-align: center;
    }

    .grid-container1{
        width: 30%;
        gap: 0.4em;
        height: 6em;
        display: grid;
        justify-content:baseline;
        grid-template-columns: auto;
    }

    .grid-container2{
        display: grid;
        grid-template-columns: auto;
    }

    .second-fl{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 6em;
    }

    .blogName{

        font-size: 4em;
        background: #5BB9CD;
        border-radius: 10px;
        padding: 0.1em 1.5em 0.5em 0.5em;
        align-items: center;
        color: white;
        width: 30%;
        height: 100%;
        font-weight: bold;
    }

    .rating{
        font-size: 2.5em;
        background: #EEFCF7;
        align-content: center;
        justify-content: space-between;
        padding: 0 0.3em;
        color:#1DE390;
        font-weight: bold;
        height: 2em;
    }

    .rating-word{
        margin: 0 1em;
    }

    .filter-img{
        width: 0.9em;
    }

    .filter-btn-img{
        width: 0.7em;
        cursor: pointer;
    }

    .arrow-img{
        width:120%;
        cursor: pointer;
    }

    .img:hover{
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        transition: 0.5s ease;
    }

    .number{
        font-size: 2.5em;
        text-align: center;
        font-style: italic;
        color: white;
        font-weight: 100;
    }

    @media (max-width: 600px) {
    .grid-container1 {
        width: 100%; /* Full width on mobile */
        height: auto;
    }

    .second-fl {
        flex-direction: column;
        margin: 2em;
    }

    .blogName {
        width: 100%; /* Full width on mobile */
        font-size: 2em; /* Smaller text on smaller screens */
    }
}

@media (max-width: 900px) {
    .grid-container1 {
        width: 100%; /* Full width on mobile */
        height: auto;
    }

    .second-fl {
        flex-direction: column;
        margin: 2em;
    }

    .blogName {
        width: 100%; /* Full width on mobile */
        font-size: 2em; /* Smaller text on smaller screens */
    }
}
</style>