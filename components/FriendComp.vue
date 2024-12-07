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
    
    /* Mobile (up to 600px) */
@media (max-width: 600px) {
  .card {
    grid-template-columns: 1fr; /* Stack cards vertically */
    font-size: 1.2em; /* Reduce font size for smaller screens */
    margin: 1em;
  }

  .avatar {
    height: 3em; /* Reduce avatar size on mobile */
  }

  .btn {
    width: 5em; /* Smaller button size */
    height: 2.5em;
    font-size: 0.8em; /* Increase font size for better readability */
    margin-left: 0; /* Center button on small screens */
    margin-top: 1em; /* Add margin for spacing */
  }
}

/* Tablet (601px to 900px) */
@media (max-width: 900px) {
  .card {
    grid-template-columns: repeat(2, 1fr); /* Two columns on tablets */
    font-size: 1.5em; /* Adjust font size for tablets */
    margin: 1em;
  }

  .avatar {
    height: 3.5em; /* Slightly smaller avatar */
  }

  .btn {
    width: 5.5em; /* Adjust button width */
    font-size: 0.7em; /* Adjust font size for tablets */
  }
}

/* Desktop (901px and above) */
@media (min-width: 901px) {
  .card {
    grid-template-columns: auto auto auto auto; /* 4 columns for desktop */
    font-size: 2em; /* Keep original font size */
  }

  .avatar {
    height: 4em; /* Keep original avatar size */
  }

  .btn {
    width: 6em; /* Keep original button size */
  }
}
</style>