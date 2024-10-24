<template>
    <div>
        <div><p>TO CREATE ACCOUNT DO NEXT STEPS</p></div>

        <form>
            <div>
                <label for="confirm">CONFIRM YOUR EMAIL</label>
                <button id="confirm">CLICK TO CONFIRM</button>
            </div>
        </form>

        <form @submit.prevent="registerUser">
            <div>
            </div>
            <div>
                <label for="phase">ENTER THE SECRET PHRASE</label>
                <input type="password" name="phrase" id="phrase">
            </div>
            <div>
                <input type="submit">
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUsersStore } from '~/store/users'
import { useRoute } from 'vue-router'

const usersStore = useUsersStore()

const route = useRoute()

const email = route.query.email
const username = route.query.username
const password = route.query.password 

const registerUser = async () => {
  try {
    await usersStore.register({ email, username, password})
    alert('Registration successful')
  } catch (error) {
    alert('Registration failed')
  }
}
</script>

<style scoped>

</style>