<template>
  <header class="header-container">
    <div class="logo-container">
      <div class="slogan-container">
        <div class="slogan-text">Energía renovable para todos</div>
      </div>
      <router-link :to="{ name: 'Home' }" class="logo-link">
        <img src="logo.png" alt="Logo" class="logo-image">
        <span class="logo-text">Wiñay</span>
      </router-link>
    </div>
    <nav class="nav-container">
      <router-link :to="{ name: 'Acerca-De' }" class="nav-link">
        <div class="nav-link-text">Acerca de<br>nosotros</div>
      </router-link>
      <router-link :to="{ name: 'Beneficio-C' }" class="nav-link">
        <div class="nav-link-text">Beneficios para<br>la comunidad</div>
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header_'
}
</script>

<style scoped>
.header-container {
  background: linear-gradient(to right, #006699, #005588, #003366);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-container {
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  position: relative;
}

.logo-link {
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
}

.logo-image {
  width: 160px;
  height: 160px;
  margin-right: 30px;
}

.logo-text {
  font-size: 130px;
  font-weight: bold;
}

.slogan-container {
  position: absolute;
  bottom: -20px;
  right: 0;
  transform: translate(50%, 50%);
  background-color: #002244;
  padding: 10px 20px;
  border-radius: 8px;
  color: #fff;
}

.slogan-text {
  font-size: 24px;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  max-width: 3000px;
  margin-top: 50px;
  width: 100%;
}

.nav-link {
  flex-basis: 23%;
  height: 60px;
  background-color: #003366;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav-link:hover {
  background-color: #002155;
}

.nav-link-text {
  line-height: 1.2;
}
</style>

