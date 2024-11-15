<template>
    <div class="chart-container">
      <!-- Loop through each month and its corresponding post count -->

        <div
        v-for="(count, month) in postsCountMonth"
        :key="month"
        class="bar"
        :style="{ height: count * 30 + 'px' }">
        <span class="count">{{ count }}</span>
        <span>{{ month }}</span>
        </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { usePostsStore } from '~/store/posts';
  import { useUsersStore } from '~/store/users';
  
  // Initialize the stores
  const postsStore = usePostsStore();
  const usersStore = useUsersStore();
  
  // Get the current user from the users store
  const user = computed(() => usersStore.getUser);
  
  // Get all users and posts from the stores
  const allUsers = usersStore.$state.users;
  const allPosts = postsStore.$state.posts;
  
  // Find the full details of the current user
  const userFull = computed(() => {
    return allUsers.find(obj => obj.username === user.value?.username);
  });
  
  // Get posts for the current user
  const userPosts = computed(() => {
    return allPosts.filter(post => post.user_id == userFull.value?.id);
  });
  
  // Compute the posts count grouped by month
  const postsCountMonth = computed(() => {
    const posts = userPosts.value;
    
    return posts.reduce((acc, post) => {
      const postDate = new Date(post.PubDate);
      if (!isNaN(postDate)) {
        const postMonth = postDate.toLocaleString('default', { month: 'long', year: 'numeric' });
        if (!acc[postMonth]) {
          acc[postMonth] = 0;
        }
        acc[postMonth]++;
      } else {
        console.error('Invalid Date:', post.PubDate);
      }
      return acc;
    }, {});
  });
  </script>
  
  <style scoped>
  .chart-container {
    display: flex;
    align-items: flex-end;
    gap: 10px;
    height: 200px;
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
    padding-left: 20px;
    padding-bottom: 20px;
  }
  
  .bar {
    background-color: #4caf50;
    width: 50px;
    text-align: center;
    color: white;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  
  .bar span {
    margin-top: 4.3em;
    position: absolute;
    top: -20px;
    font-size: 12px;
    color: black;
  }
  </style>
  