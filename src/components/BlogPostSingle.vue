<template>
  <div class="blog-post container-fluid">
    <div class="row justify-content-center">
      <div class="card text-white bg-dark my-3" style="width: 50rem;">
      <button v-if="post.creator" :disabled="user.email !== post.creator.email" @click="navigateTo('/edit/' + post._id)">
      Edit Post
      </button>
        <div v-if="postData" class="card-body">
          <h4 class="card-title text-danger">
            {{ post.title }}
          </h4>
          <p v-if="post.creator" class="card-text">
            {{ post.creator.name }}
          </p>
          <p v-if="post.body" class="card-text">
            {{ post.body }}
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
import { computed, onMounted } from 'vue'
import { blogService } from '../services/BlogService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
export default {
  name: 'BlogPostSingle',
  props: {
    postData: Object
  },
  setup(props) {
    const route = useRoute()
    onMounted(() => {
      // console.log(this.$router)
      blogService.getCommentsByBlogId(route.params.postId)
    })
    return {
      post: computed(() => props.postData),
      user: computed(() => AppState.user),
      comments: computed(() => AppState.currentBlogComments)
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

/* .blog-post{
  min-height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
} */

.card{
  border-style: solid;
  border-color: aquamarine;
  border-width: medium;
  border-radius: 50px;
}

</style>
