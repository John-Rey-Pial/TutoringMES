<template>
<div>
  <div>
      <img src="../../src/assets/pastel-bg.jpg" class="background" />
    </div>
<h1>
    <Login/>
  </h1>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Login from '../components/login-page/login.vue'
export default {
  name: 'login',
  components: {
    Login
    
  }
}
</script>

<style scoped>
.background {
  position:absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  
}
</style>