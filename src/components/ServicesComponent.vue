<template>
  <div class="voce">
      <h1>{{ heading }}</h1>
      <p id="palavras">{{ paragraph }}</p>
        <div class="Cards">
            <div v-for="(service, index) in services" :key="index" class="Hash">
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
                <p>{{ service.price }}</p>
            </div>
        </div>      
   </div>   
</template>

<script>
   export default {
     name: 'ServicesComponent',
     data(){
        return {
            heading: "Services",
            paragraph: "These are all the car washing services we provide as a company.",
            services: [
                { title: "Full Body Wash", description: "Washing every single part of your car spotless.", price: "500" },
                { title: "Interior Detailing", description: "Deep cleaning of all interior surfaces, including seats, carpets, and dashboard.", price: "800" },
                { title: "Engine Cleaning", description: "Thorough cleaning of the engine bay to remove dirt, grease, and debris.", price: "600" },
                { title: "Tire and Wheel Shine", description: "Polishing and cleaning of tires and wheels for a glossy finish.", price: "300" },
                { title: "Wax and Polish", description: "Exterior waxing and polishing to give your car a smooth, shiny finish.", price: "700" },
                { title: "Headlight Restoration", description: "Restoring foggy headlights to their original brightness and clarity.", price: "400" },
                { title: "Paint Protection", description: "Applying a protective coating to preserve your car's paint from scratches and weather damage.", price: "1000" },
                { title: "Undercarriage Cleaning", description: "Special cleaning of the car's undercarriage to remove dirt, mud, and road salt.", price: "550" }
            ]
        };
     },
   }
</script>

<style scoped>

 h1{
    font-family: 'Century Gothic';
    font-weight: 100;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 20px;
    color: #000;
    margin-top: 40px;
    margin-bottom: 30px;
    font-family: 'Century Gothic';
 }
 .Cards{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px; /* Adds spacing between cards */
    margin: 20px 0;
 }
 h3{
    font-family: 'Century Gothic';
    font-weight: 200;
    font-size: 25px;
 }
 p{
    font-family: 'Century Gothic';
    text-align: center;
 }
 .Hash{
    background-color: #f8f9fa;
    color: #000;
    width: 370px;
    text-align: center;
    border: 1px #cccccc solid;
    border-radius: 10px;
    padding: 55px 25px 55px 25px;
    margin-top: -15px;
 }
 .voce{
    margin-bottom: 50px;
 }
 #palavras{
    margin-top: -30px;
    margin-bottom: 60px;
 }
</style>