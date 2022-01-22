<template>
  <section class="services">
    <div class="container">
      <div class="section-head">
        <h3>Services</h3>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="item">
            <span class="icon"
              ><i aria-hidden="true" class="fa fa-laptop"></i
            ></span>
            <h6>Web Design</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
              nisi dolore aliquam dolores animi quaerat a eveniet.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="item">
            <span class="icon"
              ><i aria-hidden="true" class="fa fa-bullhorn"></i
            ></span>
            <h6>Branding</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
              nisi dolore aliquam dolores animi quaerat a eveniet.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="item">
            <span class="icon"
              ><i aria-hidden="true" class="fa fa-umbrella"></i
            ></span>
            <h6>Development</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
              nisi dolore aliquam dolores animi quaerat a eveniet.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="item">
            <span class="icon"
              ><i aria-hidden="true" class="fa fa-crown"></i
            ></span>
            <h6>Creative Design</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
              nisi dolore aliquam dolores animi quaerat a eveniet.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="item">
            <span class="icon"
              ><i aria-hidden="true" class="fa fa-tv"></i
            ></span>
            <h6>Fully Responsive</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
              nisi dolore aliquam dolores animi quaerat a eveniet.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="item">
            <span class="icon"
              ><i aria-hidden="true" class="fa fa-camera"></i
            ></span>
            <h6>Retina Ready</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
              nisi dolore aliquam dolores animi quaerat a eveniet.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  setup() {
  },
};
</script>

<style>
.services {
  background: #f7f7f7;
  padding: 100px 0;
  padding-bottom: 70px;
  position: relative;
}
.services .container{
  margin-top: -100px;
}
.section-head {
  margin-bottom: 80px;
  text-align: center;
}
.section-head h3 {
  font-weight: 1000;
  font-size: 40px;
  position: relative;
  letter-spacing: 1px;
  display: inline-block;
  z-index: 4;
}
.section-head h3:after {
  content: "";
  width: 100%;
  height: 30px;
  background-image: url(/img/dots.png);
  background-repeat: repeat;
  position: absolute;
  bottom: -10px;
  left: 0;
  z-index: -1;
}
.services .item {
  padding: 50px 20px;
  background: #fff;
  -webkit-box-shadow: 0px 10px 30px -8px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 30px -8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  border-radius: 5px;
  text-align: center;
}
.services .item:hover .icon {
  background: #1c1c1c;
  color: #eee;
}
.services .item .icon {
  font-size: 30px;
  margin-bottom: 20px;
  width: 70px;
  height: 70px;
  display: inline-block;
  line-height: 70px;
  background: #f7f7f7;
  border-radius: 50%;
  -webkit-transition: all 0.5s;
  transition: all 0.5s linear;
}

.services .item h6 {
  margin-bottom: 15px;
  font-weight: 900;
  font-size: 20px;
  font-family: Arial;
}
.services .item p {
  font-family: Arial;
  word-spacing: 2px;
  font-weight: 400;
  font-size: 14px;
}
@media (min-width: 0) and (max-width: 767px) {
  .services {
    margin-top: 300px;
  }
}
</style>