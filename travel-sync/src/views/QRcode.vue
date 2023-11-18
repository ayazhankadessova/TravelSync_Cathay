<template>
   
           <!-- Navbar -->
    <div class="container-fluid">
     
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
    <br>
    <br>
    <br>
    <h2 class="center">Congratulations on creating a new Travel Space!</h2>
      <br>
      <br>
      <br>
      <div class="center">
      <img :src="qrCodeImageUrl" alt="QR Code" />
      <br>
      <br>
      <button @click="copyQRCodeLink" class = "btn btn-primary">Copy</button>
      <br>
      <br>
      <button @click="shareQRCodeLink" class = "btn btn-primary">Share</button>
      <br>
      <br>
      <a href="/TravelSpaceForm" class="btn btn-primary">Go to Travel Space</a>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        qrCodeImageUrl: 'data:image/png;base64,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',
        qrCodeLink: 'https://travelSpace.com/travel-space'
      };
    },
    methods: {
      copyQRCodeLink() {
        const el = document.createElement('textarea');
        el.value = this.qrCodeLink;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('Link copied to clipboard!');
      },
      shareQRCodeLink() {
        if (navigator.share) {
          navigator.share({
            title: 'Travel Space QR Code Link',
            url: this.qrCodeLink
          })
          .then(() => {
            console.log('Link shared successfully.');
          })
          .catch((error) => {
            console.error('Error sharing link:', error);
          });
        } else {
          // Fallback for browsers that do not support the Web Share API
          alert('Share functionality is not supported in this browser.');
        }
      },
     
    }
  };
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




</style>