// stores/chat.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useChatStore = defineStore('chat', () => {
  // Store chat messages in an object, using pairs of users as keys
  const messages = ref({});

  // Add a message for a specific pair of users (sender and receiver)
  const addMessage = (sender, receiver, text) => {
    // Create a unique key for the pair of users
    const usersKey = getUsersKey(sender, receiver);

    // If this pair doesn't exist, initialize an empty array for messages
    if (!messages.value[usersKey]) {
      messages.value[usersKey] = [];
    }

    // Add the message to the appropriate user pair's conversation
    messages.value[usersKey].push({ sender, text, timestamp: new Date().toISOString() });
  };

  // Helper function to get a key for user pairs
  const getUsersKey = (user1, user2) => {
    return [user1, user2].sort().join('_');  // Sort users to ensure key consistency
  };

  // Fetch messages for a specific pair of users
  const getMessagesForUsers = (user1, user2) => {
    const usersKey = getUsersKey(user1, user2);
    return messages.value[usersKey] || [];
  };

  return { messages, addMessage, getMessagesForUsers };
});
