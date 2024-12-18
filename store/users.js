// stores/users.js
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [], // Array to hold all users
    user: null,
    isAuthenticated: false
  }),
  getters: {
    getUser(state) {
      return state.user
    },
    isUserAuthenticated(state) {
      return state.isAuthenticated
    },
    getUserByPersonName: (state) => (username) => {
      return state.users.find(user => user.username === username);
    }
  },
  actions: {
    async login(credentials) {
      try {
        const response = await $fetch('/api/login', {
          method: 'POST',
          body: credentials,
          headers: { 'Content-Type': 'application/json' }
        })
        this.user = response.user
        this.isAuthenticated = true
      } catch (error) {
        console.error('Login error:', error)
        throw new Error('Login failed')
      }
    },
    async register(userDetails) {
      try {
        console.log('Attempting to register with:', userDetails);
    
        const response = await $fetch('/api/registration', {
          method: 'POST',
          body: userDetails,
          headers: { 'Content-Type': 'application/json' }
        });
    
        console.log('API response:', response); // Log the response for debugging
    
        if (response.user) {
          console.log('User registered:', response.user); // Confirm user data is returned
    
          this.user = response.user;
          this.users.push({
            email: userDetails.email,
            username: userDetails.username,
            password: userDetails.password
          });
    
          console.log('Users array after push:', this.users); // Check if data is pushed
        } else {
          console.error('No user data in response');
        }
      } catch (error) {
        console.error('Registration error:', error);
        throw new Error('Registration failed');
      }
    }
    ,
    logout() {
      this.user = null
      this.isAuthenticated = false
    },

    addUsers(persons) {
      this.users.push(...persons);
    },
    // Update the user's profile data
    updateUser(updatedData) {
      if (this.user) {
        // Find the current user in the `users` array by username
        const userIndex = this.users.findIndex(u => u.username === this.user.username);
        if (userIndex !== -1) {
          // Update the user in the users array
          this.users[userIndex] = { ...this.users[userIndex], ...updatedData };

          // Also update the current authenticated user in the store
          this.user = { ...this.user, ...updatedData };
        }
      }
    },

    addFollower(followedId) {
      const followedUser = this.users.find(user => user.id == followedId)
      followedUser.followedBy.push(this.user.username)
    },

    addFollowing(followedId) {
      const followedUser = this.users.find(user => user.id == followedId)
      const folowingUser = this.users.find(user => user.username === this.user.username)
      folowingUser.following.push(followedUser.username)
    },

    deleteFollower(followedId) {
      const followedUser = this.users.find(user => user.id == followedId);
      followedUser.followedBy = followedUser.followedBy.filter(username => username !== this.user.username);
    },

    deleteFollowing(followedId) {
      const followedUser = this.users.find(user => user.id == followedId);
      const followingUser = this.users.find(user => user.username === this.user.username);
      followingUser.following = followingUser.following.filter(username => username !== followedUser.username);
    },
  }
})
