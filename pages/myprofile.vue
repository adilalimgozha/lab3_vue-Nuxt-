<template>
    <Header :menuBarOpen="menuBarOpen"></Header> 
    <ProfileComp :isMyProfile="isMyProfile" :PersonName="PersonName" :Age="Age" :Location="Location" :Avatar="Avatar" :Rating="Rating" :persons="persons"></ProfileComp>
    
    </template>
    
    <script setup>
    
    import ProfileComp from '~/components/ProfileComp.vue'
    import { useRoute } from 'vue-router'
    import Menu from '~/components/Menu.vue';
    import { computed } from 'vue';
    import { useUsersStore } from '~/store/users';

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
    
    const personsQuery = route.query.persons;
    
    let persons = [];
    if (personsQuery) {
        try {
            // Only parse if it's a string and valid
            persons = JSON.parse(personsQuery);
        } catch (e) {
            console.error("Failed to parse persons:", e);
        }
    }
    
    </script>
    
    <style scoped>
    
    </style>