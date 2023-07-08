<template>
  <div>
  </div>
</template>

<style>
.login {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

h2 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

input {
  margin-bottom: 10px;
  padding: 5px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

<script>
export default {
  name: 'Login_',

  data() {
    return {
      username: '',
      password: ''
    };
  },

  methods: {
    login() {
      // Aquí puedes implementar la lógica de autenticación
      // Por ejemplo, puedes enviar una solicitud al servidor para verificar las credenciales

      // Ejemplo básico de verificación de credenciales
      if (this.username === 'usuario' && this.password === 'contraseña') {
        alert('Inicio de sesión exitoso');
        // Aquí puedes redirigir al usuario a otra página o realizar otras acciones después del inicio de sesión exitoso
      } else {
        alert('Credenciales inválidas');
      }

      // Limpiar los campos de entrada
      this.username = '';
      this.password = '';
    }
  }
};
</script>

