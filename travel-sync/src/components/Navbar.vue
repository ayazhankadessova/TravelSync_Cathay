<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
    v-if="
      route.name != 'QRCode' && route.name != 'TravelSpaceForm' && route.name != 'create-travel'
    "
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">TravelSync+</a>
      <button
        class="navbar-toggler"
        type="button"
        @click="isCollapsed = !isCollapsed"
        :aria-expanded="!isCollapsed"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{ show: !isCollapsed }" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/home">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Hotels</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Transport</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Expenses</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
// import {  computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
// import BreadCrumb from '../components/BreadCrumb.vue'

const route = useRoute()
// const router = useRouter()

let isCollapsed = ref(true)
</script>
