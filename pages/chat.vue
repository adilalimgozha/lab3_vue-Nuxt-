<template>
    <Header :menuBarOpen="menuBarOpen"></Header> 
    <div class="chat-container">
      <h1>Chat</h1>
  
      <!-- Messages Window -->
      <div class="messages-window">
        <div v-for="(msg, index) in messages" :key="index" class="chat-message">
          <strong>{{ msg.sender }}:</strong> {{ msg.text }} <span class="timestamp">{{ msg.timestamp }}</span>
        </div>
      </div>
  
      <!-- Message Input -->
      <input v-model="messageText" @keydown.enter="sendMessage" placeholder="Type a message..." />
    </div>
  </template>
  
  <script setup>
  import Header from '~/components/Header.vue';
  import { ref, onMounted } from 'vue';
  import { useChatStore } from '~/store/chat';
  import { useUsersStore } from '~/store/users';
  import { useRoute } from 'vue-router';

const route = useRoute();
const otherUser = route.query.friendUsername;
  
  // Initialize chat store
  const chatStore = useChatStore();
  const usersStore = useUsersStore()
  const currentUser = usersStore.$state.user.username

  console.log(currentUser, 'and', otherUser)
  
// Local state for the input message
const messageText = ref('');

// Computed property to fetch messages for the current user and the other user
const messages = computed(() => {
  return chatStore.getMessagesForUsers(currentUser, otherUser);
});

// Method to send a message
const sendMessage = () => {
  if (messageText.value.trim() !== "") {
    // Add message to store
    chatStore.addMessage(currentUser, otherUser, messageText.value);

    // Clear the input field
    messageText.value = '';

    // Simulate a response from the other user (optional)
    /*setTimeout(() => {
      chatStore.addMessage(otherUser, currentUser, "This is a response from the other user.");
    }, 1000);*/
  }
};;
  </script>
  
  <style scoped>
  .chat-container {
    padding: 20px;
    width: 400px;
    margin: 0 auto;
  }
  
  .messages-window {
    height: 300px;
    overflow-y: auto;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f9f9f9;
  }
  
  .chat-message {
    margin: 10px 0;
    font-size: 14px;
  }
  
  .timestamp {
    font-size: 10px;
    color: gray;
  }
  
  input {
    width: 100%;
    padding: 10px;
    font-size: 14px;
  }
  </style>
  