<template>
  <section class="about-section">
    <div class="about-header">
      <h1>Acerca de Wiñay</h1>
    </div>
    <div class="about-content">
      <div class="about-item">
        <h2>Wiñay</h2>
        <img src="../assets/img5.png" alt="Wiñay" class="img1"/>
        <p> Wiñay es un proyecto que convierte la energía mecánica de personas en el campo en electricidad, utilizando zapatos modificados con un dispositivo integrado. Proporciona energía sostenible y accesible para comunidades rurales en Perú. </p>
      </div>

      <div class="about-item">
        <h2>Objetivos</h2>
        <img src="../assets/img6.png" alt="Objetivos" class="img2" />
        <p> El objetivo de Wiñay es desarrollar un dispositivo innovador que recolecte la energía mecánica generada por personas en el campo en Perú. Proporciona una fuente adicional y sostenible de energía para cargar dispositivos esenciales y abordar la brecha energética en comunidades rurales. </p>
      </div>
    </div>
  
    <div class="about-header-ODS">
      <h1>ODS Trabajadas</h1>
    </div>

    <div class="about-content-ods">
      <div class="about-item-ods">
        <h2>ODS 7</h2>
        <img src="../assets/img9.jpg" alt="ODS" class="ods"/>
      </div>
      <div class="about-item-ods">
        <h2>ODS 8</h2>
        <img src="../assets/img7.png" alt="ODS" class="ods"/>
      </div>
      <div class="about-item-ods">
        <h2>ODS 9</h2>
        <img src="../assets/img10.jpg" alt="ODS" class="ods"/>
      </div>
      <div class="about-item-ods">
        <h2>ODS 12</h2>
        <img src="../assets/img11.jpg" alt="ODS" class="ods"/>
      </div>
    </div>



  </section>
</template>

<script>
export default {
  name: 'AcercaDe'
}
</script>

<style scoped>
.about-section {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.about-header-ODS {
  background-color: #002031;
  color: white;
  padding: 5px;
  margin-left: 25px;
  margin-right: 25px;
  border-radius: 35px;
  text-align: center;
  font-size: 30px;
}
.about-header {
  background-color: #002031;
  color: white;
  padding: 5px;
  margin-left: 25px;
  margin-right: 25px;
  border-radius: 35px;
  text-align: center;
  font-size: 30px;
}

.about-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 80px;
  margin-top: 20px;
  margin-left: 65px;
  margin-right: 65px;
}

.about-content-ods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 20px;
  margin-left: 65px;
  margin-right: 65px;
  margin-bottom: 50px;
}

@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

.about-item {
  background-color: #f4f4f4;
  border-image: linear-gradient(to right, #00739a, #00afe1) 1;
  border-radius: 60px; /* Aumenta este valor para esquinas más redondeadas */
  border: 4px solid #00739a;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 60px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 20px;
  text-align: center;
  animation: fadeIn 0.5s ease-in;
}

.about-item-ods {
  background-color: #f4f4f4;
  border-image: linear-gradient(to right, #00739a, #00afe1) 1;
  border-radius: 60px; /* Aumenta este valor para esquinas más redondeadas */
  border: 4px solid #00739a;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 20px;
  text-align: center;
  animation: fadeIn 0.5s ease-in;
}
.img1 {
  width: 70%;
  height: auto;
  border-radius: 30px;
}

.img2 {
  width: 61%;
  height: auto;
  border-radius: 30px;
}

.ods{
  width: 72%;
  height: auto;
  border-radius: 30px;
}

.about-item-ods h2 {
background-color: #004460;
color: white;
font-family: 'Arial', sans-serif;
font-size: 30px;
padding: 10px; 
border-radius: 20px;
margin-bottom: 20px;
margin-left: 45px;
margin-right: 45px;
}

.about-item h2 {
background-color: #004460;
color: white;
font-family: 'Arial', sans-serif;
font-size: 30px;
padding: 10px; 
border-radius: 20px;
margin-bottom: 20px;
margin-left: 45px;
margin-right: 45px;
}

.about-item p {
  color: #333;
  line-height: 1.6;
  font-size: 20px;
  font-family: Verdana, sans-serif;
}
.circle-container, .diamond-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px 0;
}

.circle, .diamond {
  width: 200px;
  height: 200px;
  border: 2px solid #4caf50;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  margin: 10px;
}

.circle {
  border-radius: 50%;
}

.circle-bottom {
  order: 1;
}

.diamond {
  position: relative;
  width: 141px; /* 200 / sqrt(2) */
  height: 141px; /* 200 / sqrt(2) */
  transform: rotate(45deg);
}

.diamond h3, .diamond p {
  position: relative;
  transform: rotate(-45deg);
  width: 100%;
  text-align: center;
}

.diamond-bottom {
  order: 1;
}

.circle h3, .diamond h3 {
  color: #4caf50;
  margin-bottom: 10px;
}

.circle p, .diamond p {
  color: #333;
}

.circle:nth-child(1), .diamond:nth-child(1) {
  background-color: #4caf50;
  color: white;
}

.circle:nth-child(2), .diamond:nth-child(2) {
  background-color: #8bc34a;
  color: white;
}

.circle:nth-child(3), .diamond:nth-child(3) {
  background-color: #cddc39;
  color: white;
}

.diamond:nth-child(4) {
  background-color: #ffeb3b;
  color: white;
}




</style>

