<template>
  <Header :menuBarOpen="menuBarOpen"></Header>
  <div class="chat-page">
    <div class="chat-header">
      <h1>Chat with {{ otherUser }}</h1>
    </div>

    <!-- Messages Window -->
    <div class="messages-window" ref="messagesWindow">
      <div
        v-for="(msg, index) in messages"
        :key="index"
        :class="['chat-message', { 'sent': msg.sender === currentUser, 'received': msg.sender !== currentUser }]"
      >
        <div class="bubble">
          <p class="message-text">{{ msg.text }}</p>
          <span class="timestamp">{{ msg.timestamp }}</span>
        </div>
      </div>
    </div>

    <!-- Message Input -->
    <div class="message-input-container">
      <input
        v-model="messageText"
        @keydown.enter="sendMessage"
        placeholder="Type a message..."
        class="message-input"
      />
    </div>
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue';
import { ref, onMounted, computed } from 'vue';
import { useChatStore } from '~/store/chat';
import { useUsersStore } from '~/store/users';
import { useRoute } from 'vue-router';

const route = useRoute();
const otherUser = route.query.friendUsername;

// Initialize chat store
const chatStore = useChatStore();
const usersStore = useUsersStore();
const currentUser = usersStore.$state.user.username;

console.log(currentUser, 'and', otherUser);

// Local state for the input message
const messageText = ref('');

// Computed property to fetch messages for the current user and the other user
const messages = computed(() => {
  return chatStore.getMessagesForUsers(currentUser, otherUser);
});

// Scroll to the bottom of the messages window when new messages are added
const scrollToBottom = () => {
  const messagesWindow = document.querySelector('.messages-window');
  messagesWindow.scrollTop = messagesWindow.scrollHeight;
};

// Automatically scroll to bottom when messages change
onMounted(() => {
  scrollToBottom();
});

watch(messages, () => {
  scrollToBottom();
});

// Method to send a message
const sendMessage = () => {
  if (messageText.value.trim() !== "") {
    // Add message to store
    chatStore.addMessage(currentUser, otherUser, messageText.value);

    // Clear the input field
    messageText.value = '';
  }
};
</script>

<style scoped>
.chat-page {
  display: flex;
  flex-direction: column;
  height: 39em;
  background: linear-gradient(180deg, #76C5E7 0%, #FBF3F3 100%);
}

.chat-header {
  padding: 20px;
  color: white;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}

.messages-window {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.chat-message {
  margin: 10px 0;
  display: flex;
}

.chat-message.sent {
  justify-content: flex-end;
}

.chat-message.received {
  justify-content: flex-start;
}

.bubble {
  max-width: 70%;
  padding: 10px;
  border-radius: 10px;
  background-color: #333;
  position: relative;
}

.chat-message.sent .bubble {
  background-color: #dcf8c6;
  border-top-right-radius: 0;
}

.chat-message.received .bubble {
  background-color: #ffffff;
  border-top-left-radius: 0;
}

.message-text {
  margin: 0;
  font-size: 1.5em;
  color: #333;
}

.timestamp {
  display: block;
  font-size: 10px;
  color: gray;
  text-align: right;
  margin-top: 5px;
}

.message-input-container {
  padding: 10px;
  background-color: #f5f5f5;
  border-top: 1px solid #ccc;
}

.message-input {
  width: 99%;
  padding: 10px;
  font-size: 16px;
  border-radius: 20px;
  border: 1px solid #ccc;
  outline: none;
}
</style>
