<template>
    <form @submit.prevent="loginUser">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useUsersStore } from '~/store/users'
  
  const usersStore = useUsersStore()
  
  const username = ref('')
  const password = ref('')
  
  const loginUser = async () => {
    try {
      await usersStore.login({ username: username.value, password: password.value })
      // Ищем пользователя по username
    const user = usersStore.users.find(u => u.username === username.value)
    console.log(usersStore.$state) 
    if (user) {
        // Проверяем пароль (например, можно сравнивать напрямую)
        if (user.password === password.value) {
            alert('Login successful')
        } else {
            alert('Wrong password')
        }
    } else {
        // Если пользователь не найден
        alert('User not found')
    }
    } catch (error) {
      alert('Login failed')
    }
  }
  </script>
  