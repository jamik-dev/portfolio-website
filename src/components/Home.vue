<template>
  <!-- ====== Header ======  -->
  <section id="home" class="header">
    <img src="../assets/img/bg.jpg" class="img" alt="" />
    <div class="svg">
      <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
        <polygon
          points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"
        ></polygon>
      </svg>
    </div>

    <div class="v-middle">
      <div class="container">
        <div class="row">
          <!-- caption -->
          <div class="caption">
            <h5>Hello</h5>
            <h1 class="cd-headline clip"> I am
              <span class="is-visible">{{ typeValue }}</span>
              <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span> 
            </h1>
            <!-- social icons -->
            <div class="social-icon">
              <a href="#0">
                <span><i class="fab fa-facebook-f"></i></span>
              </a>
              <a href="#0">
                <span><i class="fab fa-telegram-plane"></i></span>
              </a>
              <a href="#0">
                <span><i class="fab fa-github"></i></span>
              </a>
              <a href="#0">
                <span><i class="fab fa-instagram"></i></span>
              </a>
              <a href="#0">
                <span><i class="fab fa-linkedin-in"></i></span>
              </a>
            </div>
          </div>
          <!-- end caption -->
        </div>
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->
  </section>
  <!-- ====== End Header ======  -->
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return{
      typeValue: '',
      typeStatus: false,
      typeArray: ['Toshov Jamshid', 'a Web-developer', 'a Freelancer'],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0
    }
  },
  methods: {
    typeText() {
      if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if(!this.typeStatus)
          this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);  
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      }
      else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if(this.charIndex > 0) {
        if(!this.typeStatus)
          this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);  
      }
      else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if(this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex =  0;
        
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200)
  }
};
</script>
<style >
.header {
  height: 100vh;
  background-size: cover;
  position: relative;
  overflow: hidden;
  background-position: 0px 0px;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.img {
  position: absolute;
  filter: brightness(0.35);
  width: 100%;
  height: 120%;
}
.svg {
  position: absolute;
  bottom: -9px;
  left: 0;
  width: 100%;
  z-index: 22;
}
.svg svg {
  fill: #fff;
}
.v-middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  width: 100%;
  text-align: center;
}
.v-middle .caption h5 {
  font-size: 50px;
  font-weight: 1000;
  letter-spacing: 4px;
  margin-bottom: 10px;
  display: block;
  line-height: 1.1;
}
h1,
h2,
h3,
h4,
h5 {
  font-family: "Montserrat", sans-serif;
}
.clip {
  font-family: "Ubuntu Thin";
  font-weight: 200;
  font-size: 4.2rem;
  height: 100px;
  /* margin-bottom: -20px; */
}
.clip .is-visible {
  font-family: "Ubuntu Light";
  font-size: 4.2rem;
  font-weight: 300;
}
.social-icon a {
  display: inline-block;
  margin: 5px;
  margin-top: 30px;
  background: rgba(0, 0, 0, 0.4);
  height: 40px;
  width: 40px;
  border-radius: 50%;
  position: relative;
  transition: background-color 0.5s linear;
}
.social-icon a:nth-child(1):hover{
  background-color: #3B5998;
}
.social-icon a:nth-child(2):hover{
  background-color: #229ED9;
}
.social-icon a:nth-child(3):hover{
  background-color: #24292f;
}
.social-icon a:nth-child(4):hover{
  background-color: #DD2A7B;
}
.social-icon a:nth-child(5):hover{
  background-color: #0077b5;
}

.fab {
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.4rem;
}
span.cursor{
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  height: 90px;
  background: #fff;
  animation: cursorBlink 1s infinite;
}
span.cursor.typing{
  animation: none;
}
@keyframes cursorBlink {
  49%{ background: #fff;}
  50%{ background: transparent;}
  99%{ background: transparent;}
}
</style>