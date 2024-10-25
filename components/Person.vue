<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router'

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
    Age: Number,
    Location: String,
    persons: Array,
})

const router = useRouter()

// Увеличение рейтинга
const rate = ref(props.Rating)

const personsString = JSON.stringify(props.persons);

function to_details(userId) {
    router.push({
    path: `/profile/${userId}`,
    query: {
        PersonName: props.PersonName,
        Age: props.Age,
        Location: props.Location,
        Avatar: props.Avatar,
        Rating: rate.value,
        persons: personsString,
    }
  })
}

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

const pub_date = ref("");

// Преобразование строк в объекты Date
const pubDate = new Date(props.PubDate);
const todayDate = new Date(props.today);

// Получение компонентов даты
const day = pubDate.getDate();
const month = pubDate.getMonth(); // Январь - 0, Декабрь - 11
const year = pubDate.getFullYear();
const hours = pubDate.getHours();
const minutes = pubDate.getMinutes();

// Получение текущих компонентов даты
const todayDay = todayDate.getDate();
const todayMonth = todayDate.getMonth(); // Январь - 0, Декабрь - 11
const todayYear = todayDate.getFullYear();

// Форматирование строки даты
if (day === todayDay && month === todayMonth && year === todayYear) {
    pub_date.value = `Today, ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
} else if (day === todayDay - 1 && month === todayMonth && year === todayYear) {
    pub_date.value = `Yesterday, ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
} else {
    const monthDiff = todayMonth - month + (todayYear - year) * 12;

    if (monthDiff > 0 && monthDiff <= 12) {
        pub_date.value = `${monthDiff} month(s) ago, ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    } else {
        const dayDiff = todayDay - day + (todayMonth === month ? 0 : (new Date(todayYear, todayMonth, 0).getDate() - day));
        
        if (dayDiff > 0) {
            pub_date.value = `${dayDiff} day(s) ago, ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        } else {
            pub_date.value = `On ${day}/${month + 1}/${year}, ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        }
    }
}



</script>

<template>

    <div class="card">
        <div class="card-top">
            <div class="info">
                <NuxtLink @click="to_details(id)" :to="`/profile/${id}`"><div class="name" >{{ PersonName }}</div></NuxtLink>
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
