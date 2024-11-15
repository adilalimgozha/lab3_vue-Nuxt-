<template>
    <div>
        <img :src="(`/assets/${friendFull.Avatar}`)" alt="avatar" class="avatar">
        {{ props.friend }}
        <button>Unfollow</button>
        <button>Rename</button>
        <button>Chat</button>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useUsersStore } from '~/store/users';

const usersStore = useUsersStore()

const users = usersStore.$state.users

const props = defineProps({
    friend: String
})

const friendFull = users.find(friend => friend.username == props.friend)

console.log(props.friend)
console.log(friendFull)

</script>

<style scoped>

</style>