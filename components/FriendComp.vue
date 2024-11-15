<template>
    <div>
        <img :src="(`/assets/${friendFull.Avatar}`)" alt="avatar" class="avatar">
        {{ props.friend }}
        <button @click="handleUnfollowUser">Unfollow</button>
        <button>Rename</button>
        <NuxtLink to="/chat" @click="to_chat()"><button>Chat</button></NuxtLink> 
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useUsersStore } from '~/store/users';
import { useRouter } from 'vue-router';

const router = useRouter()

const usersStore = useUsersStore()

const users = usersStore.$state.users

const props = defineProps({
    friend: String
})

const friendFull = users.find(friend => friend.username == props.friend)

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

</style>