<template>
  <section class="about">
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-sm-12">
          <div class="hero-img">
            <div class="scale-anim">
              <img src="@/assets/img/hero.jpg" />
            </div>
          </div>
        </div>
        <div class="col-md-7 col-sm-12">
          <div class="content">
            <h3>About Me</h3>
            <span class="sub-title">Frontend Web-developer</span>
            <p>
              I am <b>Toshov Jamshid</b> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ut qui, iure ducimus sed accusantium, reiciendis
              mollitia distinctio nobis corrupti fugiat consequuntur magnam
              doloremque eos repellat laboriosam quaerat nulla tempore suscipit!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              doloremque facilis, necessitatibus quam ea cumque debitis.
            </p>
            <div class="skills">
              <div class="item">
                <div class="skill-progress">
                  <h6>Web Design</h6>
                  <span data-value="90%" style="width: 90%"></span>
                </div>
              </div>
              <div class="item">
                <div class="skill-progress">
                  <h6>Web Design</h6>
                  <span data-value="90%" style="width: 90%"></span>
                </div>
              </div>
              <div class="item">
                <div class="skill-progress">
                  <h6>Web Design</h6>
                  <span data-value="90%" style="width: 90%"></span>
                </div>
              </div>
            </div>
            <button class="buton buton-bg">Download C.V</button>
            <button class="buton bg-2">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.about .container {
  margin-top: 125px;
  height: 100vh;;
}
.hero-img {
  padding: 0 0 0 30px;
  position: relative;
  margin-right: 10px;
}

img {
  vertical-align: middle;
}
.scale-anim{
  position: relative;
  overflow: hidden;
}
.hero-img img {
  width: 100%;
  height: auto;
  transition: transform .6s ease-in-out;
}
.hero-img img:hover{
  transform: scale(1.1)
}
.hero-img:after {
  content: "";
  width: 80%;
  height: 80%;
  position: absolute;
  left: 0px;
  bottom: -30px;
  background-image: url("~@/assets/img/dots.png");
  background-repeat: repeat;
  z-index: -1;
}
p {
  line-height: 1.6;
  margin: 0;
  font-size: 16px;
  color: #748182;
  font-weight: 400;
  margin-top: 20px;
  font-family: "Poppins", sans-serif;
}
.content p b {
  font-weight: 700;
  font-size: 18px;
}

.content h3 {
  font-weight: 1000;
  margin-bottom: 5px;
  letter-spacing: 1px;
  font-size: 2.3rem;
  font-family: "Montserrat", sans-serif;
  color: #343434;
}
.content .sub-title {
  color: #999;
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  margin-top: -10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.about .skill-progress {
  margin-top: 20px;
  display: flex;
}
.skills .item {
  margin-bottom: 30px;
}
.skills h6 {
  font-size: 13px;
  color: #fff;
  font-weight: 400;
  position: relative;
  z-index: 2;
  margin-bottom: 0px;
}
.skills .skill-progress {
  width: 100%;
  padding: 5px 10px;
  border-radius: 5px;
  background: #f7f7f7;
  -webkit-box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.15) inset;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.15) inset;
  position: relative;
}
.skills .skill-progress span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 10%;
  border-radius: 5px;
  background-color: #1c1c1c;
  -webkit-transition: all 1s;
  transition: all 1s;
}
.skills .skill-progress span:after {
  content: attr(data-value);
  position: absolute;
  top: 6px;
  right: 10px;
  font-size: 11px;
  color: #fff;
}
.content .buton {
  margin-top: 20px;
}
.bg-2 {
  margin-left: 5px;
  background: transparent;
}
.buton-bg {
  background: #1c1c1c;
  color: #eee;
}
.buton {
  padding: 10px 30px;
  border: 1px solid #1c1c1c;
  border-radius: 5px;
  font-size: 13px;
  transition: all 0.5s linear;
  display: inline-block;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
}
.buton-bg:hover {
  background: transparent !important;
  color: #343434 !important;
}
.bg-2:hover {
  background: #1c1c1c;
  color: #eee;
}
@media (min-width: 0px) and (max-width: 765px) {
  .about .row .col-sm-12:nth-child(1) {
    margin-top: -50px;
  }
  .about .row .col-sm-12:nth-child(2) {
    margin-top: 50px;
  }
}
</style>