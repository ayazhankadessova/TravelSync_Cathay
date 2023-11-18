<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
            <RouterLink class="nav-link active" to="/HomePage">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/events">Hotels</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/becomeVol">Transport</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/volunteers">Expenses</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

let isCollapsed = ref(true)
</script>
