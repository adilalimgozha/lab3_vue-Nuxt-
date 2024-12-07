<template>
  <div class="statistics-container">
    <h2>{{ user.username }}'s Post Statistics</h2>

    <!-- Date filters -->
    <div class="filters">
      <label for="start-date">Start Date:</label>
      <input type="date" v-model="startDate" />

      <label for="end-date">End Date:</label>
      <input type="date" v-model="endDate" />

      <button @click="filterPosts">Filter Posts</button>
    </div>

    <!-- Fallback: Display filtered posts as raw data for debugging -->
    <ul v-if="filteredPosts.length === 0">
      <p>No posts available for the selected period.</p>
    </ul>

    <ul v-else>
      <li v-for="post in filteredPosts" :key="post.id">{{ post.content }} - {{ post.PubDate }}</li>
    </ul>

    <!-- Chart -->
    <div class="chart-container" v-if="Object.keys(postsCountByMonth).length > 0">
      <div
        v-for="(count, month) in postsCountByMonth"
        :key="month"
        class="bar"
        :style="{ height: count * 30 + 'px' }"
      >
        <span class="count">{{ count }}</span>
        <span class="month">{{ month }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { usePostsStore } from '~/store/posts';
import { useUsersStore } from '~/store/users';

const props = defineProps({
    isMyProfile: Boolean
})

const isMyProfile = ref(props.isMyProfile)
console.log('my?????', isMyProfile.value)

// Initialize stores
const postsStore = usePostsStore();
const usersStore = useUsersStore();

// Get the current user from the users store
const user = computed(() => usersStore.getUser);

// Date filters
const startDate = ref('');
const endDate = ref('');

// Filtered posts based on date range
const filteredPosts = ref([]);

const allUsers = usersStore.$state.users;
const currentUser = computed(() => usersStore.getUser);
const userFull = computed(() => {
if (!isMyProfile) {
  return allUsers.find(user => user.id == id);
} else {
  return allUsers.find(user => user.username === currentUser.value.username);
}
});

// Get all posts for the current user
const userPosts = computed(() => {
  const userPosts = postsStore.$state.posts.filter(post => post.user_id === userFull.value.id);
  console.log("User posts:", userPosts); // Debugging: Log the user posts
  return userPosts;
});

console.log(userFull.value.id)
console.log(userPosts.value)

// Filter posts by selected date range
const filterPosts = () => {
  const start = new Date(startDate.value);
  const end = new Date(endDate.value);

  filteredPosts.value = userPosts.value.filter(post => {
    const postDate = new Date(post.PubDate);
    return postDate >= start && postDate <= end;
  });

  console.log("Filtered posts:", filteredPosts.value); // Debugging: Log the filtered posts
};

// Group filtered posts by month and return counts for each month
const postsCountByMonth = computed(() => {
  return filteredPosts.value.reduce((acc, post) => {
    const postDate = new Date(post.PubDate);
    if (!isNaN(postDate)) {
      const monthYear = postDate.toLocaleString('default', {
        month: 'long',
        year: 'numeric'
      });
      acc[monthYear] = (acc[monthYear] || 0) + 1;
    }
    return acc;
  }, {});
});
</script>

<style scoped>
.statistics-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.chart-container {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  height: 300px;
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
  padding-left: 20px;
  padding-bottom: 20px;
}

.bar {
  background-color: #4caf50;
  width: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: height 0.3s ease;
}

.count {
  margin-bottom: 5px;
  font-size: 12px;
  color: black;
}

.month {
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
}

/* Mobile (up to 600px) */
@media (max-width: 600px) {
  .statistics-container {
    padding: 10px;
  }

  .filters {
    flex-direction: column; /* Stack the filters vertically */
    gap: 8px;
  }

  .chart-container {
    height: 15em; /* Allow height to adjust dynamically */
    padding-left: 10px;
    padding-bottom: 10px;
  }

  .bar {
    width: 100%; /* Allow bars to take full width on mobile */
    margin-bottom: 10px; /* Add space between bars */
  }

  .month {
    font-size: 10px; /* Reduce font size on mobile */
  }
}

/* Tablet (601px to 900px) */
@media (max-width: 900px) {
  .statistics-container {
    padding: 15px;
  }

  .chart-container {
    gap: 8px;
  }

  .bar {
    width: 35%; /* Reduce bar width for tablets */
  }

  .month {
    font-size: 11px; /* Slightly smaller font size for tablets */
  }
}

/* Desktop (901px and above) */
@media (min-width: 901px) {
  .statistics-container {
    padding: 20px;
  }

  .chart-container {
    gap: 10px;
  }

  .bar {
    width: 50px; /* Maintain original width on desktop */
  }
}
</style>
