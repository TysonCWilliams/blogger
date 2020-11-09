<template>
  <div class="home container-fluid">
    <div class="row ml-2">
      <h1 class="ml-2 custom">
        Home
      </h1>
      <div class="row mt-5 ml-3">
        <button style="" @click="navigateTo('/newblog')" class="btn btn-info btn-lg">
          Add New Blog Post
        </button>
      </div>
      <div class="row">
        <blog-post :key="blog._id" v-for="(blog, index) in blogs" :post-data="blogs[index]">
        </blog-post>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, onMounted } from 'vue'
import { blogService } from '../services/BlogService'
import BlogPost from '../components/BlogPost.vue'

export default {
  name: 'Home',
  setup(props) {
    onMounted(() => { blogService.getAllBlogs() })
    return {
      blogs: computed(() => AppState.blogs)
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  components: {
    BlogPost
  }
}
</script>

<style lang="scss" scoped>

.home{
  min-height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
}

.custom{
  justify-content: center;
  color: red;
  margin-left: 1em;
}

button{
  border-style: solid;
  border-width: medium;
  border-radius: 50px;
  border-color: whitesmoke;
}

</style>
