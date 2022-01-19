<template>
  <section class="clients">
    <div class="container">
      <div class="section-head"><h3>Testimonials</h3></div>
      <swiper :slides-per-view="3" :space-between="50">
        <swiper-slide>
          <div class="owl-carousel" v-for="item in items" :key="item.id">
            <div class="row">
              <div class="col-12">
                <div class="citem">
                  <div class="author-img"><img :src="item.url" alt="" /></div>
                  <p>{{ item.speech }}</p>
                  <h6>{{ item.customer }}</h6>
                  <span>{{ item.customerItem }}</span>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
// import { Swiper, SwiperSlide } from "swiper/vue";
// import "swiper/css";
import { ref } from "vue";
export default {
  components: {
    // Swiper,
    // SwiperSlide,
  },
  setup() {
    const items = ref([
      {
        url: "/img/clients/1.jpg",
        speech:
          "Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        customer: "Alex Smith",
        customerItem: "Envato Customer",
      },
      {
        url: "/img/clients/1.jpg",
        speech:
          "Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        customer: "Alex Smith",
        customerItem: "Envato Customer",
      },
      {
        url: "/img/clients/1.jpg",
        speech:
          "Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        customer: "Alex Smith",
        customerItem: "Envato Customer",
      },
    ]);
    return { items };
  },
};
</script>
<style>
.clients {
  width: 100%;
  height: auto;
  background: #f7f7f7;
  margin-top: 100px;
}
.clients .container {
  text-align: center;
}
.clients .citem .author-img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 15px;
}
.clients .citem p {
  word-spacing: 2px;
  width: 80%;
  display: inline-block;
}
.clients .citem h6 {
  font-size: 16px;
  font-weight: 600;
  margin: 30px 0 5px;
}
.clients .citem span {
  font-size: 12px;
  font-weight: 600;
  color: #888;
  margin-bottom: 30px;
}
</style>