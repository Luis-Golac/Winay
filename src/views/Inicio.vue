<template>
  <div class="container">
    <div class="deformed-shape1" :class="{ 'show': showTitle }" ref="deformedShape1">
      <h1 v-show="showTitle" class="title" ref="titleRef">¡Bienvenidos al<br> proyecto Wiñay!</h1>
    </div>
    <div class="deformed-shape2" :class="{ 'show': showTitle }">
      <img v-show="showTitle" class="shape-image" :style="shapeImageStyle" src="../assets/img2.png" alt="Forma 1" ref="shapeImageRef">
    </div>
    <div class="deformed-shape3" :class="{ 'show': showTitle }">
      <p class="info-shape3">Enfrentando la problemática de la falta de acceso a la energía eléctrica en las zonas rurales, un proyecto con la misión de brindar energía limpia y sostenible a comunidades desfavorecidas.</p>
    </div>
    <div class="deformed-shape4" :class="{ 'show': showTitle }">
      <p class="info-shape4">Innovación y sostenibilidad para un futuro brillante. Conoce nuestro proyecto que utiliza zapatos modificados y pilas recargables para aprovechar la energía mecánica y mejorar la calidad de vida de los trabajadores del campo en Perú.</p>
    </div>
    <div class="circle">
      <img src="../assets/img4.png" alt="suela" class="image">
    </div>
    <div class="circle1">
      <img src="../assets/img3.jpg" alt="suela" class="image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inicio_',
  data() {
    return {
      showTitle: false,
      shapeImageStyle: {
        top: '10%',
        left: '44%',
        width: '80%',
        height: '80%'
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.showTitle = true;
      this.adjustElementSizes();
    }, 500);
    window.addEventListener('resize', this.adjustElementSizes);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.adjustElementSizes);
  },
  methods: {
    adjustElementSizes() {
      const containerWidth = this.$el.offsetWidth;
      const containerHeight = this.$el.offsetHeight;

      // Adjust deformed-shape1 size
      const deformedShape1 = this.$refs.deformedShape1;
      if (deformedShape1) {
        const deformedShape1Width = containerWidth * 0.6;
        const deformedShape1Height = containerHeight * 0.60;
        deformedShape1.style.width = `${deformedShape1Width}px`;
        deformedShape1.style.height = `${deformedShape1Height}px`;
      }

      // Adjust deformed-shape2 size
      // Similar adjustments for other deformed-shapes

      // Adjust title font size
      const title = this.$refs.titleRef;
      if (title) {
        const titleFontSize = containerWidth * 0.065;
        title.style.fontSize = `${titleFontSize}px`;
      }

      // Adjust shape image size
      const shapeImage = this.$refs.shapeImageRef;
      if (shapeImage) {
        const shapeImageWidth = containerWidth * 0.1;
        const shapeImageHeight = containerHeight * 0.5;
        shapeImage.style.width = `${shapeImageWidth}px`;
        shapeImage.style.height = `${shapeImageHeight}px`;
      }
    }
  }
}
</script>

<style scoped>
.info-shape3 {
  font-size: 2vw;
  position: absolute;
  top: 33%;
  left: 59%;
  transform: translate(-50%, -50%);
  color: white;
  font-family: 'Oswald', sans-serif;
}

.info-shape4{
  font-size: 2.5vw;
  position: absolute;
  top: 45%;
  left: 5%;
  right: 25%;
  text-align: center;
  color: white;
  font-family: 'Oswald', sans-serif;
}

.container {
  position: relative;
  width: 100%;
  height: 100vh;
}

.deformed-shape1 {
  width: 60%;
  height: 60%;
  background-color: #142026;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.5s ease, transform 0.5s ease;
  z-index: 3;
  clip-path: polygon(0% 0%, 80% 0%, 87% 40%, 80% 80%, 0% 80%);
}

.deformed-shape1.show {
  opacity: 1;
  transform: translateX(0%);
}

.deformed-shape2 {
  width: 60%;
  height: 60%;
  background-color: #fcc40c;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.5s ease, transform 0.5s ease;
  z-index: 1;
  clip-path: polygon(0% 6%, 93% 6%, 100% 40%, 93% 74%, 0% 74%);
}

.deformed-shape2.show {
  opacity: 1;
  transform: translateX(0%);
}

.deformed-shape3 {
  width: 60%;
  height: 60%;
  background-color: #123142;
  position: absolute;
  top: 0;
  left: 30%;
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.5s ease, transform 0.5s ease;
  z-index: 2;
  clip-path: polygon(0% 3%, 80% 3%, 87% 40%, 80% 77%, 0% 77%);
}

.deformed-shape3.show {
  opacity: 1;
  transform: translateX(0%);
}


.deformed-shape4 {
  width: 60%;
  height: 100%;
  background-color: #3b657a;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.5s ease, transform 0.5s ease;
  z-index: 3;
  clip-path: polygon(0% 48%, 80% 48%, 80% 85%, 40% 100%, 0% 85%);
}

.deformed-shape4.show {
  opacity: 1;
  transform: translateX(0%);
}

.title {
  color: white;
  font-size: 7vw;
  text-align: left;
  margin: 0;
  padding-left: 5%;
  opacity: 1;
  transition: opacity 0.5s ease;
  font-family: 'Oswald', sans-serif;
  white-space: nowrap; /* Evita que el texto se divida en varias líneas */
  position: absolute;
  top: 0.5%;
}

.title.show {
  opacity: 1;
}

.shape-image {
  position: absolute;
  object-fit: contain;
}

.circle1 {
  width: 600px; /* Tamaño del contenedor circular */
  height: 600px;
  border-radius: 50%; /* Hace que el contenedor sea circular */
  background-color: #ccc; /* Color de fondo del contenedor */
  justify-content: center;
  position: absolute;
  align-items: center;
  top: 46%;
  left: 47%;
}

.circle {
  width: 600px; /* Tamaño del contenedor circular */
  height: 600px;
  border-radius: 50%; /* Hace que el contenedor sea circular */
  background-color: #ccc; /* Color de fondo del contenedor */
  justify-content: center;
  position: absolute;
  align-items: center;
  top: 60%;
  left: 70%;
}
.image {
  top: 70%;
  left: 70%;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%; /* Hace que la imagen sea circular */
}
</style>

