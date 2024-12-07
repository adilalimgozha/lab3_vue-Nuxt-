<template>
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
    <ProfileComp :isMyProfile="isMyProfile" :PersonName="PersonName" :Age="Age" :Location="Location" :Avatar="Avatar" :Rating="Rating" :posts="posts"></ProfileComp>
    <div class="footer_mob" v-if="isMobile"><FooterMobile :menuBarOpen="menuBarOpen" ></FooterMobile></div>
    </template>
    
    <script setup>
    
    import ProfileComp from '~/components/ProfileComp.vue'
    import { useRoute } from 'vue-router'
    import Menu from '~/components/Menu.vue';
    import { computed } from 'vue';
    import { useUsersStore } from '~/store/users';
    import FooterMobile from '~/components/FooterMobile.vue';

    const isMyProfile = ref(true)

    const usersStore = useUsersStore();

    // Используем геттеры из хранилища
    const user = computed(() => usersStore.getUser); 
    console.log("USERRR", user.value)

    const isAuthenticated = usersStore.isUserAuthenticated;
    
    const route = useRoute()
    const PersonName = computed(() => user.value.username || 'Unknown User');

    const foundUser = computed(() => usersStore.getUserByPersonName(PersonName.value));
    console.log("FOUND", foundUser.value)


    const Age = computed(() => foundUser.value?.Age ? Number(foundUser.value.Age) : 'Unknown Age');
    const Location = computed(() => foundUser.value?.Location || 'Unknown Location');
    const Avatar = computed(() => foundUser.value?.Avatar || 'ava1.png');
    const Rating = computed(() => foundUser.value?.Rating ? Number(foundUser.value.Rating) : 0);

    console.log("this user: ", user, Age, Location)
    
    const postsQuery = route.query.posts;
    
    let posts = [];
    if (postsQuery) {
        try {
            // Only parse if it's a string and valid
            posts = JSON.parse(postsQuery);
        } catch (e) {
            console.error("Failed to parse posts:", e);
        }
    }
    

    const isMobile = ref(false);
    const checkIfMobile = () => {
        isMobile.value = window.innerWidth <= 900; // Adjust breakpoint as necessary
    };
    onMounted(() => {
  checkIfMobile();
  window.addEventListener('resize', checkIfMobile);
});

    </script>
    
    <style scoped>
    .footer_mob{
        position: sticky;
        bottom: 0;
    }
    </style>