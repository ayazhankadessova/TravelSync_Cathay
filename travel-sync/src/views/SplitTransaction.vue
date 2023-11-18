<template>
    <!-- Navbar -->
    <div class="container-fluid" style="height: 10vh;">
     
      <nav class="navbar navbar-expand-lg navbar-light bg-cathay-blue">
        <RouterLink class="navbar-brand" to="/HomePage">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnzw9Aa-sT5_WAg3c7gR02m5tAF49TiXlPyFdSYvw&s" alt="Cathay Pacific" class="navbar-logo" style="width: 65px;">
        </RouterLink>
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
              <RouterLink class="nav-link active" to="/HomePage">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/hotels">Hotels</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/joinSpace">Transport</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/volunteers">Expenses</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
      <br>
     
      <div style="display: flex; justify-content: center;">
        <h1 class="cathay-blue">Transaction Splitting</h1>
      </div>
      <br>
      <br>
      
  
      <div class="button-container">
  <button @click="addExpense" class="btn btn-primary" style="background-color: #00645A;">Add an Expense</button>
  <button @click="settlePayments" class="btn btn-primary" style="background-color: #00645A;">Settle Payments</button>
</div>
  
      <br>
  
      <div v-if="showExpenseForm" class="expense-form">
  <h3 class="text-center">Add an Expense</h3>
  <div class="form-group">
    <label class="fw-bold">Shared With:</label>
    <br>
    <input v-model="sharedWith" type="text" class="form-control" placeholder="Enter names separated by commas">
  </div>
  <br>
  
  <div class="form-group">
    <label class="fw-bold">Description:</label>
    <br>
    <input v-model="description" type="text" class="form-control" placeholder="Enter description">
  </div>
  <br>
  
  <div class="form-group">
    <label class="fw-bold">Amount Spent:</label>
    <br>
    <input v-model.number="amountSpent" type="number" class="form-control" placeholder="Enter amount spent">
  </div>
  <br>
  
  <div class="button-container">
    <button @click="saveSharedWith" class="btn btn-primary" style="background-color: #00645A;">Save</button>
    <button @click="generateSplit" class="btn btn-primary" style="background-color: #00645A;">Generate Split</button>
</div>
  <!-- <div class="text-center">
    <button @click="saveSharedWith" class="btn btn-primary" style="background-color: #00645A;">Save</button>
  </div>
  <div class="text-center mt-3">
    <button @click="generateSplit" class="btn btn-primary" style="background-color: #00645A;">Generate Split</button>
  </div> -->
</div>
  
      <div v-if="showSettlement">
        <h3>Settlement Details</h3>
        <ul>
          <li v-for="(name, amount) in settlement">{{ amount }} owes you {{ name }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showExpenseForm: false,
        sharedWith: '',
        description: '',
        amountSpent: 0,
        settlement: {},
        showSettlement: false
      };
    },
    methods: {
      addExpense() {
        this.showExpenseForm = true;
        this.sharedWith = '';
        this.description = '';
        this.amountSpent = 0;
        this.settlement = {};
        this.showSettlement = false;
      },
      saveSharedWith() {
        // Split the sharedWith string into an array of names
        const names = this.sharedWith.split(',').map(name => name.trim());
        this.sharedWith = names;
      },
      generateSplit() {
        const numPeople = this.sharedWith.length + 1; // Adding 1 for yourself
        const splitAmount = this.amountSpent / numPeople;
  
        // Calculate the settlement amounts
        this.settlement = {};
        this.sharedWith.forEach(name => {
          this.settlement[name] = splitAmount;
        });
  
        this.showSettlement = true;
      },
      settlePayments() {
        // Perform any necessary actions to settle the payments
        // (e.g., update payment records, send notifications, etc.)
        console.log('Payments settled!');
      }
    }
  };
  </script>

<style scoped>
.button-container {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
}

.sg-button {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
}

.h1{
    justify-content: center;
}
</style>