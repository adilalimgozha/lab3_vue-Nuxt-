<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    id: Number,
    PersonName: String,
    Avatar: String,
    PubDate: Date,
    Rating: Number,
    Commentary: String,
    Topic: String,
    today: Date,
    perses: Array,
    filterDecision: Function,
})

// Увеличение рейтинга
const rate = ref(props.Rating)

// Function to increase the rating
function liked() {
  // Find the person in the `perses` array based on the `id`
  const person = props.perses.find(person => person.id === props.id)
  if (person && person.Rating < 20) {
    // Increment the local rate and update the corresponding person in `perses`
    rate.value += 1
    person.Rating = rate.value
  }
}

// Написание текста о дате в зависимости от разницы с сегодняшней датой
const pub_date = ref("")

const day = ref(props.PubDate.getDate())
const month = ref(props.PubDate.getMonth())
const year = ref(props.PubDate.getFullYear())
const hours = ref(props.PubDate.getHours())
const minutes = ref(props.PubDate.getMinutes())

const todayDay = ref(props.today.getDate())
const todayMonth = ref(props.today.getMonth() + 1)
const todayYear = ref(props.PubDate.getFullYear())

if (day.value == todayDay.value && month.value == todayMonth.value && year.value == todayYear.value) {
    pub_date.value = `Today, ${hours.value}:${minutes.value}`
} else if ((day.value + 1 == todayDay.value && month.value == todayMonth.value && year.value == todayYear.value)) {
    pub_date.value = `Yesterday, ${hours.value}:${minutes.value}`
} else {
    for (let i = 1; i <= 12; i++) {
        if (todayMonth.value == month.value + i){
            pub_date.value = `${i} month(s) ago, ${hours.value}:${minutes.value}`
            break
        }
        for (let j = 2; j <= 30; j++) {
            if (todayDay.value == day.value + j) {
                pub_date.value = `${j-1} day(s) ago, ${hours.value}:${minutes.value}`
            }
        }
    }
}


</script>

<template>

    <div class="card">
        <div class="card-top">
            <div class="info">
                <div class="name">{{ PersonName }}</div>
                <div class="date">{{ pub_date }}</div>
            </div>

            <div class="rating">
                <div calssName="rating-word">Rating</div>
                <div class="stars">
                    <img v-if="rate < 2" class="star" src="/assets/star-white.png" alt="star">
                    <img v-else-if="rate >= 2 && rate < 4" class="star" src="/assets/star-semi-yellow.png" alt="star">
                    <img v-else-if="rate >= 4" class="star" src="/assets/star-yellow.png" alt="star">

                    <img v-if="rate < 6" class="star" src="/assets/star-white.png" alt="star">
                    <img v-else-if="rate >= 6 && rate < 8" class="star" src="/assets/star-semi-yellow.png" alt="star">
                    <img v-else-if="rate >= 8" class="star" src="/assets/star-yellow.png" alt="star">

                    <img v-if="rate < 10" class="star" src="/assets/star-white.png" alt="star">
                    <img v-else-if="rate >= 10 && rate < 12" class="star" src="/assets/star-semi-yellow.png" alt="star">
                    <img v-else-if="rate >= 12" class="star" src="/assets/star-yellow.png" alt="star">

                    <img v-if="rate < 14" class="star" src="/assets/star-white.png" alt="star">
                    <img v-else-if="rate >= 14 && rate < 16" class="star" src="/assets/star-semi-yellow.png" alt="star">
                    <img v-else-if="rate >= 16" class="star" src="/assets/star-yellow.png" alt="star">

                    <img v-if="rate < 18" class="star" src="/assets/star-white.png" alt="star">
                    <img v-else-if="rate >= 18 && rate < 20" class="star" src="/assets/star-semi-yellow.png" alt="star">
                    <img v-else-if="rate >= 20" class="star" src="/assets/star-yellow.png" alt="star">
                </div>
            </div>

            <img :src="(`/assets/${Avatar}`)" alt="avatar" class="avatar">
        </div>
        

        <div>{{ Commentary }}</div>

        <div class="btn">
            <button class="like" @click="liked(), filterDecision()">Like</button>
        </div>

    </div>

</template>

<style scoped>

    .card{
        width: 70%;
        border-radius: 1.1em;
        color: white;
        background: #5BB9CD;
        padding: 1%;
        font-size: 1.3em;
        font-weight:bold;
        margin: 2em 4.5em;
    }

    .card-top{
        display: flex;
        justify-content: space-between;
    }

    .info{
        width: 30%;
        height: 100%;
        height:fit-content;
        border-radius: 0.7em;
        background: #FFFFF526;
        text-align: center;
    }

    .rating{
        display: grid;
        grid-template-columns: auto;
        text-align: center;
    }

    
   
    .avatar{
        width: 5em;
    }

    .name{
        margin-bottom: 25%;
        margin-top: 10%;
    }

    .date{
        margin-bottom: 10%;
    }

    .like{
        width: 5em;
        height: 2em;
        border-radius: 2em;
        font-size: 0.9em;
        font-weight:bold;
        background: #43EF27;
        color: white;
        border: none;
        cursor: pointer;
        transition: 0.5s;
    }

    .like:hover{
        background-color: rgb(36, 149, 30);
    }
    
    .like:active{
        background-color: #3e8e41;
        box-shadow: 0 5px #727272;
        transform: translateY(2px);
    }

    .btn{
        text-align: right;
        margin-right: 2%;
    }

    .star{
        margin: 0 0.3em;
        width: 1.2em;
    }

</style>
