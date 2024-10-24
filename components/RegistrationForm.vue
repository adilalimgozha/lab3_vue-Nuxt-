<template>
    <form @submit.prevent="navigateToConfirmation">
        <div>
            <label for="email">Enter your email</label>
            <input type="email" id="email" name="email" v-model="email" required>
        </div>
        <div>
            <label for="username">Create username</label>
            <input type="text" id="username" name="username" v-model="username" required>
        </div>
        <div>
            <label for="password">Create password</label>
            <input type="password" id="password" name="password" v-model="password" required>
        </div>
        <div>
            <label for="confPassword">Confirm password</label>
            <input type="password" id="confPassword" name="confPassword" v-model="confPassword" required>
        </div>
        <div>
            <input type="submit">
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const username = ref('')
const password = ref('')
const confPassword = ref('')
const router = useRouter()

const navigateToConfirmation = () => {
  if (password.value !== confPassword.value) {
    alert('Passwords do not match!')
    return
  }
  
  // Navigate to confirmation page with registration data as query parameters
  router.push({
    path: '/confirmation',
    query: {
      email: email.value,
      username: username.value,
      password: password.value // You might not want to pass the password
    }
  })
}

</script>

<style scoped>

</style>