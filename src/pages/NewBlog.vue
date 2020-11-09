<template>
  <div class="new-blog container-fluid">
    <div class="new-blog">
      <h3 class="text-center mb-5">
        Add a New Post
      </h3>
      <!-- <form @submit.prevent="addPost"> -->
      <div class="card">
        <div class="row">
          <button @click="createBlog()" class="btn btn-info btn-lg">
            Add New Blog Post
          </button>
        </div>
        <div class="row">
          <input class="custom" v-model="state.newBlog.title" placeholder="Title" required />
        </div>
        <div class="row">
          <input class="custom" v-model="state.newBlog.creatorEmail" placeholder="Author Name" required />
        </div>
        <div class="row">
          <textarea class="custom"
                    name=""
                    id=""
                    cols="30"
                    v-model="state.newBlog.body"
                    placeholder="Description"
                    rows="10"
          ></textarea>
        </div>
      </div>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { blogService } from '../services/BlogService'
import { AppState } from '../AppState'

export default {
  name: 'NewBlog',
  setup(props) {
    const state = reactive({
      newBlog: {
        title: '',
        creatorEmail: '',
        body: ''
      }
    })
    onMounted(() => {
      blogService.getAllBlogs()
    })
    return {
      state,
      blogs: computed(() => AppState.blogs),
      createBlog() {
        blogService.createBlog(state.newBlog)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.row{
justify-content: center;
margin-top: 1em;
margin-bottom: 1em;
}

.card{
  margin-left: auto;
  margin-right: auto;
  width: 50vh;
  background-color: black;
  border-style: solid;
  border-color: rgb(6, 247, 6);
  border-radius: 20px;
  border-width: thick;
}

.new-blog{
  background: rgb(92, 91, 91);
  min-height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1568781269551-3e3baf5ec909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
  background-repeat: no-repeat;
  background-size: cover;
}

.custom{
  border-style: solid;
  border-color: aquamarine;
  border-width: medium;
}

h3{
  color: rgb(151, 250, 3);
  font-size: xx-large;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: bold;
}

</style>
