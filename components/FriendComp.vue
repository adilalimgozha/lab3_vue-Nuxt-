<template>
    <div class="card">
        <img :src="(`/assets/${friendFull.Avatar}`)" alt="avatar" class="avatar">
        <div class="name">{{ props.friend }}</div>
        <div v-if="isMyProfile">
            <button class="btn" @click="handleUnfollowUser">Unfollow</button>
            <button class="btn">Rename</button>
        </div>
        <div v-if="props.friend != user.username">
            <NuxtLink to="/chat" @click="to_chat()"><button class="btn">Chat</button></NuxtLink> 
        </div>
        <div v-else>
            This is you
        </div>
        
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useUsersStore } from '~/store/users';
import { useRouter } from 'vue-router';

const router = useRouter()

const usersStore = useUsersStore()

const users = usersStore.$state.users
const user = usersStore.$state.user

const props = defineProps({
    friend: String,
    isMyProfile: Boolean
})

const friendFull = users.find(friend => friend.username == props.friend)
const isMyProfile = ref(props.isMyProfile)
console.log('my?????', isMyProfile.value)

const handleUnfollowUser = () => {
        usersStore.deleteFollower(friendFull.id)
        usersStore.deleteFollowing(friendFull.id)
    }

console.log(props.friend)
console.log(friendFull)

function to_chat() {
    router.push({
    path: `/chat`,
    query: {
        friendUsername: props.friend,
    }
  })
}

</script>

<style scoped>
.card{
    display: grid;
    grid-template-columns: auto auto auto auto;
    text-align: center;
    align-items: center;
    font-size: 2em;
    color: blue;
    font-weight: bold;
    margin: 1em 2em;
}

.avatar{
    height: 4em
}

.btn{
        width: 6em;
        height: 2em;
        border-radius: 2em;
        font-size: 0.6em;
        font-weight:bold;
        background: #43EF27;
        color: white;
        border: none;
        cursor: pointer;
        transition: 0.5s;
        margin-left: 2em;
    }

    .btn:hover{
        background-color: rgb(36, 149, 30);
    }
    
    .btn:active{
        background-color: #3e8e41;
        box-shadow: 0 5px #727272;
        transform: translateY(2px);
    }
</style>