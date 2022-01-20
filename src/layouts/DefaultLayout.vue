<template>
  <div class="main">
    <Navbar :getActive="getActiveValue" />
    <SideBar :isActive="isActive" />
    <Home />
    <About />
    <Services />
    <Portfolio />
    <Clients />
    <Numbers />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import SideBar from "@/components/SideBar.vue";
import Services from "@/components/Services.vue";
import Portfolio from "@/components/Portfolio.vue"
import Clients from "@/components/Clients.vue"
import Numbers from "@/components/Numbers.vue"

export default {
  name: "DefaultLayout",
  components: { Navbar, Home, SideBar, About, Services, Portfolio, Clients, Numbers },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    getActiveValue(isActive) {
      this.isActive = isActive;
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 86%;
}
body {
  font-family: "Poppins", sans-serif;
  color: #343434;
  font-weight: 400;
  font-size: 14px;
  outline: none;
}
</style>

