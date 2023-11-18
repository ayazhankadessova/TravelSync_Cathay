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
      <RouterLink class="nav-link active" to="/TravelSpaceForm">Home</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink class="nav-link" to="/hotels">Hotels</RouterLink>
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
<br>
<br>
<br>
<br>
<h2 class="center">Congratulations on joining a new Travel Space!</h2>
<br>
<br>
<br>
<div class="center">
  <label for="display-name" class="fw-bold">Display Name</label>
  <br>
  <br>
  <div>
  <input type="text" class="form-control smaller-input" id="organizer" placeholder="Enter organizer name">
  </div>
  <br>
  <br>
<a href="/TravelSpaceForm" class="btn btn-primary">Go to Travel Space</a>
</div>
</div>
</template>

<script>

</script>

<style>
.container {
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
}

.center {
text-align: center;
}

.center-image {
display: block;
margin: 0 auto;
}
.smaller-input {
    width: 200px; 
    margin-left:690px;
   
  }




</style>