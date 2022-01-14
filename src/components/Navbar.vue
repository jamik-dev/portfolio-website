<template>
  <!-- ====== Navgition ======  -->
  <nav class="navbar navbar-default">
    <div class="container">>
      <div class="navbar-wrapper" id="nav-icon-collapse">
        <div class="navbar-header">
          <a class="logo" href="#">Jamshid</a>
        </div>
        <ul class="nav">
          <li>
            <router-link to="/home">Home<span></span></router-link>
          </li>
          <li>
            <router-link to="/about">About<span></span></router-link>
          </li>
          <li>
            <a href="#">Services<span></span></a>
          </li>
          <li>
            <a href="#">Works<span></span></a>
          </li>
          <li>
            <a href="#">Clients<span></span></a>
          </li>
          <li>
            <a href="#">Blog<span></span></a>
          </li>
          <li>
            <a href="#">Contact<span></span></a>
          </li>
        </ul>

          <div @click="openSideBar(isActive)" v-on:click="getActive(isActive)" class="burger-wrapper">
            <span :class="{'burActive': isActive}" class="burger-button"></span>
          </div>   
          
      </div>  
    </div>
  </nav>
  <!-- ====== End Navgition ======  -->
</template>
<script>
import {ref} from 'vue'
export default {
  name: "Navbar",
  props: {
    getActive: Function
  },
  setup() {
    const isActive = ref(false)
    const openSideBar = () => {
      isActive.value = !isActive.value
    }
    return{isActive, openSideBar}
  }
};
</script>
<style>
.navbar {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;

}
.navbar-wrapper {
  display: flex;
  background: transparent;
  height: 110px;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  font-family: "Poppins", sans-serif;
}
.nav {
  display: flex;
  width: 70%;
  list-style-type: none;
  justify-content: flex-end;
  align-items: center;
  position: sticky;
  transition: margin 1s ease-in-out;

}
.nav a {
  font-weight: 550;
  font-size: 15px;
  line-height: 20px;
  outline: none;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  position: relative;
}

.nav li,
.navbar-header a {
  color: #fff;
  text-decoration: none;
  margin: 10px;
  padding: 10px;
  outline: none;
}
.navbar-header {
  width: 20%;
  display: flex;
  justify-content: flex-start;
  transition: all 1s ease-in-out;
}
.navbar-header a {
  font-family: "Ubuntu";
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 900;
  margin-left: 90px;
}
.nav li span {
  position: absolute;
  bottom: -5px;
  right: 0px;
  height: 2px;
  width: 0;
  background: #fff;
}
.burger-wrapper{
  height: 50px;
  width: 50px;
  /* border: 3px #fff solid; */
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.burger-button{
  height: 5px;
  border-radius: 10px;
  width: 35px;
  background: #fff;  
  transition: all 0.5s ease-in-out;
}
.burger-button::before,
.burger-button::after{
  content: '';
  height: 5px;
  border-radius: 10px;
  position: absolute;
  width: 35px;
  background: #fff;  
  transition: all 0.5s ease-in-out;
}
.burger-button::after{
  transform: translateY(-11px);
}
.burger-button::before{
  transform: translateY(11px);
}
.burActive::before{
  transform: rotate(45deg) translate(35px, -35px);
}
.burActive{
  transform: translateX(-50px);
  background: transparent;
}
.burActive::after{
  transform: rotate(-45deg) translate(35px, 35px);
  
}
  @media (min-width: 786px) {
    .burger-wrapper{
      display: none;
    }
  }

  @media (min-width: 786px) and (max-width: 930px) {
  .nav{
		margin-left: 90px;
    transition: margin 1s ease-in-out;
	}
	.navbar-header{
		margin-left: -50px;
		transition: margin 1s ease-in-out;
	}
  }
  @media (min-width: 0px) and (max-width: 785px) {
    .nav li{
      display: none;
    }
    .navbar-header{
      margin-left: -50px;
    }
  }
</style>
