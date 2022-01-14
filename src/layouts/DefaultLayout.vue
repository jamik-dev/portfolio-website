<template>
  <div class="main">
      <Navbar :getActive="getActiveValue"/> 
      <SideBar :isActive="isActive"/>
      <Home />
      <About />

  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'DefaultLayout',
  components: {Navbar, Home, SideBar, About},
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    getActiveValue(isActive) {
      this.isActive =  isActive
    }
  }
};
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 86%;
}
</style>

