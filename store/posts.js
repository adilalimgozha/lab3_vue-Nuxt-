import {defineStore} from 'pinia'

export const usePostsStore = defineStore('posts', {
    state: () => ({
        posts: [],
      }),

    actions: {
        addPosts(posts) {
            this.posts.push(...posts);
          },

        deletePost(postId) {
            const postIndex = this.posts.findIndex(post => post.id === postId);
            if (postIndex !== -1) {
              this.posts.splice(postIndex, 1);
            }
          },

        findUserIdByPostId(postId) {
            const needed_post = this.posts.find(post => post.id === postId);
            return needed_post.user_id
          }
    }
})