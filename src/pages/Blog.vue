<template>
  <div class=" custom Blog text-center container-fluid">
    <h1>Blog</h1>
    <blog-post-single :post-data="blog">
    </blog-post-single>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, onMounted } from 'vue'
import { blogService } from '../services/BlogService'
import { useRoute } from 'vue-router'
import BlogPostSingle from '../components/BlogPostSingle.vue'

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
    BlogPostSingle
  }
}
</script>

<style lang="scss" scoped>

.custom{
  min-height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
}

h1{
  color:red;
}
</style>
