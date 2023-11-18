<template>
  <body>
    <!-- Showcase -->
    <main class="main" id="home">
      <!-- Header -->
      <header class="header">
        <!-- logo TODO -->

        <div class="logo">
          <img src="/src/assets/Logo/logo.png" alt="2rism" />
        </div>

        <!-- navbar -->
        <nav class="navbar">
          <ul class="navlists">
            <li class="navlist"><a href="#home">Home</a></li>
            <li class="navlist"><a href="#restaurants">Hotels</a></li>
            <li class="navlist"><a href="#restaurants">Restaurants</a></li>
            <li class="navlist"><a href="#tours">Tours</a></li>
            <li class="navlist"><a href="#destinations">Destinations</a></li>
            <li class="navlist"><a href="#activities">Activities</a></li>
            <li class="navlist"><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <!-- user || navigator -->
        <div class="user-profile">
          <div class="profile-name">
            <h2>
              <span class="hello"> Hello, </span>
              <span class="indiviual-name"> Ayazhan Kadessova </span>
            </h2>
          </div>

          <div class="profile-pic">
            <img
              src="/Imgs/ProfilePic/124164909_2212008852330390_5501660797980127002_n (1).jpg"
              alt=""
            />
          </div>
        </div>
      </header>

      <!-- showcase-content -->
      <div class="showcase-content">
        <h1 style="color: black">Discover the most engaging places</h1>
        <a href="" target="_blank" class="showcase-button">
          <img src="/Imgs/icons/globe.png" alt="" /> Discover on 3D globe</a
        >
      </div>

      <!-- showcase-search -->
      <div class="showcase-search">
        <div class="filters">
          <div class="filter">
            <div class="search-icon">
              <img src="/Imgs/icons/location.png" alt="" />
            </div>
            <div class="search-text">
              <h4>Location</h4>
              <h2>Explore nearby</h2>
            </div>
          </div>
          <div class="filter">
            <div class="search-icon">
              <img src="/Imgs/icons/activities.png" alt="" />
            </div>
            <div class="search-text">
              <h4>Activity</h4>
              <h2>All Activities</h2>
            </div>
          </div>
          <div class="filter">
            <div class="search-icon">
              <img src="/Imgs/icons/calendar.png" alt="" />
            </div>
            <div class="search-text">
              <h4>When</h4>
              <h2>Chose a date</h2>
            </div>
          </div>
          <div class="filter">
            <div class="search-icon">
              <img src="/Imgs/icons/guest.png" alt="" />
            </div>
            <div class="search-text">
              <h4>Guests</h4>
              <h2>1 guest</h2>
            </div>
          </div>
        </div>
        <div class="search-button-icon">
          <img src="/Imgs/icons/search.svg" alt="" />
        </div>
      </div>
    </main>
    <!-- popular Destinations -->
    <section class="container mt-5" id="destinations">
      <h2 class="text-center mb-4">Popular Destinations</h2>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card rounded">
            <img
              src="https://images.unsplash.com/photo-1581790061118-2cd9a40164b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
              class="card-img-top rounded"
              alt="Big sur"
            />
            <div class="card-body">
              <h5 class="card-title">Big sur</h5>
              <p class="card-text">Califonia USA</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card rounded">
            <img
              src="https://images.unsplash.com/photo-1542321993-8fc36217e26d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              class="card-img-top rounded"
              alt="Big sur"
            />
            <div class="card-body">
              <h5 class="card-title">Senja Island</h5>
              <p class="card-text">Norway</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card rounded">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
              class="card-img-top rounded"
              alt="Big sur"
            />
            <div class="card-body">
              <h5 class="card-title">Eiffel Tower</h5>
              <p class="card-text">Paris, France</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card rounded">
            <img
              src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              class="card-img-top rounded"
              alt="Big sur"
            />
            <div class="card-body">
              <h5 class="card-title">Madrid</h5>
              <p class="card-text">Spain</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hotels And Restaurants -->
    <section class="hotel-restaurants" id="restaurants">
      <div class="container">
        <div class="title-container">
          <h2 class="section-title">Hotels And Restaurants</h2>
          <router-link to="/hotels">
            <div class="section-button hotel-button">
              view all <img src="/Imgs/icons/bleft.png" alt="" />
            </div>
          </router-link>
        </div>
        <!-- cards -->
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <!-- card 1 -->
          <div class="col">
            <div class="card h-100">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Monastero Santa Rosa Hotel & Spa</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  <img src="/Imgs/icons/map-pin-line.png" alt="" />Salerno, Italy
                </h6>
                <div class="ratings"><img src="/Imgs/icons/rating=5.png" alt="" /></div>
              </div>
            </div>
          </div>
          <!-- card 2 -->
          <!-- Repeat the above structure for each card -->
          <div class="col">
            <div class="card h-100">
              <img
                src="https://images.unsplash.com/photo-1586974726316-c6302de6a160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Grand Hotel Tremezzo</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  <img src="/Imgs/icons/map-pin-line.png" alt="" />Lake Como, Italy
                </h6>
                <div class="ratings"><img src="/Imgs/icons/rating=5.png" alt="" /></div>
              </div>
            </div>
          </div>
          <!-- Card 3 -->
          <div class="col">
            <div class="card h-100">
              <img
                src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">The Oberoi Udaivilas, Udaipur</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  <img src="/Imgs/icons/map-pin-line.png" alt="" />Udaipur, India
                </h6>
                <div class="ratings"><img src="/Imgs/icons/rating=5.png" alt="" /></div>
              </div>
            </div>
          </div>
          <!-- Card 4 -->
          <div class="col">
            <div class="card h-100">
              <img
                src="https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">AKA Beverly Hills</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  <img src="/Imgs/icons/map-pin-line.png" alt="" />Los Angeles, United States
                </h6>
                <div class="ratings"><img src="/Imgs/icons/rating=5.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tours/Travel -->
    <!-- Tours/Travel -->
    <section id="tours">
      <div class="container">
        <div class="title-container">
          <h2 class="section-title">Travel Tips and Advice</h2>
          <div class="section-button hotel-button">
            view all <img src="/Imgs/icons/bleft.png" alt="" />
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">East Village Ice Cream Crawl</h5>
                <p class="card-text">
                  We will stop at five different world-class ice cream shops on this 1.5 mile 1.5
                  hour tour. At each ice cream store we'll explore the story behind the business and
                  see what makes the ice cream unique as you savor every…
                </p>
                <div class="d-flex justify-content-between">
                  <h6><img src="/Imgs/icons/calendersml.png" alt="" /> Today</h6>
                  <h6><img src="/Imgs/icons/user.png" alt="" /> Avenger Initiative</h6>
                  <h6><img src="/Imgs/icons/message.png" alt="" /> 2</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Brooklyn Bridge cinematic photo walk</h5>
                <p class="card-text">
                  This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but
                  I’m always open to capture clients at different locations upon request for an
                  additional charge.
                </p>
                <div class="d-flex justify-content-between">
                  <h6><img src="/Imgs/icons/calendersml.png" alt="" /> Today</h6>
                  <h6><img src="/Imgs/icons/user.png" alt="" /> Ager Pagla</h6>
                  <h6><img src="/Imgs/icons/message.png" alt="" />12</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- activities -->
    <section id="activities">
      <div class="container">
        <div class="title-container">
          <h2 class="section-title">Activities</h2>
          <div class="section-button hotel-button">
            view all <img src="/Imgs/icons/bleft.png" alt="" />
          </div>
        </div>

        <!-- Activities Cards -->
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1513432800008-a900568fccfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Sailing</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1489805549589-3c5ae55fe740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Climbing</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Skiing</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://images.unsplash.com/19/nomad.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1098&q=80"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Hiking</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Remove the container if you want to extend the Footer to full width. -->

    <!-- Footer -->
    <footer class="text-center text-white" style="background-color: #3f51b5">
      <!-- Grid container -->
      <div class="container">
        <!-- Section: Links -->
        <section class="mt-5">
          <!-- Grid row-->
          <div class="row text-center d-flex justify-content-center pt-5">
            <!-- Grid column -->
            <div class="col-md-2">
              <h6 class="text-uppercase font-weight-bold">
                <a href="#!" class="text-white">About us</a>
              </h6>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-2">
              <h6 class="text-uppercase font-weight-bold">
                <a href="#!" class="text-white">Hotels</a>
              </h6>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-2">
              <h6 class="text-uppercase font-weight-bold">
                <a href="#!" class="text-white">Transports</a>
              </h6>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-2">
              <h6 class="text-uppercase font-weight-bold">
                <a href="#!" class="text-white">Expenses</a>
              </h6>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-2">
              <h6 class="text-uppercase font-weight-bold">
                <a href="#!" class="text-white">Contact</a>
              </h6>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row-->
        </section>
        <!-- Section: Links -->

        <hr class="my-5" />

        <!-- Section: Text -->
        <section class="mb-5">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                eum harum corrupti dicta, aliquam sequi voluptate quas.
              </p>
            </div>
          </div>
        </section>
        <!-- Section: Text -->

        <!-- Section: Social -->
        <section class="text-center mb-5">
          <a href="" class="text-white me-4">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-google"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-github"></i>
          </a>
        </section>
        <!-- Section: Social -->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2023 Copyright:
        <a class="text-white" href="https://mdbootstrap.com/">TravelSync+</a>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->

    <!-- End of .container -->

    <div class="toggleOn"><i class="uil uil-align-center-alt"></i></div>
    <div class="toggleClose"><i class="uil uil-multiply"></i></div>
  </body>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
