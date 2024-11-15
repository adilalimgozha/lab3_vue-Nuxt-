<script setup>
import Header from './components/Header.vue';
import { computed, ref } from 'vue';
import Person from './components/Person.vue';
import DateComp from './components/DateComp.vue';
import SecondFloor from './components/SecondFloor.vue';
import Menu from './components/Menu.vue';
import _ from 'lodash';
import Login from '~/components/Login.vue';
import { useUsersStore } from '~/store/users';
import { usePostsStore } from '~/store/posts';

const usersStore = useUsersStore();
const postsStore = usePostsStore()



const posts = ref([
        { id: 1,
            user_id: 1,
        username: "Mark Twen",
        password: "q",
        Age: 32,
        Location: "Almaty, KZ",
        PersonName: "Mark Twen",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 8, 19, 14, 30),
        Rating: 6,
        Commentary: "Adventure",
        Topic: "Adventure" },
        { id: 2,
            user_id: 2,
            username: "Peter Parker",
            password: "q",
        Age: 32,
        Location: "Almaty, KZ",
        PersonName: "Peter Parker",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 19, 11, 30),
        Rating: 6,
        Commentary: "Nature",
        Topic: "Nature" },
        { id: 3,
            user_id: 3,
            username: "Max Max",
            password: "q",
        Age: 32,
        Location: "Almaty, KZ",
        PersonName: "Max Max",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 19, 12, 30),
        Rating: 2,
        Commentary: "Adventure",
        Topic: "Adventure" },
        { id: 4,
            user_id: 4,
            username: "Suna Suna",
            password: "q",
        Age: 32,
        Location: "Almaty, KZ",
        PersonName: "Suna Suna",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 19, 13, 30),
        Rating: 10,
        Commentary: "Adventure",
        Topic: "Adventure" },
        { id: 5,
            user_id: 5,
            username: "Bror Bror",
            password: "q",
                    Age: 32,
        Location: "Almaty, KZ",
        PersonName: "Bror Bror",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 17, 14, 40),
        Rating: 10,
        Commentary: "Nature",
        Topic: "Nature" },
        { id: 6,
            user_id: 6,
            username: "Robert Robert",
            password: "q",
                    Age: 32,
        Location: "Almaty, KZ",
        PersonName: "Robert Robert",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 17, 15, 40),
        Rating: 14,
        Commentary: "Adventure",
        Topic: "Adventure" },
        { id: 7,
            user_id: 7,
            username: "Alish Alish",
            password: "q",
                    Age: 32,
        Location: "Almaty, KZ",
        PersonName: "Alish Alish",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 17, 16, 40),
        Rating: 8,
        Commentary: "Adventure",
        Topic: "Adventure" },
        { id: 8,
            user_id: 8,
            username: "Annie Annie",
            password: "q",
                    Age: 34,
        Location: "Almaty, KZ",
        PersonName: "Annie Annie",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 17, 17, 40),
        Rating: 16,
        Commentary: "Modern",
        Topic: "Modern" },
        { id: 9,
            user_id: 9,
            username: "Erke Erke",
            password: "q",
                        Age: 34,
            Location: "Almaty, KZ",
        PersonName: "Erke Erke",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 17, 18, 40),
        Rating: 12,
        Commentary: "Adventure",
        Topic: "Adventure" },
        { id: 10,
            user_id: 10,
            username: "Ali Ali",
            password: "q",
            
            Age: 34,
            Location: "Almaty, KZ",
        PersonName: "Ali Ali",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 17, 19, 40),
        Rating: 18,
        Commentary: "Adventure",
        Topic: "Adventure" },
        { id: 11,
            user_id: 11,
            username: "Nurik Nurik",
            password: "q",
            
            Age: 34,
            Location: "Almaty, KZ",
        PersonName: "Nurik Nurik",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 17, 20, 40),
        Rating: 20,
        Commentary: "Education",
        Topic: "Education" },
        { id: 12,
            user_id: 12,
            username: "Adil Adil",
            password: "q",
            
            Age: 34,
            Location: "Almaty, KZ",
        PersonName: "Adil Adil",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 17, 21, 40),
        Rating: 6,
        Commentary: "Fasion",
        Topic: "Fashion" },
        { id: 13,
            user_id: 13,
            username: "Ulan Ulan",
            password: "q",
            
            Age: 34,
            Location: "Almaty, KZ",
        PersonName: "Ulan Ulan",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 17, 22, 40),
        Rating: 4,
        Commentary: "Fashion",
        Topic: "Fashion" },
        { id: 14,
            user_id: 14,
            username: "Kirill Kirill",
            password: "q",
            
            Age: 34,
            Location: "Almaty, KZ",
        PersonName: "Kirill Kirill",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 17, 23, 40),
        Rating: 16,
        Commentary: "Fashion",
        Topic: "Fashion" },
        { id: 15,
            user_id: 15,
            username: "Nikita Nikita",
            password: "q",
            
            Age: 34,
            Location: "Almaty, KZ",
        PersonName: "Nikita Nikita",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 17, 11, 10),
        Rating: 18,
        Commentary: "Modern",
        Topic: "Modern" },
        { id: 16,
            user_id: 16,
            username: "Zhasik Zhasik",
            password: "q",
            
            Age: 34,
            Location: "Almaty, KZ",
        PersonName: "Zhasik Zhasik",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 17, 12, 10),
        Rating: 8,
        Commentary: "Fashion",
        Topic: "Fashion" },
        { id: 17,
            user_id: 17,
            username: "Tima Tima",
            password: "q",
            
            Age: 34,
            Location: "Almaty, KZ",
        PersonName: "Tima Tima",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 17, 13, 10),
        Rating: 10,
        Commentary: "Modern",
        Topic: "Modern" },
        { id: 18,
            user_id: 18,
            username: "Saba Saba",
            password: "q",
            
            Age: 25,
            Location: "Almaty, KZ",
        PersonName: "Saba Saba",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 18, 14, 10),
        Rating: 10,
        Commentary: "Education",
        Topic: "Education" },
        { id: 19,
            user_id: 19,
            username: "Damir Damir",
            password: "q",
            
            Age: 25,
            Location: "Almaty, KZ",
        PersonName: "Damir Damir",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 18, 15, 10),
        Rating: 14,
        Commentary: "Nature",
        Topic: "Nature" },
        { id: 20,
            user_id: 20,
            username: "Dima Dima",
            password: "q",
            
            Age: 25,
            Location: "Almaty, KZ",
        PersonName: "Dima Dima",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 18, 16, 10),
        Rating: 12,
        Commentary: "Nature",
        Topic: "Nature" },
        { id: 21,
            user_id: 21,
            username: "Alen Alen",
            password: "q",
            
            Age: 25,
            Location: "Almaty, KZ",
        PersonName: "Alen Alen",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 16, 17, 10),
        Rating: 8,
        Commentary: "Nature",
        Topic: "Nature" },
        { id: 22,
            user_id: 22,
            username: "Madina Madina",
            password: "q",
            
            Age: 25,
            Location: "Almaty, KZ",
        PersonName: "Madina Madina",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 16, 21, 10),
        Rating: 8,
        Commentary: "Education",
        Topic: "Education" },
        { id: 23,
            user_id: 23,
            username: "Alex Alex",
            password: "q",
            
            Age: 25,
            Location: "Almaty, KZ",
        PersonName: "Alex Alex",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 9, 16, 15, 45),
        Rating: 6,
        Commentary: "Modern",
        Topic: "Modern" },
        { id: 24,
            user_id: 3,
            username: "Max Max",
            password: "q",
        Age: 32,
        Location: "Almaty, KZ",
        PersonName: "Max Max",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 1, 19, 12, 30),
        Rating: 2,
        Commentary: "Modern",
        Topic: "Modern" },
        { id: 25,
            user_id: 3,
            username: "Max Max",
            password: "q",
        Age: 32,
        Location: "Almaty, KZ",
        PersonName: "Max Max",
        Avatar: "ava1.png",
        PubDate: new Date(2024, 1, 19, 12, 30),
        Rating: 5,
        Commentary: "Modern",
        Topic: "Modern" },
    ]);

const persons = ref([
        { id: 1,
        username: "Mark Twen",
        password: "q",
        Age: 32,
        Location: "Almaty, KZ",
        PersonName: "Mark Twen",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 6},
        { id: 2,
        username: "Peter Parker",
        password: "q",
        Age: 32,
        Location: "Almaty, KZ",
        PersonName: "Peter Parker",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 6},
        { id: 3,
        username: "Max Max",
        password: "q",
        Age: 32,
        Location: "Almaty, KZ",
        PersonName: "Max Max",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 2},
        { id: 4,
        username: "Suna Suna",
        password: "q",
        Age: 32,
        Location: "Almaty, KZ",
        PersonName: "Suna Suna",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 10},
        { id: 5,
        username: "Bror Bror",
        password: "q",
        Age: 32,
        Location: "Almaty, KZ",
        PersonName: "Bror Bror",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 10},
        { id: 6,
        username: "Robert Robert",
        password: "q",
        Age: 32,
        Location: "Almaty, KZ",
        PersonName: "Robert Robert",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 14},
        { id: 7,
        username: "Alish Alish",
        password: "q",
        Age: 32,
        Location: "Almaty, KZ",
        PersonName: "Alish Alish",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 8},
        { id: 8,
        username: "Annie Annie",
        password: "q",
        Age: 34,
        Location: "Almaty, KZ",
        PersonName: "Annie Annie",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 16},
        { id: 9,
        username: "Erke Erke",
        password: "q",
        Age: 34,
        Location: "Almaty, KZ",
        PersonName: "Erke Erke",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 12},
        { id: 10,
        username: "Ali Ali",
        password: "q",
        Age: 34,
        Location: "Almaty, KZ",
        PersonName: "Ali Ali",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 18},
        { id: 11,
        username: "Nurik Nurik",
        password: "q",
        Age: 34,
        Location: "Almaty, KZ",
        PersonName: "Nurik Nurik",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 20},
        { id: 12,
        username: "Adil Adil",
        password: "q",
        Age: 34,
        Location: "Almaty, KZ",
        PersonName: "Adil Adil",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 6},
        { id: 13,
        username: "Ulan Ulan",
        password: "q",
        Age: 34,
        Location: "Almaty, KZ",
        PersonName: "Ulan Ulan",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 4},
        { id: 14,
        username: "Kirill Kirill",
        password: "q",
        Age: 34,
        Location: "Almaty, KZ",
        PersonName: "Kirill Kirill",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 16},
        { id: 15,
        username: "Nikita Nikita",
        password: "q",
        Age: 34,
        Location: "Almaty, KZ",
        PersonName: "Nikita Nikita",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 18},
        { id: 16,
        username: "Zhasik Zhasik",
        password: "q",
        Age: 34,
        Location: "Almaty, KZ",
        PersonName: "Zhasik Zhasik",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 8},
        { id: 17,
        username: "Tima Tima",
        password: "q",
        Age: 34,
        Location: "Almaty, KZ",
        PersonName: "Tima Tima",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 10,
        Commentary: "Modern",
        Topic: "Modern" },
        { id: 18,
        username: "Saba Saba",
        password: "q",
        Age: 25,
        Location: "Almaty, KZ",
        PersonName: "Saba Saba",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 10},
        { id: 19,
        username: "Damir Damir",
        password: "q",
        Age: 25,
        Location: "Almaty, KZ",
        PersonName: "Damir Damir",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 14},
        { id: 20,
        username: "Dima Dima",
        password: "q",
        Age: 25,
        Location: "Almaty, KZ",
        PersonName: "Dima Dima",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 12},
        { id: 21,
        username: "Alen Alen",
        password: "q",
        Age: 25,
        Location: "Almaty, KZ",
        PersonName: "Alen Alen",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 8},
        { id: 22,
        username: "Madina Madina",
        password: "q",
        Age: 25,
        Location: "Almaty, KZ",
        PersonName: "Madina Madina",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 8},
        { id: 23,
        username: "Alex Alex",
        password: "q",
        Age: 25,
        Location: "Almaty, KZ",
        PersonName: "Alex Alex",
        Avatar: "ava1.png",
        followedBy: [],
        following: [],
        Rating: 6},
    ]);

if (usersStore.$state.users.length == 0){
    usersStore.addUsers(persons.value);
}
console.log("ALLLL USERS", usersStore.$state.users)
persons.value = usersStore.$state.users

if (postsStore.$state.posts.length == 0){
    postsStore.addPosts(posts.value);
}
console.log("ALLLL Posts", postsStore.$state.posts)
posts.value = postsStore.$state.posts

const posts_page = ref(true)

// Нынешняя дата
const today = ref(new Date());
const date = today.value.getDate()
const month = today.value.getMonth() + 1
const year = today.value.getFullYear()

function showDate(){
    return `${date}.${month}.${year}`
}

// Смена темы блога
const page = ref(1)
const topic = ref("Adventure")

function toAdventure(){
    topic.value = "Adventure"
}
function toNature(){
    topic.value = "Nature"
}
function toFashion(){
    topic.value = "Fashion"
}
function toModern(){
    topic.value = "Modern"
}
function toEducation(){
    topic.value = "Education"
}

// Смена страниц
function nextPage(){
    if (page.value == maxPage.value){
        return
    }
    page.value++
}

function prevPage(){
    if (page.value == 1){
        return
    }
    page.value--
}


// Боковое меню
const isMenuBarOpen = ref(false)

function menuBarOpen(){
    isMenuBarOpen.value = true
}

function menuBarClose(){
    isMenuBarOpen.value = false
}


// Фильтрация людей с определенной темой блога
const perses = ref(posts.value.filter(pers => pers.Topic === "Adventure"))
const maxPage = ref(Math.ceil(perses.value.length / 4))

function onlyAdventure(){
    perses.value = posts.value.filter(pers => pers.Topic == "Adventure")
    maxPage.value = Math.ceil(perses.value.length / 4)
    page.value = 1
    filterBy.value = 'Filter By'
}

function onlyNature(){
    perses.value = posts.value.filter(pers => pers.Topic == "Nature")
    maxPage.value = Math.ceil(perses.value.length / 4)
    page.value = 1
    filterBy.value = 'Filter By'
}

function onlyFashion(){
    perses.value = posts.value.filter(pers => pers.Topic == "Fashion")
    maxPage.value = Math.ceil(perses.value.length / 4)
    page.value = 1
    filterBy.value = 'Filter By'
}

function onlyModern(){
    perses.value = posts.value.filter(pers => pers.Topic == "Modern")
    maxPage.value = Math.ceil(perses.value.length / 4)
    page.value = 1
    filterBy.value = 'Filter By'
}

function onlyEducation(){
    perses.value = posts.value.filter(pers => pers.Topic == "Education")
    maxPage.value = Math.ceil(perses.value.length / 4)
    page.value = 1
    filterBy.value = 'Filter By'
}

//Фильтрация по Рейтингу и Дате
const filterBy = ref('Filter By')

const isFilterClicked = ref(false)

function filterClickChange(){
    isFilterClicked.value = !isFilterClicked.value;
}

function toRating(){
    filterBy.value = "Rating";
}

function toDate(){
    filterBy.value = "PubDate";
}

function filterDecision(){
    if (filterBy.value == "Rating"){
        perses.value = sortedByRating.value
    }else if (filterBy.value == "PubDate"){
        perses.value = sortedByDate.value
    }
    console.log(filterBy.value)
    console.log(isFilterClicked.value)
}

const sortedByRating = computed(() => _.sortBy(perses.value, 'Rating').reverse())
const sortedByDate = computed(() => _.sortBy(perses.value, 'PubDate').reverse())


const isClicked = ref(false);
const handleData = (clicked) => {
  isClicked.value = clicked; // Устанавливаем состояние, полученное от дочернего компонента
  console.log(isClicked.value)
};

const handleLoginSuccess = () => {
    isClicked.value = !isClicked.value;
    alert('Login was successful!');
}

    
</script>

<template>
    <div class="all">
        <Menu v-if="isMenuBarOpen == true" 
        :toAdventure="toAdventure" 
        :toNature="toNature" 
        :toFashion="toFashion" 
        :toModern="toModern"
        :toEducation="toEducation"
        :onlyAdventure="onlyAdventure"
        :onlyNature="onlyNature"
        :onlyFashion="onlyFashion"
        :onlyModern="onlyModern"
        :onlyEducation="onlyEducation"
        :menuBarClose="menuBarClose"></Menu>
        
        <Header :menuBarOpen="menuBarOpen" :posts="posts" @isClicked="handleData"></Header> 

        <div class="login" v-if="isClicked">
            <Login :handleLoginSuccess="handleLoginSuccess" @loginSuccess="handleLoginSuccess"></Login>
        </div>

        <div class="content">
            <DateComp :showDate="showDate"></DateComp>
            <SecondFloor :topic="topic" 
            :maxPage="maxPage" 
            :page="page" 
            :nextPage="nextPage"
            :filterBy="filterBy"
            :isFilterClicked="isFilterClicked"
            :filterClickChange="filterClickChange"
            :toRating="toRating"
            :toDate="toDate"
            :filterDecision="filterDecision"
            :prevPage="prevPage"></SecondFloor>

         

            <div v-if="page <= maxPage" class="grid-container">
                <Person v-for="el in perses.slice((page-1) * 4, page * 4)" 
                    :key="el.id" 
                    :id="el.id"
                    :Age="el.Age"
                    :Location="el.Location"
                    :PersonName="el.PersonName"
                    :Avatar="el.Avatar"
                    :PubDate="el.PubDate"
                    :Rating="el.Rating"
                    :Commentary="el.Commentary"
                    :Topic="el.Topic"
                    :today="today"
                    :perses="perses"
                    :filterDecision="filterDecision"
                    :posts="posts"
                    :posts_page="posts_page"
                    ></Person>

            </div>
        </div>
    </div>
</template>

<style scoped>
    .all{
        background: url("/assets/background-site.png");
        background-size: cover;
        align-content: center;
    }

    .grid-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    .content{
        margin: 5em 7em;
        background: linear-gradient(180deg, rgba(254, 254, 254, 0.7) 0%, rgba(206, 210, 210, 0.7) 40%, rgba(193, 197, 197, 0.7) 62%, rgba(184, 187, 187, 0.7) 100%);
        border: 1px solid #63CFF1;
    }

    .login{
        margin-left: 30em;
    }

</style>
