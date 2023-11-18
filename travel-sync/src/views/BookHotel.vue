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
          <label for="date">Date</label>
          <input type="date" id="date" v-model="date" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="passport">Passport Number</label>
          <input type="text" id="passport" v-model="passport" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="contact">Contact Number</label>
          <input type="tel" id="contact" v-model="contact" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="roomType">Room Type</label>
          <select id="roomType" v-model="roomType" class="form-control" required>
            <option value="">Select a room type</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="suite">Suite</option>
            <!-- Add more options as needed -->
          </select>
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
      date: '',
      passport: '',
      contact: '',
      roomType: ''
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
