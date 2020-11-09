<template>
  <div class="new-comment container-fluid">
    <div class="row justify-content-center">
      <div class="card text-white bg-dark my-3" style="width: 50rem;">
        <div class="card-body">
          <h4 @click="navigateTo('/comments/' + post._id)" class="card-title">
            Title:
            {{ post.title }}
          </h4>
          <p v-if="post.creator" class="card-text">
            Author:
            {{ post.creator.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
// import { AppState } from '../AppState'
export default {
  name: 'New Comment',
  props: {
    commentData: Object
  },
  setup(props) {
    return {
      post: computed(() => props.postData)
    }
  },
  components: {},
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
