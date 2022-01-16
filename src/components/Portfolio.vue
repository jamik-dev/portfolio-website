<template>
  <section class="portfolio">
    <div class="container">
      <!-- <div class="row"> -->
      <div class="section-head">
        <h3>Portfolio</h3>
      </div>
      <div class="filtering">
        <span>All</span>
        <span>Brand</span>
        <span>Design</span>
        <span>Graphic</span>
      </div>
      <div class="gallery">
        <div class="row">
          <div
            v-for="data in datas"
            :key="data.id"
            class="col-md-4 col-sm-6 items"
          >
            <div class="item-img">
              <img :src="data.url" alt="" />
              <div class="item-img-overlay">
                <div class="overlay-info">
                  <h6>{{ data.title }}</h6>
                  <div class="icons">
                    <span class="icon">
                      <a href=""><i :class="data.link"></i></a>
                    </span>
                    <span class="icon-link">
                      <a :href="data.way"><i :class="data.linkicon"></i></a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </section>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const datas = ref([
      {
        url: "/img/portfolio/1.jpg",
        title: "Web Design",
        link: "fa fa-heart-broken",
        way: "/img/portfolio/1.jpg",
        linkicon: "fa fa-search-plus",
      },
      {
        url: "/img/portfolio/2.jpg",
        title: "Web Design",
        link: "fa fa-heart-broken",
        way: "/img/portfolio/2.jpg",
        linkicon: "fa fa-search-plus",
      },
      {
        url: "/img/portfolio/3.jpg",
        title: "Web Design",
        link: "fa fa-heart-broken",
        way: "/img/portfolio/3.jpg",
        linkicon: "fa fa-search-plus",
      },
      {
        url: "/img/portfolio/4.jpg",
        title: "Web Design",
        link: "fa fa-heart-broken",
        way: "/img/portfolio/4.jpg",
        linkicon: "fa fa-search-plus",
      },
      {
        url: "/img/portfolio/5.jpg",
        title: "Web Design",
        link: "fa fa-heart-broken",
        way: "/img/portfolio/5.jpg",
        linkicon: "fa fa-search-plus",
      },
      {
        url: "/img/portfolio/6.jpg",
        title: "Web Design",
        link: "fa fa-heart-broken",
        way: "/img/portfolio/6.jpg",
        linkicon: "fa fa-search-plus",
      },
    ]);
    return { datas };
  },
};
</script>
<style>
img{
  width: 100%;
  height: auto;
}
.portfolio {
  overflow: hidden;
  height: 160vh;
}
.section-head h3{
  margin-top: 100px;
  font-weight: 900;
  font-size: 40px;
  position: relative;
  display: inline-block;
  z-index:4;
}
.filtering{
  text-align: center;
  margin-bottom: 50px!important;
}
.portfolio .filtering span {
  margin: 0 15px;
  color: #222;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  z-index: 2;
}
.portfolio .items {
  padding: 0 15px;
  margin-bottom: 30px;
}
.portfolio .item-img {
  position: relative;
  overflow: hidden;
}
.portfolio .item-img:hover .item-img-overlay {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
.portfolio .item-img:hover h6,
.portfolio .item-img:hover .icons {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
.portfolio .item-img h6 {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 2px;
  position: relative;
  margin-bottom: 15px;
  -webkit-transform: translateY(-15px);
  transform: translateY(-15px);
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  display: flex;

}
.portfolio .item-img .icon-link i, .portfolio .item-img .icon i{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.portfolio .item-img .icon a, .portfolio .item-img .icon-link a {
  display: inline-block;
  width: 30px;
  height: 30px;
  font-size: 1.4rem;
  line-height: 28px;
  border-radius: 50%;
  border: 1px solid #111;
  background: #111;
  color: #eee;
  transition: all 0.5s linear;
  position: relative;
  margin-right: 10px;
}
.portfolio .item-img .icon a:hover, .portfolio .item-img .icon-link a:hover {
  background: transparent;
  color: #000;
}
.portfolio .item-img .icons{
  text-align: center; 
}
.portfolio .item-img-overlay {
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  background: rgba(255, 255, 255, 0.95);
  opacity: 0;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  z-index: 2;
  -webkit-transform: translateY(10px);
  transform: translateY(10px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
