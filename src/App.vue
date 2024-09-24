<template>
   <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="base">
            <a class="navbar-brand" href="#">CarWashalishous</a>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link active" to="/" exact>Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/services">Services</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact" aria-disabled="true">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <router-view></router-view>
      <EndComponent/>
   </div>  
</template>

<script>
import EndComponent from './components/EndComponent.vue'

   export default {
    name: 'App',
    components:{
       EndComponent
    }
   }   
</script>

<style scoped>
   .navbar{
    font-family: 'Century Gothic';
    padding-left: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px #cccccc solid;
   }
</style>