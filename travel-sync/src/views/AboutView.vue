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
          <div class="section-button hotel-button">
            view all <img src="/Imgs/icons/bleft.png" alt="" />
          </div>
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

    <!-- about -->
    <section id="About">
      <div class="about-content">
        <h2>About US</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sapien justo. Nulla
          facilisis tristique imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam porta
          consectetur lorem sit amet ultrices. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos.
        </p>

        <div class="section-button hotel-button">
          Read More <img src="/Imgs/icons/bleft.png" alt="" />
        </div>
      </div>

      <div class="about-img">
        <img src="/Imgs/about img.png" alt="" width="556" height="488" />
      </div>
    </section>

    <!-- footer -->
    <footer>
      <div class="container">
        <div class="footer-sections">
          <div class="footer-section">
            <img src="/Imgs/Logo/logoblack.svg" alt="" />
            <p>We always make our customers happy by providing as many choises as possible</p>
            <div class="footer-social-icons">
              <img src="/Imgs/icons/facebook.png" alt="" />
              <img src="/Imgs/icons/twitter.png" alt="" />
              <img src="/Imgs/icons/instagram.png" alt="" />
            </div>
          </div>

          <div class="footer-section">
            <h3>About</h3>
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Features</a></li>
              <li><a href="">News</a></li>
              <li><a href="">Menu</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="">why 2rism</a></li>
              <li><a href="">Partner with us</a></li>
              <li><a href="">FAQ</a></li>
              <li><a href="">Blog</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="">Account</a></li>
              <li><a href="">Support Center</a></li>
              <li><a href="">Feedback</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>
              Subscribe on our destination review <br />
              newsletters
            </h3>
            <form>
              <div class="form-section">
                <img src="/Imgs/icons/messagefooter.png" alt="" />
                <label for="email">
                  Your Email
                  <input type="email" id="email" name="email" placeholder="exp - abc@gmail.com " />
                </label>
              </div>
              <button type="submit"><img src="/Imgs/icons/arrowleft.png" alt="" /></button>
            </form>
          </div>
        </div>
      </div>
    </footer>

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
