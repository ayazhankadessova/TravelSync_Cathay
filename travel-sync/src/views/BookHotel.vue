<template>
  <div class="container" style="margin-top: 50px">
    <div class="booking-form">
      <h1>Book Swire Hotel</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" v-model="name" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="people">Number of People</label>
          <input type="number" id="people" v-model="people" class="form-control" required min="1" />
        </div>
        <div class="form-group">
          <label for="date">Date</label>
          <input type="date" id="date" v-model="date" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hotel'],
  data() {
    return {
      name: '',
      email: '',
      people: 1,
      date: ''
    }
  },
  methods: {
    submitForm() {
      // Handle form submission
      // Generate a random ID for the booking
      const bookingId = Math.floor(Math.random() * 10000000)

      // Display the booking ID in an alert
      alert(`Booking created with ID: ${bookingId}`)
    }
  }
}
</script>

<style scoped>
.booking-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.form-group {
  margin-bottom: 20px;
}
</style>
