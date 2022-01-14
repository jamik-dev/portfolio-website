<template>
  <div class="main">
      <Navbar /> 
      <SideBar />
      <Home />

  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Home from '@/components/Home.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'DefaultLayout',
  components: {Navbar, Home, SideBar},
  setup() {
    
  }
};
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

