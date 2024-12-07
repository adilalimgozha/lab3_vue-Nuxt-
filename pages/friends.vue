<template>
  <Menu v-if="isMenuBarOpen == true && !isMobile"
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
        
        <MenuMobile v-if="isMenuBarOpen == true && isMobile"
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
        :menuBarClose="menuBarClose"></MenuMobile>
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


 /* Mobile (up to 600px) */
 @media (max-width: 600px) {
  .title {
    font-size: 1.8em;  /* Adjust the font size for responsiveness */
    margin: 0 auto;  /* Automatically center the title horizontally */
    padding-top: 0.5em;
    text-align: center;  /* Ensure the title text is centered */
}

.all {
    min-height: 30em;  /* Set a reasonable minimum height for mobile */
    padding: 2em;  /* Add uniform padding around the content */
    display: flex;
    flex-direction: column;
    justify-content: center;  /* Center content vertically */
    align-items: center;  /* Center content horizontally */
}

    }

    /* Tablet (601px to 900px) */
    @media (max-width: 900px) {
        .title {
            font-size: 2.5em;  /* Slightly smaller font size for tablets */
            margin-left: 10em;  /* Adjust margin for tablet size */
            text-align: center;  /* Center text for tablet screens */
        }

        .all {
            min-height: 34em;  /* Adjust height for tablets */
            padding: 2em;  /* Adjust padding for tablet screens */
        }
    }

    /* Desktop (901px and above) */
    @media (min-width: 901px) {
        .title {
            font-size: 1.8em;  /* Reduce font size for mobile */
            margin-left: 2em;  /* Center the title */
            padding-top: 0.5em;
            text-align: center;  /* Center text for mobile */
        }

        .all {
            min-height: 38em;  /* Keep original height for desktop */
        }
    }
</style>
