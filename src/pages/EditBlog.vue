<template>
  <div class="Blog text-center">
    <h1>Edit</h1>
    <blog-post-edit :post-data="blog">
    </blog-post-edit>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, onMounted } from 'vue'
import { blogService } from '../services/BlogService'
import { useRoute } from 'vue-router'
import BlogPostEdit from '../components/BlogPostEdit.vue'

export default {
  name: 'Blog',
  setup(props) {
    const route = useRoute()
    onMounted(() => {
      // console.log(this.$router)
      blogService.getBlogById(route.params.postId)
    })
    return {
      blog: computed(() => AppState.currentBlog)
    }
  },
  components: {
    BlogPostEdit
  }
}
</script>
