<template>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../img/washfour.jpg" alt="First slide">
      <div class="carousel-caption d-none d-md-block text-overlay">
        <h1>Welcome to Car Wash</h1>
        <p>Get your car cleaned with the best service in town.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../img/washfive.jpg" alt="Second slide">
      <div class="carousel-caption d-none d-md-block text-overlay">
        <h1>Interior Detailing</h1>
        <p>Expert care for your car's interior surfaces.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../img/washsix.jpg" alt="Third slide">
      <div class="carousel-caption d-none d-md-block text-overlay">
        <h1>Engine Cleaning</h1>
        <p>Keep your engine spotless with our professional service.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>
   export default{
     name: 'StayComponent',
   }
</script>

<style scoped>
.carousel-caption {
  bottom: 40%; 
}

/* Dark semi-transparent background */
.text-overlay {
  background-color: rgba(0, 0, 0, 0.5); /* Dark overlay with transparency */
  padding: 20px;
  border-radius: 10px; /* Optional for rounded corners */
}

/* Optional blur effect behind text */
.text-overlay {
  backdrop-filter: blur(5px); /* Blurs the background */
  background-color: rgba(0, 0, 0, 0.4); /* Darker color with transparency */
  padding: 20px;
  border-radius: 10px;
}

.carousel-inner{
  min-height: 500px;
}

.carousel-caption h1 {
  font-size: 60px;
  font-family: 'Century Gothic';
  font-weight: bold;
  color: #fff; /* White text color */
}

.carousel-caption p {
  font-size: 17px;
  color: #ddd; /* Lighter text color */
}
</style>
