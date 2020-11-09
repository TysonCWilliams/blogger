<template>
  <div class="blog-post container-fluid">
    <div class="row justify-content-center">
      <div class="card text-white bg-dark my-3" style="width: 50rem;">
        <button v-if="post.creator" :disabled="user.email !== post.creator.email" @click="updateBlog()">
          Update
        </button>
        <button v-if="post.creator" :disabled="user.email !== post.creator.email" @click="deleteBlog()">
          Delete
        </button>
        <div v-if="postData" class="card-body">
          <input v-model="post.title" class="card-title text-danger">
          <textarea v-model="post.title" class="card-title text-danger"></textarea>
          <p v-if="post.creator" class="card-text">
            {{ post.creator.name }}
          </p>
          <div v-for="(comment, index) in comments" :key="index" class="row">
            <p>{{ comment.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { blogService } from '../services/BlogService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
export default {
  name: 'BlogPostEdit',
  props: {
    postData: Object
  },
  setup(props) {
    const route = useRoute()
    const state = reactive({
      activeBlog: AppState.currentBlog
    })
    onMounted(() => {
      // console.log(this.$router)
      blogService.getCommentsByBlogId(route.params.postId)
    })
    return {
      post: computed(() => props.postData),
      user: computed(() => AppState.user),
      comments: computed(() => AppState.currentBlogComments),
      updateBlog() {
        blogService.editBlog(state.activeBlog)
      },
      deleteBlog() {
        blogService.removeBlog(route.params.postId)
      }
    }
  },
  components: {},
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
