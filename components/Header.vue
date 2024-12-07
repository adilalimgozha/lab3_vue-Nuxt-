<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const props = defineProps({
        isMobile: Boolean,
        menuBarOpen: Function,
        posts: Array,
    })

    const router = useRouter()

    const postsString = JSON.stringify(props.posts);

    function to_profile() {
        router.push({
        path: `/myprofile`,
        query: {
            posts: postsString,
        }
    })
    }

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

    import { defineEmits } from 'vue';

    const emit = defineEmits();

    const loginclicked = ref(false)
    const isClicked = () => {
        loginclicked.value = !loginclicked.value
        click_profile()
        emit('isClicked', loginclicked.value);
    }

</script>

<template>
    <header>
        <img v-if="!props.isMobile" @click="menuBarOpen()" class="menu-img" src="/assets/menu.png" alt="menu">
        <div>
            <span class="text">New tips on Fall season! Full details on our Instagram accounts</span>
        </div>
        <button class="profile" @click="click_profile()"><img class="profile-img" src="/assets/profile.png" alt="menu"></button>
        <div v-if="profile_clicked == true" class="login">
            <span v-if="isAuthenticated">
                <NuxtLink :to="`/myprofile`" @click="to_profile()"><button class="login-btn">My Profile</button></NuxtLink>
                <button class="login-btn">Favorites</button>
                <button class="login-btn" @click="logout">Log out</button>
            </span>
            <span v-else>
                <button class="login-btn" @click="isClicked()">LOGIN</button>
                <NuxtLink to="/registration"><button class="login-btn">REGISTER</button></NuxtLink>
            </span>
            
        </div>
    </header>
</template>

<style scoped>

    /* General styles */
    .login {
        position: absolute;
        display: grid;
        grid-template-columns: auto;
        width: 4em;
        right: 1em;
        top: 4.5em;
    }

    header {
        display: flex;
        justify-content: space-between;
        font-weight: 700;
        font-size: 1.3em;
        background: #FFFFFFBD;
        margin-top: 1%;
        align-items: center;
        padding: 0.5em; /* Add padding for better spacing */
    }

    .text {
        background: linear-gradient(90deg, #FFADAD 0%, #FF774C 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 1.5em;
    }

    div {
        width: 80%;
        background: linear-gradient(90deg, #E5F67C 0%, #ECEF64 33%, #D2E037 66%, #EAEE3A 100%);
        padding: 0.9em;
        border-radius: 0.9em;
        text-align: center;
        margin: 0.5em auto; /* Center horizontally */
    }

    .profile {
        border-radius: 50%; /* Make it circular */
        width: 4.5em;
        height: 4.5em;
        background: #7EEFFF;
        border: none;
        cursor: pointer;
        transition: background-color 0.5s ease;
    }

    .profile:hover {
        background: #08b5cc;
    }

    .menu-img {
        cursor: pointer;
        margin-left: 1.2em;
    }

    /* Responsive Media Queries */

    /* Mobile (up to 600px) */
    @media (max-width: 600px) {
        .login {
            width: 5em;
            top: 3.5em;
            right: 2em;
        }

        header {
            font-size: 1.1em;
            padding: 0.3em;
        }

        .text {
            font-size: 1.2em;
        }

        div {
            width: 90%;
            margin: 0.5em auto;
        }

        .profile {
            width: 3.5em;
            height: 3.5em;
        }

        .menu-img {
            margin-left: 1em;
        }
    }

    /* Tablet (601px to 900px) */
    @media (max-width: 900px) {
        .login {
            width: 3.5em;
            top: 4em;
            right: 1em;
        }

        header {
            font-size: 1.2em;
            padding: 0.4em;
        }

        .text {
            font-size: 1.3em;
        }

        div {
            width: 85%;
        }

        .profile {
            width: 4em;
            height: 4em;
        }

        .menu-img {
            margin-left: 1.1em;
        }
    }

    /* Desktop (901px and above) */
    @media (min-width: 901px) {
        .login {
            width: 4em;
            top: 4.5em;
            right: 1em;
        }

        header {
            font-size: 1.3em;
            padding: 0.5em;
        }

        .text {
            font-size: 1.5em;
        }

        div {
            width: 80%;
        }

        .profile {
            width: 4.5em;
            height: 4.5em;
        }

        .menu-img {
            margin-left: 1.2em;
        }
    }

</style>

