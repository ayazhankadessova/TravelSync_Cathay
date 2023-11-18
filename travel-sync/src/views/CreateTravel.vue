<template>
  <div class="container" @click="navigateToTravel">
    <img src="/src/assets/background-x.jpeg" alt="" class="background-image" />
  </div>
</template>

<script>
export default {
  methods: {
    navigateToTravel() {
      this.$router.push('/travel')
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.background-image {
  max-width: 100%;
  max-height: 100%;
}
</style>
