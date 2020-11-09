<template>
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ user.email }}</p>
    <input v-model="user.name">
    <button @click="updateUser()">
      Update User
    </button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { profileService } from '../services/ProfileService'

export default {
  name: 'Profile',
  setup() {
    return {
      profile: computed(() => AppState.profile),
      user: computed(() => AppState.user)
    }
  },
  methods: {
    updateUser() {
      profileService.updateUser()
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
