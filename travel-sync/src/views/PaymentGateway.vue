<template>
  <div class="container" style="margin-top: 40px">
    <h1>Payment Gateway</h1>
    <p>Processing payment for booking ID: 617289303</p>
    <form @submit.prevent="submitPayment">
      <div class="form-group">
        <label for="bank">Bank</label>
        <select id="bank" v-model="bank" class="form-control" required>
          <option value="">Select a bank</option>
          <option value="bank1">Hang Seng Bank</option>
          <option value="bank2">Bank of China</option>
          <option value="bank3">MasterCard</option>
        </select>
      </div>
      <div class="form-group">
        <label for="cardNumber">Card Number</label>
        <input type="text" id="cardNumber" v-model="cardNumber" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="expiryDate">Expiry Date</label>
        <input type="month" id="expiryDate" v-model="expiryDate" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="cvv">CVV</label>
        <input type="text" id="cvv" v-model="cvv" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Submit Payment</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      bank: '',
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    }
  },
  methods: {
    submitPayment() {
      // Handle payment submission
      // TODO: Integrate with a payment gateway API
      alert(`Payment submitted for booking ID: 617289303`)
    }
  }
}
</script>

<style scoped>
.container {
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
