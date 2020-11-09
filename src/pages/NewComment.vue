<template>
  <div class="container-fluid">
    <div class="new-comment">
      <h3>Add a New Comment</h3>
      <!-- <form @submit.prevent="addComment"> -->
      <input v-model="state.newComment.blog" placeholder="title" ref="Blog" required />
      <input v-model="state.newComment.creatorEmail" placeholder="author name" required />
      <textarea name="" id="" cols="30" v-model="state.newComment.body" rows="10"></textarea>
      <button @click="createComment()" class="btn btn-danger">
        Add New Comment
      </button>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { blogService } from '../services/BlogService'
import { AppState } from '../AppState'

export default {
  name: 'NewComment',
  setup(props) {
    const state = reactive({
      newComment: {
        body: '',
        creatorEmail: '',
        blog: ''
      }
    })
    onMounted(() => {
      blogService.getCommentsByBlogId(blogId)
    })
    return {
      state,
      comments: computed(() => AppState.currentBlog),
      createComment() {
        blogService.createComment(state.newComment)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
