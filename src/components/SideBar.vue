<template>
  <div :class="{'sideActive': isActive}" class="side-bar">
    <div class="side-body">
      <ul class="side-nav">
        <li>
          <a href="#">Home<span></span></a>
        </li>
        <li>
          <a href="#">About<span></span></a>
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
    </div>
  </div>

</template>
<script>
export default({
  props:['isActive'],
  setup() {

  }
})
</script>

<style>
.side-bar {
  width: 32%;
  transform: translateX(-100%);
  height: 100vh;
  position: absolute;
  z-index: 100;
  display: none;
  transition: transform .5s linear;
}
.sideActive{
  transform: translateX(0%)!important;

}
.side-body {
  background: #fff;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}
.side-nav li,
.side-nav li a{
    text-decoration: none;
    list-style-type: none;
    outline: none;
    color: #272727;
    font-family: 'Ubuntu';
    font-size: 20px;
    line-height: 70px;
    position: relative;
}
.side-nav a span{
    position: absolute;
    bottom: -10px;
    left: 0;  
    height: 3px;
    width: 0%;
    background: #272727;
    transition: width .5s linear;
}
.side-nav a:hover span{
    width: 100%;
}
 @media (min-width: 0px) and (max-width: 785px){
     .side-bar{
         display: block;
     }
 }
</style>