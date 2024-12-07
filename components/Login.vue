<template>
    <div class="all">

        <div class="header">
            <span>L O G I N</span>
        </div>

        <form class="form" @submit.prevent="loginUser">
        <div>
            <input class="username" placeholder="Enter username" type="text" v-model="username" required />
        </div>
        <div>
            <input class="password" placeholder="Enter password" type="password" v-model="password" required />
        </div>
            <div class="forgot">
                <button class="forgot-btn">FORGOT PASSWORD?</button>
            </div>
            <button class="submit" type="submit">AUTHORIZE</button>
        </form>
    </div>

  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useUsersStore } from '~/store/users'
  import { defineEmits } from 'vue';

  const usersStore = useUsersStore()

  const emit = defineEmits();
  
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
        if (username.value === user.username && user.password === password.value) {
            emit('loginSuccess')
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
  
<style scoped>

.all{
    position: absolute;
    width: 30em;
    background: linear-gradient(180deg, #FFFEFE 0%, #C1BDBD 100%);
    border-radius: 1em;
}

.header{
    background: #75C2FA;
    text-align: center;
    margin-bottom: 4em;
    font-size: 2em;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    color: #FFFEFE;
}

.form{
    text-align: center;
}

.username{
    font-size: 1.5em;
    margin-bottom: 1em;
    padding: 0.5em 0.5em;
    font-weight: bold;
}

.password{
    font-size: 1.5em;
    margin-bottom: 1em;
    padding: 0.5em 0.5em;
    font-weight: bold;
}

.forgot{
    margin-bottom: 6em;
}

.forgot-btn{
    font-size: 1em;
    cursor: pointer;
    padding: 0.2em;
    border:none;
    transition: 0.5s;
    font-weight: bold;
}

.forgot-btn:hover{
        background-color: rgb(192, 222, 242);
}

.forgot-btn:active{
        box-shadow: 0 5px #727272;
        transform: translateY(2px);
}

.submit{
    margin-bottom: 2em;
    font-size: 2em;
    background: #6BFF67;
    color: WHITE;
    padding: 0.5em 2em;
    border:none;
    transition: 0.5s;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.5em;
}

.submit:hover{
        background-color: rgb(38, 147, 19);
}

.submit:active{
        box-shadow: 0 5px #727272;
        transform: translateY(2px);
}

@media (max-width: 768px) {
  .all {
    width: 100%;
    padding: 1em;
  }
  .header {
    font-size: 1.5em;
  }
}

</style>