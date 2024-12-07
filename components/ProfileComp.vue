<template>
    <div class="all">
        <div class="content">
            <div class="title">Profile</div>
            <div class="main">
                <div class="main-left">
                    <img :src="(`/assets/${Avatar}`)" alt="avatar" class="avatar">
                    <div class="info">
                        <div class="inf name">{{ PersonName }}</div>
                        <div v-if="isMyProfile==false">
                            <div class="inf">
                                Age: {{ Age }}
                            </div>
                            <div class="inf">
                                {{ Location }}
                            </div>
                        </div>
                        <div v-else>
                            <form  @submit.prevent="submitFormInfo">
                                <div>
                                    <label for="age">Age</label>
                                    <input class="input" type="text" v-model="Age" name="age" id="age">
                                </div>
                                

                                <input class="input" type="text" v-model="Location" name="loc" id="age">
                                <button type="submit" class="follow-btn">Save</button>
                            </form>
                        </div>

                    </div>
                </div>
                
                <div v-if="isMyProfile==false">
                    <button v-if="followers.includes(user.username) == false" class="follow-btn" @click="handleFollowUser">Follow</button>

                    <button v-else class="follow-btn" @click="handleUnfollowUser">Unfollow</button>
                </div>
                <div v-else>
                    <NuxtLink to="/statistics" @click="to_stat(props.id)"> <button class="follow-btn">Statistic</button> </NuxtLink>
                </div>
                <br>
                <br>
                <NuxtLink to="/friends" @click="to_friends(props.id)"> <button class="follow-btn">Friends</button> </NuxtLink>
            </div>

            <div class="rating">
                <div>Current Rating: </div>
                <div class="stars">
                        <img v-if="props.Rating < 2" class="star" src="/assets/star-white.png" alt="star">
                        <img v-else-if="props.Rating >= 2 && props.Rating < 4" class="star" src="/assets/star-semi-yellow.png" alt="star">
                        <img v-else-if="props.Rating >= 4" class="star" src="/assets/star-yellow.png" alt="star">

                        <img v-if="props.Rating < 6" class="star" src="/assets/star-white.png" alt="star">
                        <img v-else-if="props.Rating >= 6 && props.Rating < 8" class="star" src="/assets/star-semi-yellow.png" alt="star">
                        <img v-else-if="props.Rating >= 8" class="star" src="/assets/star-yellow.png" alt="star">

                        <img v-if="props.Rating < 10" class="star" src="/assets/star-white.png" alt="star">
                        <img v-else-if="props.Rating >= 10 && props.Rating < 12" class="star" src="/assets/star-semi-yellow.png" alt="star">
                        <img v-else-if="props.Rating >= 12" class="star" src="/assets/star-yellow.png" alt="star">

                        <img v-if="props.Rating < 14" class="star" src="/assets/star-white.png" alt="star">
                        <img v-else-if="props.Rating >= 14 && props.Rating < 16" class="star" src="/assets/star-semi-yellow.png" alt="star">
                        <img v-else-if="props.Rating >= 16" class="star" src="/assets/star-yellow.png" alt="star">

                        <img v-if="props.Rating < 18" class="star" src="/assets/star-white.png" alt="star">
                        <img v-else-if="props.Rating >= 18 && props.Rating < 20" class="star" src="/assets/star-semi-yellow.png" alt="star">
                        <img v-else-if="props.Rating >= 20" class="star" src="/assets/star-yellow.png" alt="star">
                </div>
            </div>
        </div>

        <div class="latest-posts">
            Latest posts
        </div>

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
                    :isMyProfile="isMyProfile"
                    :post_id="post_id"
                    ></Person>

            </div>

    </div>
</template>
  
<script setup>
import Person from './Person.vue';
import { ref } from 'vue';
import { useUsersStore } from '~/store/users';
import { useRouter } from 'vue-router';

const router = useRouter()

const props = defineProps({
    isUserFollowing: Boolean,
    id: Number,
    isMyProfile: Boolean,
    PersonName: String,
    Age: Number,
    Location: String,
    Avatar: String,
    Rating: Number,
    posts: Array,
    post_id: Number,
  })

const posts_page = ref(false)

const isMyProfile = ref(props.isMyProfile)
const Age = ref(props.Age); // Reactive variable for Age
const Location = ref(props.Location);
const post_id = ref(props.post_id);

function to_friends(userId) {
    router.push({
    path: `/friends`,
    query: {
        id: userId,
        isMyProfile: isMyProfile.value
    }
  })
}

function to_stat(userId) {
    router.push({
    path: `/statistics`,
    query: {
        id: userId,
        isMyProfile: isMyProfile.value
    }
  })
}



const IsUserFollowing = ref(props.isUserFollowing);//DO IT THROUGH FAVORITES AND SUPPOSE TO WORK

IsUserFollowing.value = (IsUserFollowing.value === false)

console.log("Following?", IsUserFollowing.value)

// Get the store
const usersStore = useUsersStore();
const users = usersStore.$state.users
const user = usersStore.$state.user


const userFollowedId = ref(props.id)
console.log(userFollowedId.value, "idddd")

    const userOnPage = users.find(user => user.id == props.id)

    console.log("user on page", userOnPage)

    const followers = computed(() => {
        if (isMyProfile.value == false){
            return userOnPage.followedBy
        }
       
    })

    const handleFollowUser = () => {
        usersStore.addFollower(userFollowedId.value)
        usersStore.addFollowing(userFollowedId.value)
    }

    const handleUnfollowUser = () => {
        usersStore.deleteFollower(userFollowedId.value)
        usersStore.deleteFollowing(userFollowedId.value)
    }


console.log('User', usersStore.$state.user)


// Method to handle form submission
const submitFormInfo = () => {
  usersStore.updateUser({
    Age: parseInt(Age.value),
    Location: Location.value,
  });

  console.log(usersStore.$state.users)
};


const page = ref(1)

console.log(props.posts[0])

const perses = ref(props.posts.filter(pers => pers.PersonName === props.PersonName))
console.log(perses.value)

const maxPage = ref(Math.ceil(perses.value.length / 4))

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

</script>

<style scoped>
.all{
    background: linear-gradient(180deg, #76C5E7 0%, #FBF3F3 100%);
}

.grid-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(1, 1fr);
}

.latest-posts{
    font-family: Inknut Antiqua;
    font-size: 2em;
    font-weight: 400;
    line-height: 36.11px;
    text-align: left;
    width: 5em;
    margin-left: 4em;
    background-color:#FFFBFB;
}

.rating{
    text-align: center;
}

.main-left{
    width:40em;
    display: flex;
    justify-content: space-between;
}

.info{
    font-family: Inknut Antiqua;
    font-size: 2em;
    font-weight: 400;
    line-height: 41.26px;
    text-align: left;
    color:#F6FC6B;
}

.inf{
    margin-bottom: 0.4em;
}

.name{
    font-family: Inknut Antiqua;
    font-size: 2em;
    font-weight: 400;
    line-height: 41.26px;
    text-align: left;
    color: #DE13FF;
}


.follow-btn{
    width: 10em;
    height: 3em;
    font-size: 0.9em;
    font-weight:bold;
    background: #43EF27;
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.5s;
    }

    .follow-btn:hover{
        background-color: rgb(36, 149, 30);
    }
    
    .follow-btn:active{
        background-color: #3e8e41;
        box-shadow: 0 5px #727272;
        transform: translateY(2px);
    }

.title{
    display: block;
    color: #FFFFFF;
    font-family: Inknut Antiqua;
    font-size: 64px;
    font-weight: 400;
    line-height: 165.06px;
    text-align: left;
    margin-left: 20em;

}

.star{
    height: 2em;
}

.avatar{
    height: 15em;
    border-radius: 5em;
    background: #5EEEF7;

}



.main{
    display: flex;
    justify-content: space-between;
    margin: 0 5em;
}

.input{
    display: inline-block;
    background: #45D2FF;
    border:none;
    font-size: 0.6em;
    padding: 0.3em 0.3em;
}

@media (max-width: 600px) {
        .grid-container {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
        }

        .latest-posts {
            font-size: 1.2em;
            width: 90%;
            margin-left: 0;
            text-align: center;
        }

        .main-left {
            width: 100%;
            flex-direction: column;
            align-items: center;
        }

        .info,
        .name {
            font-size: 1.5em;
        }

        .title {
            font-size: 2em;
            margin-left: 0;
            text-align: center;
        }

        .avatar {
            width: 10em;
            height: 10em;
        }

        .follow-btn {
            width: 8em;
            font-size: 0.8em;
        }

        .main {
            margin: 0 2em;
            flex-direction: column;
            align-items: center;
        }

        .input {
            width: 100%;
            font-size: 0.8em;
        }
    }

    /* Tablet (601px to 900px) */
    @media (max-width: 900px) {
        .grid-container {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
        }

        .latest-posts {
            font-size: 1.5em;
            margin-left: 2em;
            text-align: left;
        }

        .main-left {
            width: 80%;
            flex-direction: column;
            align-items: center;
        }

        .info,
        .name {
            font-size: 1.7em;
        }

        .title {
            font-size: 3em;
            margin-left: 2em;
        }

        .avatar {
            width: 12em;
            height: 12em;
        }

        .follow-btn {
            width: 9em;
            font-size: 0.85em;
        }

        .main {
            margin: 0 3em;
            flex-direction: column;
            align-items: center;
        }

        .input {
            width: 90%;
            font-size: 0.9em;
        }
    }

    /* Desktop (901px and above) */
    @media (min-width: 901px) {
        .grid-container {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
        }

        .latest-posts {
            font-size: 2em;
            margin-left: 4em;
            text-align: left;
        }

        .main-left {
            width: 40em;
            display: flex;
            justify-content: space-between;
        }

        .info,
        .name {
            font-size: 2em;
        }

        .title {
            font-size: 64px;
            margin-left: 20em;
        }

        .avatar {
            width: 15em;
            height: 15em;
        }

        .follow-btn {
            width: 10em;
            font-size: 0.9em;
        }

        .main {
            margin: 0 5em;
        }

        .input {
            font-size: 0.6em;
        }
    }

</style>