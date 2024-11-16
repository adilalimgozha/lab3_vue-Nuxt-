<template>
  <Header :menuBarOpen="menuBarOpen"></Header> 
  <div class="all">
    <div class="title">My Friends</div>

    <FriendComp v-if="userFull && userFull.following" 
                v-for="friend in userFull.following"
                :key="friend.id" 
                :friend="friend"
                :isMyProfile="isMyProfile">
    </FriendComp>
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue';
import FriendComp from '~/components/FriendComp.vue';
import { useUsersStore } from '~/store/users';
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';

const route = useRoute();
const id = route.query.id;
const isMyProfile = route.query.isMyProfile === 'true';  // Преобразуем строку в булевое значение

const usersStore = useUsersStore();
const allUsers = usersStore.$state.users;
const currentUser = computed(() => usersStore.getUser);

console.log('isMyProfile:', isMyProfile);
console.log('currentUser:', currentUser.value);

const userFull = computed(() => {
if (!isMyProfile) {
  return allUsers.find(user => user.id == id);
} else {
  return allUsers.find(user => user.username === currentUser.value.username);
}
});


if (userFull.value) {
console.log('User Full:', userFull.value);
} else {
console.error('User not found');
}

</script>

<style scoped>
.title{
  font-size: 3em;
  color:#FBF3F3;
  font-weight: bold;
  margin-left: 17em;
  padding-top: 1em;
}

.all{
  background: linear-gradient(180deg, #76C5E7 0%, #FBF3F3 100%);
  min-height: 38em;
}
</style>
