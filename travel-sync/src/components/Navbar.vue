<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">TravelSync+</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
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
    </nav>
  </div>
</template>
