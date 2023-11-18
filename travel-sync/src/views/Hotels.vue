<template>
   <!-- Navbar -->
   <div class="container-fluid"> 
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <!-- <a class="navbar-brand" href="#">TravelSync+</a> -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <RouterLink class="nav-link" to="/HomePage">TravelSync+</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link " to="/TravelSpaceForm">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link active" to="/hotels">Hotels</RouterLink>
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
  <div class="container">
    <div class="row">
      <div class="col-sm-4 my-4" v-for="hotel in hotels" :key="hotel.name">
        <div class="card square-card" style="width: 24rem; height: 21rem;">
          <img :src="hotel.image" class="card-img-top hotel-image" :alt="hotel.name" />
          <div class="card-body">
            <h5 class="card-title">{{ hotel.name }}</h5>
            <p class="card-text">{{ hotel.location }}</p>
            <p class="card-text">Rating: {{ hotel.rating }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotels: [
        {
          name: 'Monastero Santa Rosa Hotel & Spa',
          location: 'Salerno, Italy',
          rating: 5,
          image:
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
          name: 'Grand Hotel Tremezzo',
          location: 'Lake Como, Italy',
          rating: 5,
          image:
            'https://images.unsplash.com/photo-1586974726316-c6302de6a160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80'
        },
        {
          name: 'The Oberoi Udaivilas, Udaipur',
          location: 'Lake Como, Italy',
          rating: 5,
          image:
            'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
          name: 'AKA Beverly Hills',
          location: 'Lake Como, Italy',
          rating: 5,
          image:
            'https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80'
        },
        {
          name: 'AKA Beverly Hills',
          location: 'Lake Como, Italy',
          rating: 5,
          image:
            'https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80'
        },
        {
          name: 'Swire Watervilla',
          location: 'Lake Como, Italy',
          rating: 5,
          image:
            'https://images.unsplash.com/photo-1594741158704-5a784b8e59fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
          name: 'Swire Watervilla',
          location: 'Lake Como, Italy',
          rating: 5,
          image:
            'https://images.unsplash.com/photo-1525596662741-e94ff9f26de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        }
      ]
    }
  }
}
</script>

<style scoped>
.hotel-image {
  width: 100%; /* This will make the image take the full width of the card */
  height: 200px; /* This is the fixed height */
  object-fit: cover; /* This will make the image cover the entire space without distorting */
}
.square-card {
  width: 300px; /* Set the width of the card */
  height: 300px; /* Set the height of the card */
}
</style>
