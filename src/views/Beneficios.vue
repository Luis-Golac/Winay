<template>

    <div class="about-header">
      <h1>Beneficios para la comunidad</h1>
    </div>
    <div class="about-content_izq">
      <div class="about-item">
        <img src="../assets/img12.jpg" alt="Wiñay" class="img1"/>
      </div>

    <div class="diamond">
      <h3>Acceso<br>a Energía</h3>
      <p><br>El proyecto brinda acceso a energía sostenible y autónoma a comunidades que carecen de acceso a la electricidad, mejorando su calidad de vida, oportunidades de desarrollo y satisfaciendo necesidades<br>básicas.</p>
    </div>
    </div>

    <div class="about-content_der">

    <div class="diamond1">
      <h3>Conciencia<br>Ambiental</h3>
      <p><br>El proyecto fomenta la conciencia ambiental al aprovechar la energía mecánica generada por las personas y su interacción con el entorno natural. Promueve un enfoque sostenible en el uso de<br>recursos.</p>
    </div>
      <div class="about-item1">
        <img src="../assets/img13.jpg" alt="Wiñay" class="img2"/>
      </div>

      <div class="deformed-shape1">
      </div>
      <div class="deformed-shape2">
      </div>
      <div class="deformed-shape3">
      </div>
      <div class="deformed-shape4">
      </div>
    </div>


</template>

<script>
export default {
  name: 'Benefits_'
}
</script>

<style scoped>


.about-header {
  background-color: #122052;
  color: white;
  padding: 5px;
  margin-top: 25px;
  margin-left: 25px;
  margin-right: 25px;
  border-radius: 35px;
  text-align: center;
  font-size: 30px;
}

.about-content_izq {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 80px;
  margin-top: 65px;
  margin-left: 250px;
  margin-right: 50%;
}


.about-content_der {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 80px;
  margin-top: 50px;
  margin-left: 50%;
  margin-right: 50px;
}

.about-item {
  background-color: #f4f4f4;
  border-image: linear-gradient(to right, #08c9ff, #eafdf5) 1;
  border-radius: 60px; 
  border: 4px solid #08c9ff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 60px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  text-align: center;
  animation: fadeIn 0.5s ease-in;
  height:600px;
}

.about-item h2 {
background-color: white;
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
  color: white;
  line-height: 1.6;
  font-size: 20px;
  font-family: Verdana, sans-serif;
}


.diamond {
  width: 200px;
  height: 200px;
  border: 2px solid #08c9ff;
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

.diamond {
  position: absolute;
  top: 660px;
  left: 60%;
  width: 450px; 
  height: 450px;
  transform: rotate(45deg);
}

.diamond h3, .diamond p {
  position: relative;
  transform: rotate(-45deg);
  width: 100%;
  text-align: center;
}


.diamond h3 {
  color: white;
  font-size: 35px;
  margin-right: 30px;
  padding-right:320px;
  margin-bottom: 30px;
}

.diamond p {
  color: white;
  font-size: 23px;
  margin-left: 30px;
  margin-bottom: 180px;
}

.circle:nth-child(1), .diamond:nth-child(1) {
  background-color: #12324f;
  color: white;
}

.circle:nth-child(2), .diamond:nth-child(2) {
  background-color: #12324f;
  color: white;
}
.img1 {
  width: 100%;
  height: 90%;
  padding-top: 25px;
  border-radius: 50px;
}

.about-item1 {
  background-color: #f4f4f4;
  border-image: linear-gradient(to right, #08c9ff, #eafdf5) 1;
  border-radius: 60px; 
  border: 4px solid #08c9ff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 60px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  text-align: center;
  animation: fadeIn 0.5s ease-in;
  height:600px;
}

.about-item1 h2 {
background-color: white;
color: white;
font-family: 'Arial', sans-serif;
font-size: 30px;
padding: 10px; 
border-radius: 20px;
margin-bottom: 20px;
margin-left: 45px;
margin-right: 45px;
}
.about-item1 p {
  color: white;
  line-height: 1.6;
  font-size: 20px;
  font-family: Verdana, sans-serif;
}
.img2 {
  width: 100%;
  height: 90%;
  padding-top: 25px;
  border-radius: 50px;
}
@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}



.diamond1 {
  width: 200px;
  height: 200px;
  border: 2px solid #08c9ff;
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

.diamond1 {
  position: absolute;
  top: 1350px;
  left: 20%;
  width: 450px;
  height: 450px;
  transform: rotate(45deg);
}
.diamond1 h3, .diamond1 p {
  position: relative;
  transform: rotate(-45deg);
  width: 100%;
  text-align: center;
}


.diamond1 h3 {
  color: white;
  font-size: 35px;
  margin-right: 30px;
  padding-right:320px;
  margin-bottom: 30px;
}

.diamond1 p {
  color: white;
  font-size: 23px;
  margin-left: 30px;
  margin-bottom: 180px;
}


.diamond1:nth-child(1) {
  background-color: #12324f;
  color: white;
}

.diamond1:nth-child(2) {
  background-color: #12324f;
  color: white;
}

.deformed-shape1 {
  width: 19.4%;
  height: 85.2%;
  background-color: #3b657a;
  position: absolute;
  top: 0;
  left: 40;
  opacity: 1;
  clip-path: polygon(95% 48%, 5% 48%, 5% 83.5%);
}

.deformed-shape2 {
  width: 19.4%;
  height: 100%;
  background-color: #46d57a;
  position: absolute;
  top: 0;
  left: 40;
  opacity: 1;
  clip-path: polygon(95% 86.5%, 5% 55.5%, 5% 86.7%); 
}

.deformed-shape3 {
  width: 50%;
  height: 89.2%;
  background-color: #833333;
  position: absolute;
  top: 0;
  left: 100;
  opacity: 1;
  clip-path: polygon(94% 45.7%, 41% 45.7%, 94% 97%);
}

.deformed-shape4 {
  width: 50%;
  height: 100%;
  background-color: #302303;
  position: absolute;
  top: 0;
  left: 40;
  opacity: 1;
  clip-path: polygon(94% 86.5%, 94% 40.8%, 41% 86.7%); 
}

</style>

