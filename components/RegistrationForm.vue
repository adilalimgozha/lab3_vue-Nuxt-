<template>
  <div class="all">
    <div class="reg" v-if="confirmation == false">

      <div class="title">
        Profile|Registration
      </div>

      <form class="reg-form" @submit.prevent="navigateToConfirmation">
        <div>
          <div>
              <label class="label" for="email">Enter your email</label>
              <input class="input" type="email" id="email" name="email" v-model="email" required>
          </div>
          <div>
              <label class="label" for="username">Create username</label>
              <input class="input" type="text" id="username" name="username" v-model="username" required>
          </div>
          <div>
              <label class="label" for="password">Create password</label>
              <input class="input" type="password" id="password" name="password" v-model="password" required>
          </div>
          <div>
              <label class="label" for="confPassword">Confirm password</label>
              <input class="input" type="password" id="confPassword" name="confPassword" v-model="confPassword" required>
          </div>
        </div>
        <input class="submit" type="submit" value="CREATE USER">
      </form>
    </div>
    <div class="confirmation" v-else>
      <div class="steps"><p>TO CREATE ACCOUNT DO NEXT STEPS</p></div>

          <div class="confirm-email">
              <label for="conf">CONFIRM YOUR EMAIL</label>
              <button class="confirm-btn" id="conf">CLICK TO CONFIRM</button>
          </div>

        <form @submit.prevent="registerUser">
            <div class="phrase">
                <label for="phase">ENTER THE SECRET PHRASE</label>
                <input class="phrase-password" type="password" name="phrase" id="phrase">
            </div>
            <div class="submit2-div">
                <input class="submit2" type="submit" value="CREATE USER">
            </div>
        </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUsersStore } from '~/store/users'

const props = defineProps({
  confirmation: Boolean
})

const email = ref('')
const username = ref('')
const password = ref('')
const confPassword = ref('')
const router = useRouter()
const usersStore = useUsersStore()
const confirmation = ref(props.confirmation)

const navigateToConfirmation = () => {
  if (password.value !== confPassword.value) {
    alert('Passwords do not match!')
    return
  }
  confirmation.value = !confirmation.value
}

const registerUser = async () => {
  try {
    await usersStore.register({ email: email.value, username: username.value, password: password.value})
    alert('Registration successful')

  } catch (error) {
    alert('Registration failed')
  }

  router.push('/');
}

</script>

<style scoped>

.all{
  background: linear-gradient(180deg, #76C5E7 0%, #FBF3F3 100%);
  padding: 4em 7em;
  font-family: Inknut Antiqua;
}

.reg-form{
  display: flex;
  justify-content: space-between;
}

.label{
  display: block;
  font-size: 1.5em;
  margin-bottom: 0.4em;
}

.input{
  background: #74F0F0;
  color: white;
  border:none;
  border-radius: 2em;
  font-size: 1.5em;
  height: 2em;
  width: 20em;
  margin-bottom: 0.4em;
}

.reg{
  color: white;
}

.title{
  background: #63E3EB;
  font-size: 3em;
  width: 8em;
  border-radius: 0.3em;
  margin-bottom: 2.5em;
}

.submit{
  height: 5em;
  width: 13em;
  margin-top: 24em;
  margin-right: 10em;
  background: #49F364;
  color: white;
  border: none;
  border-radius: 1.2em;
  font-weight:bold;
  cursor: pointer;
  transition: 0.5s;
}

.submit:hover{
        background-color: rgb(36, 149, 30);
}

.submit:active{
        background-color: #3e8e41;
        box-shadow: 0 5px #727272;
        transform: translateY(2px);
}

.confirmation{
  background: linear-gradient(180deg, #62F0E8 0%, #50BEB7 60%, #2F8781 100%);
  color: white;
  padding: 3em 8em;
}

.steps{
  background-color: white;
  color: black;
  margin-left: 4em;
  margin-bottom: 3em;
  font-size: 2em;
  width: 20em;
  padding: 0.2em 2em;
  text-align: center;
  border:none;
  border-radius: 1.2em;
  font-weight: bold;
}

.confirm-email{
  display: flex;
  justify-content: space-between;
  font-size: 2em;
  margin-bottom: 2em;
}

.phrase{
  display: flex;
  justify-content: space-between;
  font-size: 2em;
}

.submit2-div{
  margin-top: 5em;
  text-align: center;
}

.submit2{
  text-align: center;
  font-size: 2em;
  padding: 2% 10%;
  border-radius: 1em;
  background: #44B3D6;
  color: white;
  cursor: pointer;
  transition: 0.5s;
}

.submit2:hover{
        background-color: rgb(16, 143, 228);
}

.submit2:active{
        background-color: #3e8e41;
        box-shadow: 0 5px #727272;
        transform: translateY(2px);
}

.confirm-btn{
  margin-right: 1em;
  background: #D6E343;
  font-weight: bold;
  font-size: 1em;
  padding: 0.3em;
  border:none;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 0.4em;
}

.confirm-btn:hover{
        background-color: rgb(107, 149, 0);
}

.confirm-btn:active{
        background-color: #3e8e41;
        box-shadow: 0 5px #727272;
        transform: translateY(2px);
}

.phrase-password{
  margin-right: 1em;
  background: #44B3D6;
  font-size: 1em;
  padding: 0.3em 0.5em;
  width: 9.2em;
  color: white;
}

</style>