<script setup>
import { ref } from 'vue'
const event = ref({
  EventTitle: '',
  Organizer: '',
  Datetime: '',
  Location: '',
  termsOn: false,
  Description: '',
  Quota: '',
  Image: '',
  Destinations: [] // Add Destinations property as an empty array
})
// const newEvent = async function () {
//   console.log(JSON.stringify(event.value))
//   // post the booking to the backend
//   const response = await fetch('/api/events', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(event.value)
//   })
//   // convert the response to json
//   const json = await response.json()
//   // log the json
//   console.log(json)
//   // alert the user
//   alert(JSON.stringify(json))
// }
const newDestination = ref('')
const addDestination = function () {
  if (newDestination.value.trim() !== '') {
    event.value.Destinations.push(newDestination.value.trim())
    newDestination.value = ''
  }
}
const removeDestination = function (index) {
  event.value.Destinations.splice(index, 1)
}
</script>
<template>
  <div class="cont">
    <!-- Navbar -->

    <!-- Home/Events/New event container -->
    <!-- Registration form section -->
    <br />
    <br />
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h4>Travel Space Registration</h4>
          <br />
          <form @submit.prevent="newEvent">
            <div class="form-group">
              <label for="event-title">Group Name</label>
              <input
                v-model="event.EventTitle"
                type="text"
                class="form-control"
                id="event-title"
                placeholder="Enter event title"
              />
            </div>
            <br />
            <div class="form-group">
              <label for="organizer">Display Name</label>
              <input
                v-model="event.Organizer"
                type="text"
                class="form-control"
                id="organizer"
                placeholder="Enter organizer name"
              />
            </div>
            <br />
            <div class="form-group">
              <label for="datetime">Select a Date</label>
              <input
                v-model="event.DateTime"
                type="datetime-local"
                class="form-control"
                id="datetime"
              />
            </div>
            <br />
            <div class="form-group">
              <label for="destinations">Destinations</label>
              <div class="input-group">
                <input
                  v-model="newDestination"
                  type="text"
                  class="form-control"
                  id="new-destination"
                  placeholder="Enter a destination"
                />
                <button
                  @click="addDestination"
                  type="button"
                  class="btn btn-outline-secondary"
                  id="add-destination-button"
                >
                  +
                </button>
              </div>
            </div>
            <br />
            <div v-for="(destination, index) in event.Destinations" :key="index" class="form-group">
              <div class="input-group">
                <input
                  v-model="event.Destinations[index]"
                  type="text"
                  class="form-control"
                  :id="'destination-' + index"
                  :placeholder="'Destination ' + (index + 1)"
                />
                <button
                  @click="removeDestination(index)"
                  type="button"
                  class="btn btn-outline-danger"
                  :id="'remove-destination-button-' + index"
                >
                  -
                </button>
              </div>
            </div>
            <br />
            <div class="form-group form-check">
              <input
                v-model="event.Highlight"
                type="checkbox"
                class="form-check-input"
                id="highlight"
              />
              <label class="form-check-label" for="highlight">Highlight</label>
            </div>
            <br />
            <a href="/QRcode" class="btn btn-primary">Create</a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style computed>
.cont {
  background-image: url('/src/assets/background.jpeg');
  height: 600px;
}
</style>
