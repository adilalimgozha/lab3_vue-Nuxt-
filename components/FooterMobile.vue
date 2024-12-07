<template>
  <div>
    <img class="img" src="/assets/msg.png" alt="msg_pic">
    <button @click="menuBarOpen()"><img class="img" src="/assets/menu_m.png" alt="msg_pic"></button>
    <img @click="to_friends(props.id)" class="img" src="/assets/like.png" alt="msg_pic">
  </div>
</template>

<script setup>

import { useRouter } from 'vue-router';
const router = useRouter()

const props = defineProps({
      menuBarOpen: Function,
      id: Number,
    })

const isMyProfile = ref(true)

function to_friends(userId) {
    router.push({
    path: `/friends`,
    query: {
        id: props.id,
        isMyProfile: isMyProfile.value
    }
  })
}
</script>

<style scoped>
div{
  display: flex;
  justify-content: space-between;
  background: linear-gradient(90deg, #A7D759 0%, #84963C 100%);
}

.img{
  cursor: pointer;
}

</style>
