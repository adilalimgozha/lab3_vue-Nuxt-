<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        menuBarOpen: Function
    })

    const profile_clicked = ref(false)

    const click_profile = () => {
        profile_clicked.value = !profile_clicked.value
    }

    import { useUsersStore } from '~/store/users'

    const usersStore = useUsersStore()

    const user = computed(() => usersStore.getUser)
    const isAuthenticated = computed(() => usersStore.isUserAuthenticated)

    const logout = () => {
        usersStore.logout()
    }

</script>

<template>
    <header>
        <img @click="menuBarOpen()" class="menu-img" src="/assets/menu.png" alt="menu">
        <div>
            <span class="text">New tips on Fall season! Full details on our Instagram accounts</span>
        </div>
        <button class="profile" @click="click_profile()"><img class="profile-img" src="/assets/profile.png" alt="menu"></button>
        <div v-if="profile_clicked == true" class="login">
            <span v-if="isAuthenticated">
                <p>Welcome, {{ user.username }}</p>
                <button @click="logout">Logout</button>
            </span>
            <span v-else>
                <NuxtLink to="/login"><button>LOGIN</button></NuxtLink>
                <NuxtLink to="/registration"><button>REGISTER</button></NuxtLink>
            </span>
            
        </div>
    </header>
</template>

<style scoped>

    .login{
        position: absolute;
        display: grid;
        grid-template-columns: auto;
        width: 4em;
        right: 1em;
        top: 4.5em;
    }

    header{
        display: flex;
        justify-content: space-between;
        font-weight: 700;
        font-size: 1.3em;
        background: #FFFFFFBD;
        margin-top: 1%;
        align-items: center;
    }

    .text{
        display: block;
        background: linear-gradient(90deg, #FFADAD 0%, #FF774C 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    div{
        width: 80%;
        background: linear-gradient(90deg, #E5F67C 0%, #ECEF64 33%, #D2E037 66%, #EAEE3A 100%);
        padding: 0.9em;
        border-radius: 0.9em;
        text-align: center;
        margin: 0.5em 0;
    }

    .profile{
        border-radius: 4em;
        width: 4.5em;
        height: 4.5em;
        background: #7EEFFF;
        border: none;
        cursor: pointer;
    }

    .profile:hover{
        background: #08b5cc;
        transition: 0.5s;
    }

    /*.profile-img:hover{
        transform: scale(1.1);
        opacity: 0.9;
    }*/

    .menu-img{
        left: -0.4em;
        cursor: pointer;
        margin-left: 1.2em;
    }

    /*.menu-img:hover{
        transform: scale(1.1);
        transition: 0.5s;
    }*/


</style>
