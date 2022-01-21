<template>
  <section class="blog">
    <div class="container">
      <div class="section-head">
        <h3>Our Blog</h3>
      </div>
      <Carousel
        :settings="settings"
        :breakpoints="breakpoints"
        :autoplay="2000"
        :transition="1000"
        :wrap-around="true"
      >
        <Slide v-for="item in datas" :key="item.id">
          <!-- <div class="row">  -->
          <div class="bl">
            <div class="pitem">
              <div class="post-img">
                <img :src="item.url" alt="" />
              </div>
              <div class="content">
                <h6 class="tag">{{ item.title }}<a href=""></a></h6>
                <h4>
                  <a href="">{{ item.post }}</a>
                </h4>
                <span class="more"><a href="">Read More</a></span>
              </div>
            </div>
          </div>
          <!-- </div>  -->
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>
<script>
import { ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  setup() {
    const datas = ref([
      {
        url: "/img/blog/1.jpg",
        title: "Wordpress",
        post: "Top WordPress Themes and Plugins for Hotels, Travel, and it",
      },
      {
        url: "/img/blog/2.jpg",
        title: "Trends",
        post: "Master These Awesome New Skills in March 2018 was opened",
      },
      {
        url: "/img/blog/3.jpg",
        title: "Themeforest",
        post: "The 20 Best Lightroom Presets You Need to Know About",
      },
      {
        url: "/img/blog/4.jpg",
        title: "Trends",
        post: "Best Design Items to Appeal to the Millennial Generation and",
      },
    ]);
    const settings = ref({
      itemsToshow: 1,
      snapAlign: "center",
      wrapAround: "true"
    });

    const breakpoints = ref({
      767: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      1200: {
        itemsToShow: 3,
        snapAlign: "start",
        wrapAround: "false"
      },
    });
    return { datas, settings, breakpoints };
  },
};
</script>
<style>
.blog {
  background: #f7f7f7;
  height: 130vh;
}
.blog .bl {
  margin: 0 10px;
  height: 100%;
}
.blog .pitem {
  margin-bottom: 30px;
  -webkit-box-shadow: 0px 10px 30px -8px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 30px -8px rgba(0, 0, 0, 0.1);
}
.blog .pitem .post-img {
  overflow: hidden;
}
.blog .pitem .post-img:hover img {
  -webkit-transform: scale(1.15);
  transform: scale(1.15);
}
.blog .pitem img {
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.blog .pitem .content {
  background: #fff;
  padding: 30px 15px;
  text-align: start;
}
.blog .pitem .tag {
  font-size: 14px;
  font-weight: 600;
  color: #888;
  margin-bottom: 10px;
}
.blog .pitem h4 {
  font-weight: 1000;
  font-size: 20px;
  line-height: 1.6;
  letter-spacing: 0.4px;
  margin-bottom: 15px;
}
.blog .content a {
  text-decoration: none;
  color: inherit;
}
.blog .pitem .more {
  font-size: 1.2rem;
  border-bottom: 2px solid #333;
}
@media (min-width: 0px) and (max-width: 767px){
  .blog{
    margin-top: 500px;
    height: 110vh;
  }
}
</style>
